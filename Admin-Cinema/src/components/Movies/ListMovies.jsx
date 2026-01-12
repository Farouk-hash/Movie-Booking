import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Film, Star, Clock, Play, Search, Filter } from 'lucide-react';
import { ListMoviesStyle } from '../../styles/listmovies.js';
import { MovieModalDetails } from './MovieModalDetails.jsx';

const MOVIE_TYPES = [
  { value: '', label: 'All Types', icon: Film },
  { value: 'normal', label: 'Normal', icon: Film },
  { value: 'featured', label: 'Featured', icon: Star },
  { value: 'releaseSoon', label: 'Coming Soon', icon: Clock },
  { value: 'latestTrailers', label: 'Latest Trailers', icon: Play },
];
const MOVIE_CATEGORIES = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Thriller',
  'Romance',
  'Adventure',
  'Fantasy',
  'Animation',
  'Documentary',
];

export const ListMovies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movieType, setMovieType] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalMovies: 0,
        hasNextPage: false,
        hasPrevPage: false,
        pageSize: 10,
    });

    const [selectedMovieID ,setSelectedMovieID] = useState(null);
    const [isModalOpen , setIsModalOpen] = useState(false);

    // Build query parameters
    const buildQueryParams = () => {
        const params = new URLSearchParams();

        if (searchQuery) params.append('search', searchQuery);
        if (movieType) params.append('type', movieType);
        if (selectedCategories.length > 0) params.append('category', selectedCategories.join(','));
        if (pagination.currentPage > 1) params.append('page', pagination.currentPage);

        params.append('limit', '10');
        params.append('sort', 'createdAt');
        params.append('order', 'desc');

        return params.toString();
    };

    const getFullImageUrl = (imagePath) => {
        if (!imagePath) return null;

        // If it's already a full URL, return as is
        if (imagePath.startsWith('http')) return imagePath;
        // If it starts with /assets, prepend your backend URL
        if (imagePath.startsWith('/assets')) {
            return `http://localhost:5000${imagePath}`;
        }
    };

    const fetchMovies = async () => {
        setLoading(true);
        try {
        const queryString = buildQueryParams();
        const url = `http://localhost:5000/api/movies?${queryString}`;
        console.log('📡 Fetching movies from:', url);
        console.log('Query string: ',queryString);

        const result = await axios.get(url);
        const data = result?.data?.data;

        setMovies(data?.movies || []);
        setPagination(
            data?.pagination || {
            currentPage: 1,
            totalPages: 1,
            totalMovies: 0,
            hasNextPage: false,
            hasPrevPage: false,
            pageSize: 10,
            },
        );
        } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
        } finally {
        setLoading(false);
        }
    };

    // Fetch movies when filters change
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            console.log('searchQuery:',searchQuery);
            console.log('selectedCategories:', selectedCategories); // Add this to debug
            fetchMovies();
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [searchQuery, movieType, selectedCategories, pagination.currentPage]);

    const handleCategoryToggle = (category) => {
        setSelectedCategories((prev) => {
        if (prev.includes(category)) {
            return prev.filter((c) => c !== category);
        } else {
            return [...prev, category];
        }
        });
    };

    const handlePageChange = (newPage) => {
        setPagination((prev) => ({ ...prev, currentPage: newPage }));
    };

    const clearFilters = () => {
        setSearchQuery('');
        setMovieType('');
        setSelectedCategories([]);
        setPagination((prev) => ({ ...prev, currentPage: 1 }));
    };


    const handleMovieDetailsModelClick = (movieID)=>{
        setSelectedMovieID(movieID);
        setIsModalOpen(true);
        
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMovieID(null);
    }; 

    return (
        <div className={ListMoviesStyle.container}>
            <div className={ListMoviesStyle.wrapper}>
                <h1 className={ListMoviesStyle.title} style={{fontFamily:'Dance'}}>
                    <Film className="h-10 w-10 text-red-500" />
                    Movie Library
                </h1>


                {/* Search and Filters */}
                <div className={ListMoviesStyle.filters.container}>
                <div className={ListMoviesStyle.filters.grid}>
                    {/* Search Input */}
                    <div className={ListMoviesStyle.search.container}>
                    <Search className={ListMoviesStyle.search.icon} />
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={ListMoviesStyle.search.input}
                    />
                    </div>

                    {/* Movie Type Filter */}
                    <select
                    value={movieType}
                    onChange={(e) => setMovieType(e.target.value)}
                    className={ListMoviesStyle.select}
                    >
                    {MOVIE_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                        {type.label}
                        </option>
                    ))}
                    </select>

                    {/* Clear Filters */}
                    <button
                    onClick={clearFilters}
                    className={ListMoviesStyle.button.clear}
                    >
                    Clear Filters
                    </button>
                </div>

                {/* Categories Filter */}
                <div className={ListMoviesStyle.categories.container}>
                    <label className={ListMoviesStyle.categories.label}>
                    <Filter className="h-4 w-4" />
                    Filter by Categories
                    </label>
                    <div className={ListMoviesStyle.categories.grid}>
                    {MOVIE_CATEGORIES.map((category) => (
                        <label
                        key={category}
                        className={ListMoviesStyle.categories.checkboxLabel}
                        >
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className={ListMoviesStyle.categories.checkbox}
                        />
                        <span className={ListMoviesStyle.categories.checkboxText}>
                            {category}
                        </span>
                        </label>
                    ))}
                    </div>
                </div>

                {/* Active Filters */}
                {(searchQuery || movieType || selectedCategories.length > 0) && (
                    <div className={ListMoviesStyle.activeFilters.container}>
                    {searchQuery && (
                        <span
                        className={`${ListMoviesStyle.activeFilters.tag} ${ListMoviesStyle.activeFilters.search}`}
                        >
                        Search: {searchQuery}
                        </span>
                    )}
                    {movieType && (
                        <span
                        className={`${ListMoviesStyle.activeFilters.tag} ${ListMoviesStyle.activeFilters.type}`}
                        >
                        Type: {MOVIE_TYPES.find((t) => t.value === movieType)?.label}
                        </span>
                    )}
                    {selectedCategories.map((category) => (
                        <span
                        key={category}
                        className={`${ListMoviesStyle.activeFilters.tag} ${ListMoviesStyle.activeFilters.category}`}
                        >
                        {category}
                        </span>
                    ))}
                    </div>
                )}
                </div>

                {/* Loading State */}
                {loading && (
                <div className={ListMoviesStyle.loading.container}>
                    <div className={ListMoviesStyle.loading.spinner}></div>
                    <p className={ListMoviesStyle.loading.text}>Loading movies...</p>
                </div>
                )}

                {/* Movies Grid */}
                {!loading && movies.length === 0 ? (
                <div className={ListMoviesStyle.empty.container}>
                    <p className={ListMoviesStyle.empty.title}>No movies found</p>
                    <p className={ListMoviesStyle.empty.subtitle}>
                    Try adjusting your filters
                    </p>
                </div>
                ) : (
                <>
                    <div className={ListMoviesStyle.movies.grid}>
                    {movies.map((movie) => (
                        <div key={movie._id} className={ListMoviesStyle.movies.card} onClick={()=>handleMovieDetailsModelClick(movie._id)}>
                            {movie.image && (
                            <img
                                src={getFullImageUrl(movie.image)}
                                alt={movie.title}
                                className={ListMoviesStyle.movies.image}
                            />
                            )}
                            <div className={ListMoviesStyle.movies.content}>
                            <h3 className={ListMoviesStyle.movies.title}>
                                {movie.title}
                            </h3>
                            <p className={ListMoviesStyle.movies.genre}>
                                {movie.genre}
                            </p>
                            <div className={ListMoviesStyle.movies.meta}>
                                <span className={ListMoviesStyle.movies.rating}>
                                ⭐ {movie.rating}
                                </span>
                                <span className={ListMoviesStyle.movies.type}>
                                {movie.type}
                                </span>
                            </div>
                            
                            </div>
                        </div>
                    ))}
                    </div>

                    {/* Pagination */}
                    {pagination.totalPages > 1 && (
                    <div className={ListMoviesStyle.pagination.container}>
                        <button
                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                        disabled={!pagination.hasPrevPage}
                        className={ListMoviesStyle.button.pagination}
                        >
                        Previous
                        </button>

                        <span className={ListMoviesStyle.pagination.info}>
                        Page {pagination.currentPage} of {pagination.totalPages}
                        </span>

                        <button
                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                        disabled={!pagination.hasNextPage}
                        className={ListMoviesStyle.button.pagination}
                        >
                        Next
                        </button>
                    </div>
                    )}
                </>
                )}
            </div>
            <MovieModalDetails
                movieID={selectedMovieID}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                getFullImageUrl={getFullImageUrl}
            />
        </div>
    );
};
