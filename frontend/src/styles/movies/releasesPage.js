
export const releasesPageStyle = {
    container: "min-h-screen bg-gray-900 pt-20 pb-12",
    
    // Header section
    header: {
        base: "max-w-7xl mx-auto px-6 mb-12 mt-15 text-center space-y-4",
        content: "flex items-center justify-center gap-4 mb-4", // Added this container
        icon: "text-red-500",  
        text: "text-4xl md:text-4xl font-bold text-white uppercase tracking-wider",
        info: "text-gray-400 text-m"
    },
    
    // Filtering section
    filtering: {
        base: "max-w-7xl mx-auto px-6 mb-12 space-y-8",
        input: {
            base: "relative max-w-2xl mx-auto flex items-center",
            icon: "absolute left-4 text-gray-400 z-10",
            field: "w-full pl-12 pr-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-lg"
        },
        categories: {
            base: "flex flex-wrap justify-center gap-4",
            category: "flex-shrink-0",
            button: "px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-medium hover:bg-red-600 hover:border-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900",
            active: "bg-red-600 border-red-500"
        }
    },
    
    // Movies grid
    movies: {
        base: "max-w-7xl mx-auto px-6",
        grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
        card: "bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group cursor-pointer relative", // Added relative
        image: {
            container: "relative h-80 overflow-hidden",
            base: "w-full h-full object-cover group-hover:scale-80 transition-transform duration-800 "
        },
        overlay: "absolute inset-0", // Changed from gradient overlay
        comingSoon: "absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide z-10", 
        info: "p-6",
        title: "text-xl font-bold text-white mb-2 line-clamp-1",
        category: "text-red-500 text-sm font-semibold uppercase",

        notFound: "flex flex-col items-center justify-center py-20 text-center space-y-4",
        notFoundIcon: "text-gray-500 mb-4",
        notFoundTitle: "text-2xl font-bold text-white mb-2",
        notFoundText: "text-gray-400"
    }
}