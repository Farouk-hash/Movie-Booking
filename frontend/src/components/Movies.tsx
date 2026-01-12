import {moviesStyle} from '../styles/components/movies.js';
import moviesData from '../assets/dummymoviedata.js';
import { Ticket, Clock, Tag} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
    const movies = moviesData.slice(0,6);
    
    return (
        <>
            <div className={moviesStyle.container}>
                <div className={moviesStyle.header}>
                    <h3 style={{fontFamily: 'dance'}} className="text-2xl font-bold text-white border-b border-gray-700">
                        Featured Movies
                    </h3>
                </div>
                <div className={moviesStyle.cards.base}>
                    {movies.map((movie)=>(
                    <div key={movie.id} className={moviesStyle.cards.card}>
                        {/* Image with overlay for text */}
                        <div className={moviesStyle.cards.image}>
                            <img src={movie.img} alt={movie.title} className={moviesStyle.cards.imageTag} />
                            {/* Information overlay on image */}
                            <div className={moviesStyle.cards.overlay}>
                                <NavLink to={`/movies/movie/${movie.id}`} className={moviesStyle.cards.links}>
                                    <div className={moviesStyle.cards.informations.title}>
                                        <Ticket className={moviesStyle.cards.informations.titleIcon}/> 
                                        <h4 className="text-white font-semibold text-sm">{movie.title}</h4>
                                    </div>
                                    <div className={moviesStyle.cards.informations.duration}>
                                        <Clock className={moviesStyle.cards.informations.titleIcon}/> {/* Changed to Clock */}
                                        <h4 className="text-white font-semibold text-xs">{movie.duration}</h4> {/* Smaller text */}
                                    </div>
                                    <div className={moviesStyle.cards.informations.genre}>
                                        <Tag className={moviesStyle.cards.informations.titleIcon}/> {/* Changed to Tag */}
                                        <h4 className="text-white font-semibold text-xs">{movie.genre}</h4> {/* Smaller text */}
                                    </div>
                                    <div className={moviesStyle.cards.informations.category}>
                                        <h5 className="text-xs">{movie.category}</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}