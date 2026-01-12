export const trailerStyle = {
    // Main container - SMALLER
    container: "max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6",
    
    // Left side - takes 2/3 on large screens
    leftSide: {
        base: "lg:col-span-2 space-y-6",
        header: "text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center gap-3", // Added flex and gap
        pages: {
            buttons: {
                base: "flex justify-between items-center mb-4 border border-gray-700 rounded-lg p-3 bg-gray-900/50",
                leftSide: "flex gap-2",
                rightSide: "text-white text-base",
                icons: "h-5 w-5 text-white hover:text-red-500 transition-colors duration-200"
            }
        },
        latestTrailers: {
            videos: {
                base: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 border border-gray-700 rounded-xl p-4 bg-gray-900/30 ",
                card: "bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group border border-gray-600",
                image: "w-full h-28 object-cover",
                title: "text-white font-semibold text-xs p-2",
                category: "text-gray-400 text-xs px-2 pb-2"
            }
        },
        videos: {
            base: "bg-gray-800 rounded-lg p-4 border border-gray-700",
            header: "text-lg font-bold text-white mb-3 flex items-center gap-2", // Added flex and gap
            list: {
                base: "space-y-3",
                card: "flex items-center gap-3 bg-gray-700/50 rounded-lg p-2 hover:bg-gray-700 transition-all duration-300 cursor-pointer border border-gray-600",
                image: "w-14 h-14 object-cover rounded-lg border border-gray-500",
                title: "text-white font-medium text-sm",
                category: "text-gray-400 text-xs"
            }
        }
    },
    
    // Right side - takes 1/3 on large screens
    rightSide: {
        base: "space-y-4",
        trailer: {
            base: "bg-black rounded-lg overflow-hidden shadow-xl aspect-video flex items-center justify-center text-white text-base border-2 border-gray-700",
            video: "w-full h-full object-cover"
        },
        trailerInfo: {
            base: "bg-gray-800 rounded-lg p-4 space-y-4 border border-gray-700",
            left: {
                base: "text-white border-b border-gray-600 pb-2",
                title: "text-xl font-bold"
            },
            right: {
                base: "flex gap-3 border-b border-gray-600 pb-3",
                item: "flex items-center gap-1 text-gray-300 text-sm",
                icon: "h-4 w-4 text-red-500",
                info: {
                    base: "space-y-4 mt-4",
                    categories: {
                        base: "space-y-2 border border-gray-600 rounded-lg p-3",
                        category: "bg-red-600/20 text-red-400 text-xs px-3 py-1 rounded-full inline-block mr-2 border border-red-500/30"
                    },
                    description: {
                        base: "space-y-2 border border-gray-600 rounded-lg p-3",
                        title: "text-white font-semibold text-sm border-b border-gray-500 pb-1",
                        text: "text-gray-300 text-sm leading-relaxed"
                    },
                    credits: {
                        base: "grid grid-cols-3 gap-3 border border-gray-600 rounded-lg p-3",
                        director: "text-center space-y-2 border border-gray-500 rounded-lg p-2",
                        singer: "text-center space-y-2 border border-gray-500 rounded-lg p-2",
                        producer: "text-center space-y-2 border border-gray-500 rounded-lg p-2",
                        image: "w-12 h-12 rounded-full object-cover mx-auto border-2 border-red-500",
                        name: "text-white text-xs font-medium"
                    }
                }
            }
        }
    }
};