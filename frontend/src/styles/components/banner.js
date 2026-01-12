export const banner = {
    // Main container
    container: "relative h-screen w-full overflow-hidden",
    
    // Video section
    video: {
        container: {
            base: "absolute inset-0 w-full h-full",
            video: "w-full h-full object-cover",
            videoFallback: "absolute inset-0 flex items-center justify-center text-white text-xl bg-gray-900"
        }
    },
    
    // Title and info section - MINIMAL GAPS
    titleInfo: {
        container: {
            base: "absolute inset-0 flex flex-col justify-center items-center text-center z-10",
            content: "flex flex-col items-center space-y-1 max-w-2xl px-8", // Reduced to space-y-1 (minimal gap)
            icon: "h-12 w-12 text-red-500 mb-0 animate-bounce", // Removed margin (mb-0)
            title: "text-4xl font-bold text-white mb-0 animate-fade-in", // Removed margin (mb-0)
            info: "text-lg text-gray-200 animate-fade-in-delayed leading-relaxed max-w-xl mt-1" // Added small top margin only
        }
    },
    
    // Buttons section - VERY CLOSE TO CONTENT
    buttons: {
        container: {
            base: "absolute bottom-32 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10", // Changed to bottom-32 and reduced gap
            button: "flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold text-base hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:scale-105 border border-red-400/30",
            icon: "h-5 w-5 text-white",
            texting: "text-white font-semibold text-base"
        }
    }
};