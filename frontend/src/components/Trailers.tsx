import {trailerStyle} from '../styles/components/trailers.js';
import {trailersData} from '../assets/trailerdata.js';
import { Calendar, ChevronsLeft, ChevronsRight, Clapperboard, Clock, Flame, Play } from 'lucide-react';
import { useState } from 'react';

export const Trailers = () => {
    const trailersLength = trailersData.length;
    const newTrendingTrailers = trailersData.slice(0,3);
    
    const [currentPage, setCurrentPage] = useState<number>(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(trailersData.length / itemsPerPage);

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [videoTrailer, setVideoTrailer] = useState(trailersData[currentIndex]);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const getCurrentTrailers = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return trailersData.slice(startIndex, endIndex);
    };

    const handlePagination = (type:string) => {
        if (type === 'next') {
            setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : prev);
        } else if (type === 'previous') {
            setCurrentPage(prev => prev > 0 ? prev - 1 : prev);
        }
    };

    const handleCurrentVideoClicked = (clickedIndex: number) => {
        setCurrentIndex(clickedIndex);
        setVideoTrailer(trailersData[clickedIndex]);
        setIsPlaying(false); // Reset play state when new trailer is selected
    };

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    // Extract YouTube video ID from URL
    const getYouTubeVideoId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? match[1] : null;
    };

    const videoId = getYouTubeVideoId(videoTrailer.videoUrl);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

    const currentTrailers = getCurrentTrailers();

    return (
        <>
            <div className={trailerStyle.container}>
                <div className={trailerStyle.leftSide.base}>
                    {/* left side part */}
                    <div className={trailerStyle.leftSide.header}>
                        <Clapperboard />
                        <h3 style={{fontFamily:'Dance'}}>Latest Trailers</h3>
                    </div>

                    <div className={trailerStyle.leftSide.pages.buttons.base}>
                        {/* left side */}
                        <div className={trailerStyle.leftSide.pages.buttons.leftSide}>
                            <button onClick={() => handlePagination('previous')}>
                                <ChevronsLeft className={trailerStyle.leftSide.pages.buttons.icons}/>
                            </button>
                            <button onClick={() => handlePagination('next')}>
                                <ChevronsRight className={trailerStyle.leftSide.pages.buttons.icons}/>
                            </button>
                        </div>
                        {/* right side */}
                        <div className={trailerStyle.leftSide.pages.buttons.rightSide}>
                            <h3>{trailersLength} Trailers</h3>
                            <span className="text-gray-400 text-sm">Page {currentPage + 1} of <span style={{color:'green'}}>{totalPages}</span> </span>
                        </div>
                    </div>

                    <div className={trailerStyle.leftSide.latestTrailers.videos.base}>
                        {currentTrailers.map((trailer, index: number) => (
                            <div key={trailer.id} className={trailerStyle.leftSide.latestTrailers.videos.card} onClick={() => handleCurrentVideoClicked(index + (currentPage * itemsPerPage))}>
                                <img src={trailer.thumbnail} alt={trailer.title} className={trailerStyle.leftSide.latestTrailers.videos.image} />
                                <h3 className={trailerStyle.leftSide.latestTrailers.videos.title}>{trailer.title}</h3>
                                <h4 className={trailerStyle.leftSide.latestTrailers.videos.category}>{trailer.genre}</h4>
                            </div>
                        ))}
                    </div>

                    <div className={trailerStyle.leftSide.videos.base}>
                        <div className={trailerStyle.leftSide.videos.header}>
                            <Flame />
                            <h3>New Trending</h3>
                        </div>
                        <div className={trailerStyle.leftSide.videos.list.base}>
                            {newTrendingTrailers.map((trailer, index:number) => (
                                <div key={trailer.id} className={trailerStyle.leftSide.videos.list.card} onClick={() => handleCurrentVideoClicked(index)}>
                                    <img src={trailer.thumbnail} alt={trailer.title} className={trailerStyle.leftSide.videos.list.image} />
                                    <div>
                                        <h3 className={trailerStyle.leftSide.videos.list.title}>{trailer.title}</h3>
                                        <h4 className={trailerStyle.leftSide.videos.list.category}>{trailer.genre}</h4>
                                        <h4 className={trailerStyle.leftSide.videos.list.category}>{trailer.year}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className={trailerStyle.rightSide.base}>
                    <div className={trailerStyle.rightSide.trailer.base}>
                        {isPlaying && videoId ? (
                            <iframe
                                src={`${embedUrl}?autoplay=1`}
                                title={videoTrailer.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div 
                                className="relative w-full h-full flex items-center justify-center cursor-pointer bg-black"
                                onClick={handlePlayVideo}
                            >
                                <img 
                                    src={videoTrailer.thumbnail} 
                                    alt={videoTrailer.title}
                                    className="w-full h-full object-cover opacity-70"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                                        <Play className="h-8 w-8 text-white fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-bold">{videoTrailer.title}</h3>
                                    <p className="text-gray-300">{videoTrailer.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className={trailerStyle.rightSide.trailerInfo.base}>
                        <div className="flex justify-between items-center">
                            <div className={trailerStyle.rightSide.trailerInfo.left.base}>
                                <h3 className={trailerStyle.rightSide.trailerInfo.left.title}>{videoTrailer.title}</h3>
                            </div>
                            <div className={trailerStyle.rightSide.trailerInfo.right.base}>
                                <div className={trailerStyle.rightSide.trailerInfo.right.item}>
                                    <Clock className={trailerStyle.rightSide.trailerInfo.right.icon} />
                                    <h4>{videoTrailer.duration}</h4>
                                </div>
                                <div className={trailerStyle.rightSide.trailerInfo.right.item}>
                                    <Calendar className={trailerStyle.rightSide.trailerInfo.right.icon} />
                                    <h4>{videoTrailer.year}</h4>
                                </div>
                            </div>
                        </div>

                        <div className={trailerStyle.rightSide.trailerInfo.right.info.base}>

                            <div className={trailerStyle.rightSide.trailerInfo.right.info.categories.base}>
                                <h4 className={trailerStyle.rightSide.trailerInfo.right.info.description.title}>Genre</h4>
                                <div>
                                    {videoTrailer.genre.split(',').map((category, index) => (
                                        <span key={index} className={trailerStyle.rightSide.trailerInfo.right.info.categories.category}>
                                            {category.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={trailerStyle.rightSide.trailerInfo.right.info.description.base}>
                                <h4 className={trailerStyle.rightSide.trailerInfo.right.info.description.title}>Description</h4>
                                <p className={trailerStyle.rightSide.trailerInfo.right.info.description.text}>{videoTrailer.description}</p>
                            </div>

                            <div className={trailerStyle.rightSide.trailerInfo.right.info.credits.base}>
                                <div className={trailerStyle.rightSide.trailerInfo.right.info.credits.director}>
                                    <img src={videoTrailer.credits.director.image} alt={videoTrailer.credits.director.name} className={trailerStyle.rightSide.trailerInfo.right.info.credits.image} />
                                    <h4 className={trailerStyle.rightSide.trailerInfo.right.info.credits.name}>{videoTrailer.credits.director.name}</h4>
                                    <p className="text-gray-400 text-xs">Director</p>
                                </div>

                               <div className={trailerStyle.rightSide.trailerInfo.right.info.credits.singer}>
                                    <img 
                                        src={videoTrailer.credits?.stars?.image || videoTrailer.credits?.singer?.image} 
                                        alt={videoTrailer.credits?.stars?.name || videoTrailer.credits?.singer?.name} 
                                        className={trailerStyle.rightSide.trailerInfo.right.info.credits.image} 
                                    />
                                    <h4 className={trailerStyle.rightSide.trailerInfo.right.info.credits.name}>
                                        {videoTrailer.credits?.stars?.name || videoTrailer.credits?.singer?.name}
                                    </h4>
                                    <p className="text-gray-400 text-xs">{videoTrailer.credits?.stars ? 'Star' : 'Singer'}</p>
                                </div>

                                <div className={trailerStyle.rightSide.trailerInfo.right.info.credits.producer}>
                                    <img src={videoTrailer.credits.producer.image} alt={videoTrailer.credits.producer.name} className={trailerStyle.rightSide.trailerInfo.right.info.credits.image} />
                                    <h4 className={trailerStyle.rightSide.trailerInfo.right.info.credits.name}>{videoTrailer.credits.producer.name}</h4>
                                    <p className="text-gray-400 text-xs">Producer</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}