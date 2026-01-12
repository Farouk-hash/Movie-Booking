// Styles object
export const newsStyle = {
//   container: "max-w-7xl mx-auto px-6 py-12 border border-gray-700 rounded-xl bg-gray-900/50", // Larger container with border
    container: "max-w-7xl mx-auto px-6 py-12",
    header: {
        base: "flex justify-between items-center mb-8 border-b border-gray-700 pb-4",
        leftSide: {
            base: "flex items-center gap-4",
            title: "text-3xl font-bold text-white",
            subtitle: "text-gray-400 text-lg",
            icon: "h-8 w-8 text-red-500" // Add this for icon styling
        },
        rightSide: {
        button: "bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 border border-red-500" // Added border
        }
    },
    
    brumbcumber: {
        base: "bg-gray-800 rounded-xl p-6 mb-8 flex items-center justify-between border-2 border-gray-600", // Thicker border
        leftSide: "text-2xl font-bold text-white border-r border-gray-600 pr-6", // Added border
        middleSide: "text-gray-300 flex-1 mx-8 text-base leading-relaxed", // Larger text
        rightSide: {
        base: "border-l border-gray-600 pl-6", // Added border
        btn: "h-8 w-8 text-red-500 hover:text-red-400 cursor-pointer" // Larger icon
        }
    },
  
  news: {
    container: "grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-gray-700 pt-8", // Added border
    
    leftSide: {
      base: "space-y-6 flex flex-col h-full", // Increased space
      mainNewCard: {
        card: "bg-gray-800 rounded-xl overflow-hidden shadow-xl border-2 border-gray-600 cursor-pointer group", // Thicker border
        layout: "relative h-56 overflow-hidden border-b border-gray-600", // Increased height, added border
        category: "absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-red-400", // Added border
        image: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
        title: "text-xl font-bold text-white p-6 pb-3 border-b border-gray-600", // Larger text, added border
        excerpt: "text-gray-300 p-6 pt-0 pb-4 leading-relaxed text-base", // Larger text
        meta: "flex gap-4 text-gray-400 text-sm p-6 pt-0 border-t border-gray-600 pt-4" // Larger text, added border
      },
      otherNewCards: {
        base: "relative border border-gray-600 rounded-xl p-4", // Added border
        container: "flex overflow-x-auto gap-6 pb-4 scrollbar-hide", // Increased gap
        card: "flex-shrink-0 w-72 h-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-600 cursor-pointer group flex flex-col", // Larger card
        layout: "relative h-32 overflow-hidden flex-shrink-0 border-b border-gray-600", // Increased height, added border
        category: "absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 border border-red-400", // Added border
        image: "w-full h-full object-cover",
        content: "p-4 flex-1 flex flex-col border-t border-gray-600", // Added border
        title: "text-base font-bold text-white mb-2", // Larger text
        excerpt: "text-gray-300 text-sm leading-relaxed line-clamp-2" // Larger text
      },
      arrows: {
        base: "flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 pointer-events-none",
        button: "bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors duration-200 pointer-events-auto border border-gray-500", // Added border
        icon: "h-5 w-5" // Larger icons
      }
    },
    
    rightSide: {
      base: "space-y-6 flex flex-col h-full relative border-l border-gray-700 pl-8", // Increased space, added border
      cards: {
        base: "space-y-4 flex-1 overflow-y-auto scrollbar-hide max-h-[500px] border border-gray-600 rounded-xl p-4", // Increased height, added border
        card: {
          base: "flex gap-4 bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-600 cursor-pointer hover:bg-gray-750 transition-colors duration-200 h-28", // Larger card
          image: "w-36 h-full flex-shrink-0 object-cover border-r border-gray-600", // Wider image, added border
          info: "space-y-2 flex-1 min-w-0 p-4",
          category: "text-red-500 text-sm font-semibold uppercase tracking-wide border-b border-gray-600 pb-1", // Larger text, added border
          title: "text-white font-semibold text-base leading-tight line-clamp-2", // Larger text
          excerpt: "text-gray-400 text-sm leading-relaxed line-clamp-2" // Larger text
        }
      },
      joinUs: {
        base: "bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white border-2 border-red-500", // Added border
        informations: "space-y-4",
        title: "text-xl font-bold border-b border-red-400 pb-2", // Larger text, added border
        description: "text-red-100 text-base", // Larger text
        subscribtion: "flex gap-2 items-stretch border-t border-red-400 pt-4", // Added border
        input: "flex-1 min-w-0 px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-red-200 focus:outline-none focus:border-white/40 text-base", // Larger input
        button: "bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-base whitespace-nowrap flex-shrink-0 border-2 border-white" // Larger button, added border
      },
      verticalArrows: {
        base: "absolute right-4 top-1/3 transform -translate-y-1/2 flex flex-col gap-3 z-20 pointer-events-none",
        button: "bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors duration-200 pointer-events-auto border border-gray-500", // Added border
        icon: "h-6 w-6" // Larger icons
      }
    }
  }
};