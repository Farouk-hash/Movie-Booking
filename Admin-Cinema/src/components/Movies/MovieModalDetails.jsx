import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, Clock, Star, Users, X } from 'lucide-react';
import { MovieModalStyle } from '../../styles/moviemodaldetails';

export const MovieModalDetails = ({
  movieID,
  isOpen,
  onClose,
  getFullImageUrl,
}) => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  // Escape key listener
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const fetchMovieDetails = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `http://localhost:5000/api/movies/movie/${movieID}`,
      );
      const movieResult = result.data.data.movie;
      setMovie(movieResult);
    } catch (err) {
      console.log('Error Occurred: ', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (movieID && isOpen) {
      fetchMovieDetails();
    }
  }, [isOpen, movieID]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={MovieModalStyle.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={MovieModalStyle.container}>
        {loading ? (
          <div className={MovieModalStyle.loading}>Loading...</div>
        ) : movie ? (
          <div className={MovieModalStyle.content}>
            {/* Header */}
            <div className={MovieModalStyle.header}>
              <h2 className={MovieModalStyle.title}>{movie.title}</h2>
              <button onClick={onClose} className={MovieModalStyle.closeButton}>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content Grid */}
            <div className={MovieModalStyle.grid}>
              {/* Image */}
              <div className={MovieModalStyle.imageContainer}>
                <img
                  src={getFullImageUrl(movie.image)}
                  alt={movie.title}
                  className={MovieModalStyle.image}
                  onClick={() =>
                    window.open(getFullImageUrl(movie.image), '_blank')
                  }
                  title="Click to view full image"
                  style={{ cursor: 'pointer' }}
                />
              </div>

              {/* Details */}
              <div className={MovieModalStyle.details}>
                {movie.type === 'releaseSoon' ? (
                  // Release Soon Movie - Minimal Info
                  <div className={MovieModalStyle.releaseSoonContent}>
                    <div className={MovieModalStyle.comingSoonBadge}>
                      Coming Soon
                    </div>
                    <p className={MovieModalStyle.releaseText}>
                      Get ready for an amazing cinematic experience!
                    </p>

                    {movie.categories && movie.categories.length > 0 && (
                      <div className={MovieModalStyle.categoriesSection}>
                        <h3 className={MovieModalStyle.sectionTitle}>
                          Categories
                        </h3>
                        <div className={MovieModalStyle.categoriesList}>
                          {movie.categories.map((category, index) => (
                            <span
                              key={index}
                              className={MovieModalStyle.categoryTag}
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  // Full Movie Details
                  <div className={MovieModalStyle.fullDetails}>
                    {/* Basic Info Grid */}
                    <div className={MovieModalStyle.infoGrid}>
                      <div className={MovieModalStyle.infoItem}>
                        <Clock className={MovieModalStyle.infoIcon.clock} />
                        <span>
                          {movie.duration?.hours}h {movie.duration?.minutes}m
                        </span>
                      </div>
                      <div className={MovieModalStyle.infoItem}>
                        <Star className={MovieModalStyle.infoIcon.star} />
                        <span>{movie.rating}/10</span>
                      </div>
                      <div className={MovieModalStyle.infoItem}>
                        <Users className={MovieModalStyle.infoIcon.users} />
                        <span>{movie.genre}</span>
                      </div>
                      <div className={MovieModalStyle.infoItem}>
                        <Calendar
                          className={MovieModalStyle.infoIcon.calendar}
                        />
                        <span>{movie.type}</span>
                      </div>
                    </div>

                    {/* Story */}
                    {movie.story && (
                      <div className={MovieModalStyle.section}>
                        <h3 className={MovieModalStyle.sectionTitle}>Story</h3>
                        <p className={MovieModalStyle.story}>{movie.story}</p>
                      </div>
                    )}

                    {/* Categories */}
                    {movie.categories && movie.categories.length > 0 && (
                      <div className={MovieModalStyle.section}>
                        <h3 className={MovieModalStyle.sectionTitle}>
                          Categories
                        </h3>
                        <div className={MovieModalStyle.categoriesList}>
                          {movie.categories.map((category, index) => (
                            <span
                              key={index}
                              className={MovieModalStyle.categoryTag}
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Cast */}
                    {movie.cast && movie.cast.length > 0 && (
                      <div className={MovieModalStyle.section}>
                        <h3 className={MovieModalStyle.sectionTitle}>Cast</h3>
                        <div className={MovieModalStyle.peopleList}>
                          {movie.cast.map((person, index) => (
                            <span
                              key={index}
                              className={MovieModalStyle.personTag}
                            >
                              {person.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Producers */}
                    {movie.producers && movie.producers.length > 0 && (
                      <div className={MovieModalStyle.section}>
                        <h3 className={MovieModalStyle.sectionTitle}>
                          Producers
                        </h3>
                        <div className={MovieModalStyle.peopleList}>
                          {movie.producers.map((person, index) => (
                            <span
                              key={index}
                              className={MovieModalStyle.personTag}
                            >
                              {person.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Directors */}
                    {movie.directors && movie.directors.length > 0 && (
                      <div className={MovieModalStyle.section}>
                        <h3 className={MovieModalStyle.sectionTitle}>
                          Directors
                        </h3>
                        <div className={MovieModalStyle.peopleList}>
                          {movie.directors.map((person, index) => (
                            <span
                              key={index}
                              className={MovieModalStyle.personTag}
                            >
                              {person.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={MovieModalStyle.notFound}>Movie not found</div>
        )}
      </div>
    </div>,
    document.body,
  );
};
