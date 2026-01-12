import { NavLink, useParams } from 'react-router-dom'
import { MovieDetailsStyle } from '../../styles/movies/moviesDetails.js'
import { Book, Calendar, Clock, PlayCircle, SkipBack, StarIcon, User } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

export const MovieDetailsPage = ({MOVIES}) => {
    const { id } = useParams();
    const movieId = Number(id);
    const selectedMovie =  useMemo(()=>MOVIES.find((movie) => movie.id === movieId) , [movieId]) ;
    
    const [selectedDate, setSelectedDate] = useState('');
    const [availableDates, setAvailableDates] = useState([]);
    const [availableTimes, setAvailableTimes] = useState([]);

    // Extract unique dates and group times by date
    useEffect(() => {
        const groupingExtractedDates = ()=>{
            if (selectedMovie?.slots) {
                // Extract unique dates
                const dates = [...new Set(selectedMovie.slots.map(slot => {
                    const date = new Date(slot.time);
                    return date.toISOString().split('T')[0]; // Get YYYY-MM-DD
                }))].sort(); // Sort dates chronologically
    
                setAvailableDates(dates);
                
                // Set first date as selected by default
                if (dates.length > 0 && !selectedDate) {
                    setSelectedDate(dates[0]);
                }
            }
        }
        groupingExtractedDates();
    }, [selectedMovie]);

    // Update available times when date changes
    useEffect(() => {
        const availableTimes = ()=>{
            if (selectedMovie?.slots && selectedDate) {
                const times = selectedMovie.slots
                    .filter(slot => {
                        const slotDate = new Date(slot.time).toISOString().split('T')[0];
                        return slotDate === selectedDate;
                    })
                    .map(slot => {
                        const date = new Date(slot.time);
                        return {
                            time: date.toLocaleTimeString('en-US', { 
                                hour: 'numeric', 
                                minute: '2-digit',
                                hour12: true 
                            }),
                            audi: slot.audi,
                            timestamp: slot.time
                        };
                    })
                    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
                setAvailableTimes(times);
                
            }
        }
        availableTimes();
    }, [selectedDate, selectedMovie]);

    const formatDisplayDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
    };

    const backButton = () => {
        window.history.back();
    };

    const handleWatchTrailer = () => {
        if (selectedMovie?.trailer) {
            window.open(selectedMovie.trailer, '_blank');
        }
    };

    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }
    const [crews,setCrews] = useState({
        directors : [],
        producers : [],
        cast : [],
    })
    const allCrews = useMemo(()=>{
        const normalizeToArray = (item)=>{
            if (!item) return [];
            return Array.isArray(item) ? item : [item];
        }
        const directors = normalizeToArray(selectedMovie.director).map(director => ({ ...director, type: 'Director' }));
        const producers = normalizeToArray(selectedMovie.producer).map(prod => ({ ...prod, type: 'Producer' }));
        const cast = normalizeToArray(selectedMovie.cast).map(actor => ({ ...actor, type: actor.role }));
        setCrews({
            directors: directors,
            producers: producers,
            cast: cast
        });

        // return [...directors, ...producers, ...cast];
    },[selectedMovie]);
    return (
        <>
            <div className={MovieDetailsStyle.wrapper}>
                <div className={MovieDetailsStyle.container}>
                    {/* Header: LeftSide (<- Back)Btn */}
                    <div className={MovieDetailsStyle.header.base}>
                        <div className={MovieDetailsStyle.header.button.base}>
                            <div className={MovieDetailsStyle.header.button.icon}>
                                <SkipBack />
                            </div>
                            <div className={MovieDetailsStyle.header.button.text}>
                                <button onClick={() => backButton()}>Back</button>
                            </div>
                        </div>
                    </div>

                    {/* Title-Container */}
                    <div className={MovieDetailsStyle.titleContainer.base}>
                        <div className={MovieDetailsStyle.titleContainer.title}>
                            <h3 style={{fontFamily:'Dance'}}>{selectedMovie.title}</h3>
                        </div>
                        <div className={MovieDetailsStyle.titleContainer.details.base}>
                            <div className={MovieDetailsStyle.titleContainer.details.rating.base}>
                                <div className={MovieDetailsStyle.titleContainer.details.rating.icon}>
                                    <StarIcon />
                                </div>
                                {selectedMovie.rating}/10
                            </div>
                            <div className={MovieDetailsStyle.titleContainer.details.duration.base}>
                                <div className={MovieDetailsStyle.titleContainer.details.duration.icon}>
                                    <Clock />
                                </div>
                                {selectedMovie.duration}
                            </div>
                            <div className={MovieDetailsStyle.titleContainer.details.category}>
                                <h4>{selectedMovie.genre}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Movie-Details-Container */}
                    <div className={MovieDetailsStyle.movieDetailsContainer.base}>
                        {/* Image-Card + WatchTrailerBtn */}
                        <div className={MovieDetailsStyle.movieDetailsContainer.leftSide.base}>
                            <div className={MovieDetailsStyle.movieDetailsContainer.leftSide.card.wrapper}>
                                <div className={MovieDetailsStyle.movieDetailsContainer.leftSide.card.base}>
                                    <div className={MovieDetailsStyle.movieDetailsContainer.leftSide.card.image}>
                                        <img 
                                            src={selectedMovie.image || selectedMovie.img} 
                                            alt={selectedMovie.title} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <button 
                                        onClick={handleWatchTrailer}
                                        className={MovieDetailsStyle.movieDetailsContainer.leftSide.card.watchTrailer}
                                    >
                                        <PlayCircle />
                                        Watch Trailer
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ShowTimes+Casts Container */}
                        <div className={MovieDetailsStyle.movieDetailsContainer.right.base}>
                            {/* ShowTimes */}
                            <div className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.base}>
                                <div className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.header.base}>
                                    <div className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.header.icon}>
                                        <Calendar />
                                    </div>
                                    <div className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.header.text}>
                                        <h4 style={{fontFamily:'Dance'}}>Showtimes</h4>
                                    </div>
                                </div>
                                
                                {/* Date Selection */}
                                <div className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.daysItems.base}>
                                    {availableDates.map((date) => (
                                        <button
                                            key={date}
                                            onClick={() => setSelectedDate(date)}
                                            className={`${MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.daysItems.item} ${
                                                selectedDate === date ? MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.daysItems.active : ''
                                            }`}
                                        >
                                            {formatDisplayDate(date)}
                                        </button>
                                    ))}
                                </div>

                                {/* Time Slots */}
                                <div className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.timeItems.base}>
                                    {availableTimes.map((slot, index) => (
                                        <NavLink to={`/movies/movie/${movieId}/seated-selector?time=${slot.timestamp}&audi=${slot.audi}`} key={index}>
                                            <div className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.timeItems.item}>
                                                <span className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.timeItems.time}>
                                                    {slot.time}
                                                </span>
                                                <span className={MovieDetailsStyle.movieDetailsContainer.right.showTimesContainer.timeItems.audi}>
                                                    {slot.audi}
                                                </span>
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>

                            {/* Cast */}
                            <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.base}>
                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.header.base}>
                                    <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.header.icon}>
                                        <User />
                                    </div>
                                    <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.header.text}>
                                        <h4 style={{fontFamily:'Dance'}}>Cast & Crew</h4>
                                    </div>
                                </div>
                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.base}>
                                    {/* Directors */}
                                    {crews.directors?.map((director, index) => (
                                        <div key={index} className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.item}>
                                            <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.image}>
                                                <img src={director.img || director.image} alt={director.name} />
                                            </div>
                                            <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.info}>
                                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.castName}>
                                                    {director.name}
                                                </div>
                                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.castType}>
                                                    Director
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* Producer */}
                                    {crews.producers?.map((producer, index)=>(
                                        <div  key={index}  className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.item}>
                                            <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.image}>
                                                <img src={producer.img || producer.image} alt={producer.name} />
                                            </div>
                                            <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.info}>
                                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.castName}>
                                                    {producer.name}
                                                </div>
                                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.castType}>
                                                    Producer
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* Cast */}
                                    {crews.cast?.map((actor, index) => (
                                        <div key={index} className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.item}>
                                            <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.image}>
                                                <img src={actor.img || actor.image} alt={actor.name} />
                                            </div>
                                            <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.info}>
                                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.castName}>
                                                    {actor.name}
                                                </div>
                                                <div className={MovieDetailsStyle.movieDetailsContainer.right.castContainer.body.castType}>
                                                    {actor.role}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Story+Description */}
                        <div className={MovieDetailsStyle.description.base}>
                            <div className={MovieDetailsStyle.description.header.base}>
                                    <div className={MovieDetailsStyle.description.header.icon}>
                                        <Book />
                                    </div>
                                    <div className={MovieDetailsStyle.description.header.txt}>
                                        <h4 style={{fontFamily:'Dance'}}>Story</h4>
                                    </div>
                            </div>
                            <div className={MovieDetailsStyle.description.info}>
                                <p>{selectedMovie.synopsis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

