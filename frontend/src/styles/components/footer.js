export const FooterStyle = {
    container: {
        base: "bg-gray-900 border-t border-gray-700 py-12 relative bg-cover bg-center bg-no-repeat",
        overlay: "absolute inset-0 bg-black/80",
        content: "relative z-10",
        grids: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
        
        // New middle section with icon
        middle: {
            base: "flex items-center justify-center my-8",
            line: "flex-1 h-0.5 bg-gradient-to-r from-transparent via-red-600/80 to-transparent max-w-150", // Even thinner with opacity
            iconContainer: "mx-2 flex items-center justify-center",
            iconCircle: "bg-gradient-to-br from-red-500 to-red-600 rounded-full p-3 flex items-center justify-center border border-red-300/50 shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-red-400/30 ring-2 ring-red-400/20 hover:ring-red-400/40", // Gradient background with ring
            icon: "h-5 w-5 text-white drop-shadow-sm" // Smaller with shadow
        },
        
        // Reserved part
        reservedPart: {
            base: "max-w-7xl mx-auto px-6 border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center",
            leftSide: "text-gray-400 text-sm mb-4 md:mb-0",
            rightSide: {
                base: "flex gap-6",
                link: "text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
            }
        }
    },
    
    firstGrid: {
        base: "space-y-6",
        logo: {
            base: "flex items-center gap-3",
            icon: "h-10 w-10 text-red-500",
            title: "text-2xl font-bold text-white"
        },
        description: "text-gray-400 text-sm leading-relaxed",
        socialLinks: {
            base: "flex gap-4",
            icon: "h-6 w-6 text-gray-400 hover:text-red-500 transition-colors duration-300"
        }
    },
    
    secondGrid: {
        base: "space-y-4",
        header: "flex items-center gap-3 mb-4",
        title: "text-lg font-bold text-white",
        icon: "h-5 w-5 text-red-500",
        links: {
            base: "flex flex-col space-y-3", // Increased space
            link: "flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm",
            linkIcon: "h-4 w-4 text-red-500 flex-shrink-0" // Small icon style
        }
    },
    
    thirdGrid: {
        base: "space-y-4", 
        header: "flex items-center gap-3 mb-4",
        title: "text-lg font-bold text-white",
        icon: "h-5 w-5 text-red-500",
        links: {
            base: "flex flex-col space-y-3",
            link: "flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm",
            linkIcon: "h-4 w-4 text-red-500 flex-shrink-0"
        }
    },
    
    fourthGrid: {
        base: "space-y-4",
        header: "flex items-center gap-3 mb-4",
        title: "text-lg font-bold text-white",
        icon: "h-5 w-5 text-red-500",
        links: {
            base: "flex flex-col space-y-3",
            link: "flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm",
            icon: "h-5 w-5 text-red-500 flex-shrink-0"
        }
    }
};