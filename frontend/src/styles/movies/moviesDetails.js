export const MovieDetailsStyle = {
    // Main Container
    wrapper: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-6 flex items-center justify-center",

    // Inner wrapper for the content
    container: "max-w-5xl w-full border-x border-slate-700 bg-slate-900/50 rounded-2xl p-6",

    // Header Section (Back Button)
    header: {
        base: "mb-6",
        button: {
            base: "inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer group",
            icon: "w-5 h-5 transform group-hover:-translate-x-1 transition-transform",
            text: "text-lg font-medium"
        }
    },

    // Title Container
    titleContainer: {
        base: "mb-8 border-b border-slate-700 pb-6 text-center",
        title: "text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight",
        details: {
            base: "flex flex-wrap items-center justify-center gap-6 text-slate-300",
            rating: {
                base: "flex items-center gap-2 bg-yellow-500/20 px-3 py-1.5 rounded-full",
                icon: "w-5 h-5 text-yellow-400 fill-yellow-400"
            },
            duration: {
                base: "flex items-center gap-2 bg-blue-500/20 px-3 py-1.5 rounded-full",
                icon: "w-5 h-5 text-blue-400"
            },
            category: "bg-purple-500/20 px-3 py-1.5 rounded-full text-purple-300 font-medium"
        }
    },

    // Movie Details Container (Main Content)
    movieDetailsContainer: {
        base: "grid grid-cols-1 lg:grid-cols-3 gap-8",
        
        // Left Side (1/3 width) - Movie Poster & Trailer
        leftSide: {
            base: "lg:col-span-1",
          card: {
                wrapper: "h-full rounded-2xl flex items-center justify-center",
                base: "bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border-2 border-slate-600 flex flex-col items-center justify-between h-full w-full", // Centered content
                image: "w-full flex-1 flex items-center justify-center", // Centered with padding
                imageImg: "w-auto h-auto max-w-full max-h-80 object-contain", // Maintain aspect ratio
                watchTrailer: "w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
            }
        },

        // Right Side (2/3 width) - Showtimes & Cast
        right: {
            base: "lg:col-span-2 space-y-6",
            
            // Showtimes Container
            showTimesContainer: {
                base: "bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-slate-600",
                header: {
                    base: "flex items-center gap-3 mb-4 pb-3 border-b border-slate-700",
                    icon: "w-6 h-6 text-blue-400",
                    text: "text-xl font-bold text-white"
                },
                
                // Date Selection Buttons
                daysItems: {
                    base: "flex flex-wrap gap-2 mb-4",
                    item: "px-3 py-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-200 font-medium border border-slate-600 text-sm",
                    active: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-500 shadow-lg shadow-blue-500/30"
                },
                
                // Time Slots
                timeItems: {
                    base: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2",
                    item: "flex flex-col items-center gap-1 px-3 py-2 rounded-lg bg-slate-700/50 hover:bg-gradient-to-br hover:from-green-600 hover:to-green-700 text-slate-300 hover:text-white transition-all duration-200 border border-slate-600 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer w-full", // Added w-full
                    time: "text-sm font-semibold",
                    audi: "text-xs text-slate-400"
                }
            },

            // Cast Container
            castContainer: {
                base: "bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-slate-600",
                header: {
                    base: "flex items-center gap-3 mb-4 pb-3 border-b border-slate-700",
                    icon: "w-6 h-6 text-purple-400",
                    text: "text-xl font-bold text-white"
                },
                body: {
                    base: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",
                    item: "flex flex-col items-center text-center group cursor-pointer",
                    image: "w-16 h-16 rounded-full overflow-hidden mb-2 ring-2 ring-slate-600 group-hover:ring-4 group-hover:ring-purple-500 transition-all duration-300 shadow-lg",
                    info: "space-y-1",
                    castName: "text-xs font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-1",
                    castType: "text-xs text-slate-400 font-medium"
                }
            }
        }
    },
    description: {
       base: "bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-slate-600 col-span-full",
        header: {
            base: "flex items-center gap-3 mb-4 pb-3 border-b border-slate-700",
            icon: "w-6 h-6 text-green-400",
            txt: "text-xl font-bold text-white"
        },
        info: "text-slate-300 leading-relaxed"
    },

};