import { Calendar, Clock } from 'lucide-react';
import {MoviesPageStyle} from '../../styles/movies/moviesPage.js';
import { useEffect, useState } from 'react';
import MOVIES from '../../assets/dummymdata.js';
import { NavLink } from 'react-router-dom';
/*
  Template+Styling ;
      Navbar --> called at the Component previously ;
      Footer -->called too at the Component previously;
    MoviesPage-Component :
      first div-container 
        search-bar + categories = [Allmovies , Action , Horror , Comedy ,.....];
      second div-container [6-movies at each row]
        movie-cards -styling in order  
          each card will carry the image 
          when hover show movie-info , release year 
          title 
          category 
      last div-container :
        Prev-Arrow paginations [1,2,3,4,5] Right-Arrow
*/

/*
  Sample:
    {
    id: 11,
    title: "The Northman",
    category: "action",
    image: M5,
    duration: "2h 20m",
    rating: "7.8",
    genre: "Action",
    price: 250,
    synopsis: "High-octane aerial action and a tale of duty and brotherhood set in the world of fighter pilots.",
    director: [
      { name: "Karan Verma", img: FMD1 },
      { name: "Rhea Kapoor", img: FMD2 },
    ],
*/

export const MoviesPage = () => {
    const allMovies = MOVIES;
    console.log(allMovies.length);
    
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeCategory, setActiveCategory] = useState<string>('All Movies');
    const [filteredMovies, setFilteredMovies] = useState(allMovies);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const moviesPerPage = 8;

    const categories = [
        { id: 'All Movies', name: 'All Movies' },
        { id: 'Action', name: 'Action' },
        { id: 'Horror', name: 'Horror' },
        { id: 'Comedy', name: 'Comedy' },
        { id: 'Adventure', name: 'Adventure' },
    ];

    useEffect(() => {

      const getMovies = ()=>{
          let filtered = allMovies;
          
          // Filter by category
          if (activeCategory !== 'All Movies') {
              filtered = filtered.filter(movie => 
                  movie.category?.toLowerCase() === activeCategory.toLowerCase() || 
                  movie.genre?.toLowerCase() === activeCategory.toLowerCase()
              );
          }
          
          // Filter by search query
          if (searchQuery.trim().length !== 0) {
              filtered = filtered.filter(movie => 
                  movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
              );
          }
          
          setFilteredMovies(filtered);
          setCurrentPage(1); // Reset to first page when filters change
        }
        getMovies();
    }, [searchQuery, activeCategory, allMovies]);

    // Pagination logic
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className={MoviesPageStyle.container}>
                {/* Header with Search and Categories */}
                <div className={MoviesPageStyle.header.base}>
                    <div className={MoviesPageStyle.header.searchInput.base}>
                        <input 
                            type="text" 
                            placeholder='Search for movies...' 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={MoviesPageStyle.header.searchInput.input}
                        />
                    </div>
                    <div className={MoviesPageStyle.header.categories.base}>
                        {categories.map((category) => (
                            <div key={category.id} className={MoviesPageStyle.header.categories.category}>
                                <button 
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`${MoviesPageStyle.header.categories.button} ${
                                        activeCategory === category.id ? 'bg-red-600 border-red-500' : ''
                                    }`}
                                >
                                    {category.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Movies Grid */}
                <div className={MoviesPageStyle.body}>
                    <div className={MoviesPageStyle.cards.base}>
                        {currentMovies.map((movie) => (
                          <div key={movie.id} className={MoviesPageStyle.cards.card}>
                              <NavLink to={`/movies/movie/${movie.id}`}>
                                {/* Image */}
                                <div className={MoviesPageStyle.cards.image.container}>
                                    <img 
                                        src={movie.image} 
                                        alt={movie.title} 
                                        className={MoviesPageStyle.cards.image.base}
                                    />

                                </div>
                                
                                {/* Hover Overlay */}
                                <div className={MoviesPageStyle.cards.overlay.base}>
                                    <div className={MoviesPageStyle.cards.overlay.info}>
                                        <h3 className={MoviesPageStyle.cards.overlay.title}>
                                            {movie.title}
                                        </h3>
                                        <div className={MoviesPageStyle.cards.overlay.meta}>
                                            <div className={MoviesPageStyle.cards.overlay.metaItem}>
                                                <Calendar size={16} />
                                                <span>{movie.release}</span> 
                                            </div>
                                            <div className={MoviesPageStyle.cards.overlay.metaItem}>
                                                <Clock size={16} />
                                                <span>{movie.duration}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm line-clamp-3">
                                            {movie.synopsis}
                                        </p>
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Footer */}
                {totalPages > 1 && (
                    <div className={MoviesPageStyle.footer.base}>
                        <div className={MoviesPageStyle.footer.pagination.base}>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={MoviesPageStyle.footer.pagination.button}
                            >
                                ←
                            </button>
                            
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`${MoviesPageStyle.footer.pagination.pageNumber} ${
                                        currentPage === index + 1 ? MoviesPageStyle.footer.pagination.activePage : ''
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={MoviesPageStyle.footer.pagination.button}
                            >
                                →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
