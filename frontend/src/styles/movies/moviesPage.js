export const MoviesPageStyle = {
    container: "min-h-screen bg-gray-900 pt-20 pb-12", // Added padding for navbar
    
    // Header section with search and categories
    header: {
        base: "max-w-7xl mx-auto px-6 mb-12 space-y-8",
        searchInput: {
            base: "relative max-w-2xl mx-auto mt-8", // Added mt-8 for margin top
            input: "w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-lg"
        },
        categories: {
            base: "flex flex-wrap justify-center gap-7",
            category: "flex-shrink-0",
            button: "px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-medium hover:bg-red-600 hover:border-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        }
    },
    
    // Movies grid body
    body: "max-w-7xl mx-auto px-6 mb-12",
    cards: {
        base: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
        card: "bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 cursor-pointer group relative h-96", // Fixed height for consistency
        overlay: {
            base: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10",
            info: "text-white space-y-3",
            title: "text-2xl font-bold mb-2",
            meta: "flex items-center gap-4 text-sm",
            metaItem: "flex items-center gap-2"
        },
        image: {
            base: "w-full h-full object-cover group-hover:scale-80 transition-transform duration-800",
            container: "w-full h-100 overflow-hidden" // Fixed image container height
        },
        
    },
    
    // Pagination footer
    footer: {
        base: "max-w-7xl mx-auto px-6 flex justify-center items-center gap-4",
        pagination: {
            base: "flex items-center gap-2",
            button: "flex items-center justify-center w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
            pageNumber: "flex items-center justify-center w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300",
            activePage: "bg-red-600 border-red-500 text-white"
        }
    }
};