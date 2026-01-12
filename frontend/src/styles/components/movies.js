export const moviesStyle = {
    // Main container
    container: "max-w-7xl mx-auto px-6 py-12",
    
    // Header section
    header: "text-center mb-8",
    
    // Cards container - HORIZONTAL SCROLL WITH CENTERING
    cards: {
        base: "flex overflow-x-auto gap-3 pb-4 scrollbar-hide justify-center",
        card: "flex-shrink-0 w-40",
        image: "relative w-full h-56 rounded-lg shadow-lg overflow-hidden group",
        imageTag: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
        overlay: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        links: "block w-full h-full flex flex-col justify-end hover:bg-black/20 transition-all duration-300 p-2 rounded space-y-1", // Added space-y-1
        informations: {
            title: "flex items-center gap-2 mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300",
            duration: "flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200 delay-50", // Added duration section
            genre: "flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-200 delay-75", // Added genre section
            category: "text-gray-300 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 bg-red-600/80 px-2 py-1 rounded-full inline-block mt-1", // Enhanced category
            titleIcon: "h-3 w-3 text-red-500 flex-shrink-0"
        }
    },
  
};