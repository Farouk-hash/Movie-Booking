import { releasesPageStyle } from '../../styles/movies/ReleasesPage.js'
import  movies  from '../../assets/dummyrdata.js'
import {EyeOff, Flame, Search } from 'lucide-react'
import { useState } from 'react'

export const ReleasesPage = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All Movies');
    const [searchQuery, setSearchQuery] = useState<string>('');
    
    const categories = [
        { id: 'All Movies', name: 'All Movies' },
        { id: 'Action', name: 'Action' },
        { id: 'Horror', name: 'Horror' },
        { id: 'Comedy', name: 'Comedy' },
        { id: 'Adventure', name: 'Adventure' },
    ];

    // Filter movies based on category and search
    const filteredMovies = movies.filter(movie => {
        const matchesCategory = activeCategory === 'All Movies' || 
                              movie.category?.toLowerCase() === activeCategory.toLowerCase();
        const matchesSearch = searchQuery.trim() === '' || 
                            movie.title?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    return (
        <>
            <div className={releasesPageStyle.container}>
                {/* Header Section */}
                <div className={releasesPageStyle.header.base}>
                    <div className={releasesPageStyle.header.content}>
                        <div className={releasesPageStyle.header.icon}>
                            <Flame size={32} />
                        </div>
                        <div className={releasesPageStyle.header.text} style={{fontFamily:'Dance'}}>RELEASES <span style={{color:'#'}}>SOON</span></div>
                    </div>
                    <div className={releasesPageStyle.header.info}>Latest Movies • Now Showing</div>
                </div>

                {/* Filtering Section */}
                <div className={releasesPageStyle.filtering.base}>
                    <div className={releasesPageStyle.filtering.input.base}>
                        <Search className={releasesPageStyle.filtering.input.icon} />
                        <input 
                            type="text" 
                            placeholder='Search for coming soon...' 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={releasesPageStyle.filtering.input.field}
                        />
                    </div>
                    <div className={releasesPageStyle.filtering.categories.base}>
                        {categories.map((category) => (
                            <div key={category.id} className={releasesPageStyle.filtering.categories.category}>
                                <button 
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`${releasesPageStyle.filtering.categories.button} ${
                                        activeCategory === category.id ? releasesPageStyle.filtering.categories.active : ''
                                    }`}
                                >
                                    {category.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {filteredMovies.length === 0 ? (
                    <>
                        <div className={releasesPageStyle.movies.notFound}>
                            <EyeOff className={releasesPageStyle.movies.notFoundIcon} size={48} />
                            <h3 className={releasesPageStyle.movies.notFoundTitle}>Nothing Found</h3>
                            <p className={releasesPageStyle.movies.notFoundText}>Try adjusting your search or filter</p>
                        </div>
                    </>):
                    (<>
                        {/* Movies Grid */}
                        <div className={releasesPageStyle.movies.base}>
                            <div className={releasesPageStyle.movies.grid}>
                                {filteredMovies.map((movie) => (
                                    <div key={movie.id} className={releasesPageStyle.movies.card}>
                                        <div className={releasesPageStyle.movies.image.container}>
                                            <img 
                                                src={movie.image} 
                                                alt={movie.title}
                                                className={releasesPageStyle.movies.image.base}
                                            />
                                            <div className={releasesPageStyle.movies.overlay}>
                                                <div className={releasesPageStyle.movies.comingSoon}>COMING SOON</div>
                                            </div>
                                        </div>
                                        <div className={releasesPageStyle.movies.info}>
                                            <h3 className={releasesPageStyle.movies.title}>{movie.title}</h3>
                                            <span className={releasesPageStyle.movies.category}>{movie.category}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>)}
                
            </div>
        </>
    )
}
