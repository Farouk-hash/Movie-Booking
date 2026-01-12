import {MovieSeatedStyle} from '../../styles/movies/movieSeated.js'
import MOVIES from '../../assets/dummymdata.js'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import {failedToaster , successToaster} from '../../utilites/toasters.js';
import { ChartBarIcon, Clock, MapPin, Sofa } from 'lucide-react';
import { ToastContainer } from 'react-toastify';

// Seat Data Structure
const ROWS = [
    {id:'A' , count:8 , type:'standard'},
    {id:'B' , count:8 , type:'standard'},
    {id:'C' , count:8 , type:'standard'},
    {id:'D' , count:8 , type:'standard'},
    {id:'E' , count:8 , type:'recliner'},
    {id:'F' , count:8 , type:'recliner'},
]

export const MovieSeated = () => {
    const { id } = useParams();
    const movieId = Number(id);

    const [searchParams] = useSearchParams();
    let time = searchParams.get('time');
    if (time && time.includes(' ')) {
        time = time.replace(' ', '+');
    }
    const audi = searchParams.get('audi');

    const selectedMovie = useMemo(() => MOVIES.find((movie) => movie.id === movieId), [movieId]);
    const navigator = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    // Track user selections and calculate costs in real-time.
    const [standardSeats, setStandardSeats] = useState(0);
    const [reclinerSeats, setReclinerSeats] = useState(0);
    const [standardPrice, setStandardPrice] = useState(0);
    const [reclinerPrice, setReclinerPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const getStorageSeatKey = () => {
        return `seats_${movieId}_${time}_${audi}`;
    };

    const getDateStorageKey = () => {
        return `current_date_${movieId}_${time}_${audi}`;
    };

    // Check if movie exists
    useEffect(() => {
        
        if (!selectedMovie) {
            failedToaster('Movie not found');
            setTimeout(() => {
                navigator('/movies');
            }, 1000);
        }

        const getSeatedSelectedBefore = ()=>{

            const json = localStorage.getItem(getStorageSeatKey());
            const dateLocalStorage = localStorage.getItem(getDateStorageKey());
            if(json && JSON.parse(dateLocalStorage) == time){
                setSelectedSeats(JSON.parse(json));
            }
        }
        getSeatedSelectedBefore();
    }, [selectedMovie, navigator,time]);

    // Calculate prices when seats change
    useEffect(() => {
        const calculatingPrices = ()=>{

            const standardTotal = standardSeats * (selectedMovie?.price || 0);
            const reclinerTotal = reclinerSeats * ((selectedMovie?.price || 0) * 1.5); // Recliner seats are 50% more expensive
            const grandTotal = standardTotal + reclinerTotal;
            
            setStandardPrice(standardTotal);
            setReclinerPrice(reclinerTotal);
            setTotalPrice(grandTotal);
        }
        calculatingPrices();

    }, [standardSeats, reclinerSeats, selectedMovie]);

    // work as toggle button for seat-clicked ; 
    const seatClicked = (rowId: string, seatNumber: number, rowType: string) => {
        const seatId = `${rowId}${seatNumber}`;
        
        // Check if seat is already selected
        const isAlreadySelected = selectedSeats.includes(seatId);
        
        if (isAlreadySelected) {
            // Remove seat
            setSelectedSeats(prev => prev.filter(seat => seat !== seatId));
            if (rowType === 'standard') {
                setStandardSeats(prev => prev - 1);
            } else {
                setReclinerSeats(prev => prev - 1);
            }
        } else {
            // Add seat
            setSelectedSeats(prev => [...prev, seatId]);
            if (rowType === 'standard') {
                setStandardSeats(prev => prev + 1);
            } else {
                setReclinerSeats(prev => prev + 1);
            }
        }
    };

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            failedToaster('Please select at least one seat');
            return;
        }
        
        successToaster(`Booked ${selectedSeats.length} seat(s) successfully!`);
        // Send the booking to your backend
        console.log('Booking details:', {
            movie: selectedMovie?.title,
            time,
            audi,
            seats: selectedSeats,
            totalPrice
        });

        // adding to local-storage for testing ; 
        localStorage.setItem(getStorageSeatKey(), JSON.stringify(selectedSeats)); // seats
        localStorage.setItem(getDateStorageKey(), JSON.stringify(time))// date+timestamp ;
    };

    const formatTime = (timeString: string) => {
        if (!timeString) return '';
        const date = new Date(timeString);
        return date.toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
            }) + ' • ' + date.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });
    };

    if (!selectedMovie) {
        return <div>Loading...</div>;
    }

    return (
 
        <div className={MovieSeatedStyle.container}>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            {/* Movie Info */}
            <div className={MovieSeatedStyle.movieInfo}>
                <div className={MovieSeatedStyle.moviePoster}>
                    <img src={selectedMovie.image} alt={selectedMovie.title} />
                </div>
                <div className={MovieSeatedStyle.movieDetails}>
                    <h2 className={MovieSeatedStyle.movieTitle} style={{fontFamily:'Dance'}}>{selectedMovie.title}</h2>
                    <div className={MovieSeatedStyle.movieMeta}>
                        <div className={MovieSeatedStyle.metaItem}>
                            <Clock size={16} />
                            <span>{formatTime(time || '')} • {selectedMovie.duration}</span>
                        </div>
                        <div className={MovieSeatedStyle.metaItem}>
                            <MapPin size={16} />
                            <span>{audi} • {selectedMovie.genre}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Screen */}
            <div className={MovieSeatedStyle.screen}>
                <div className={MovieSeatedStyle.screenLabel} style={{fontFamily:'Dance'}}>SCREEN</div>
            </div>

            {/* Seating Layout */}
            <div className={MovieSeatedStyle.seatingLayout}>
                {ROWS.map((row) => (
                    <div key={row.id} className={MovieSeatedStyle.row}>
                        <div className={MovieSeatedStyle.rowLabel}>{row.id}</div>
                        <div className={MovieSeatedStyle.seats}>
                            {Array.from({ length: row.count }, (_, index) => {
                                const seatNumber = index + 1;
                                const seatId = `${row.id}${seatNumber}`;
                                const isSelected = selectedSeats.includes(seatId);
                                
                                return (
                                    <button
                                        key={seatNumber}
                                        onClick={() => seatClicked(row.id, seatNumber, row.type)}
                                        className={`${MovieSeatedStyle.seat} ${
                                            isSelected ? MovieSeatedStyle.seatSelected : ''
                                        } ${MovieSeatedStyle[row.type]}`}
                                        disabled={false} 
                                    >
                                        {row.type === 'standard' ? (
                                            <ChartBarIcon className="w-5 h-5" />
                                        ) : (
                                            <Sofa className="w-5 h-5" /> 
                                        )}
                                        <span className="text-[10px] font-semibold"> {seatNumber}</span>
                                    </button>
                                );
                            })}
                        </div>
                        <div className={MovieSeatedStyle.rowLabel}>{row.id}</div>
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className={MovieSeatedStyle.legend}>
                <div className={MovieSeatedStyle.legendItem}>
                    <div className={`${MovieSeatedStyle.seat} ${MovieSeatedStyle.standard}`}></div>
                    <span>Standard (${selectedMovie.price})</span>
                </div>
                <div className={MovieSeatedStyle.legendItem}>
                    <div className={`${MovieSeatedStyle.seat} ${MovieSeatedStyle.recliner}`}></div>
                    <span>Recliner (${selectedMovie.price * 1.5})</span>
                </div>
                <div className={MovieSeatedStyle.legendItem}>
                    <div className={`${MovieSeatedStyle.seat} ${MovieSeatedStyle.seatSelected}`}></div>
                    <span>Selected</span>
                </div>
            </div>

            {/* Booking Summary */}
            <div className={MovieSeatedStyle.bookingSummary}>
                <div className={MovieSeatedStyle.summaryDetails}>
                    <div className={MovieSeatedStyle.summaryItem}>
                        <span>Standard Seats ({standardSeats})</span>
                        <span>${standardPrice}</span>
                    </div>
                    <div className={MovieSeatedStyle.summaryItem}>
                        <span>Recliner Seats ({reclinerSeats})</span>
                        <span>${reclinerPrice}</span>
                    </div>
                    <div className={MovieSeatedStyle.summaryTotal}>
                        <span>Total</span>
                        <span>${totalPrice}</span>
                    </div>
                </div>
                <button 
                    onClick={handleBooking}
                    className={MovieSeatedStyle.bookButton}
                    disabled={selectedSeats.length === 0}
                >
                    Book Now ({selectedSeats.length} seats)
                </button>
            </div>
        </div>
                
    );
};

