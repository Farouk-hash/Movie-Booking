export const addMoviesStyle = {
    // Main container - matching list movies exactly
    container: "min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 pt-30 px-4 pb-12",
    
    // Section styles - matching list movies card style
    section: {
        base: "max-w-7xl mx-auto  backdrop-blur-xl rounded-2xl p-8 ",
        title:"flex items-center justify-center gap-3 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 mb-8 pb-4 border-b-2 border-red-900/50 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] tracking-wider text-center",
    },
    
    // Radio group styles - matching list movies filters
    radioGroup: {
        container: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-10",
        label: "group relative flex items-center gap-4 p-5 border-2 border-red-900/50 rounded-2xl cursor-pointer transition-all duration-300 hover:border-red-500 hover:from-gray-800/70 hover:to-gray-700/70 hover:shadow-2xl hover:shadow-red-500/30 bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-md hover:-translate-y-1",
        input: "sr-only",
        selected: "border-red-500 bg-gradient-to-br from-red-600/25 to-red-800/25 shadow-2xl shadow-red-500/40 scale-105 ring-2 ring-red-500/50",
        content: "flex flex-col gap-2 flex-1",
        iconContainer: "flex items-center gap-3",
        icon: "h-6 w-6 text-gray-400 group-hover:text-red-400 transition-all duration-300 shrink-0 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]",
        text: "text-base font-bold text-gray-300 group-hover:text-white transition-colors duration-300",
    },
    
    // Form styles - matching list movies inputs
    form: {
        container: "space-y-10 mt-10",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
        group: "space-y-3",
        label: "block text-sm font-black text-red-400 mb-3 uppercase tracking-wider",
        input: "w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/30 transition-all duration-300 backdrop-blur-sm shadow-inner hover:border-red-800",
        textarea: "w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/30 transition-all duration-300 resize-vertical min-h-[140px] backdrop-blur-sm shadow-inner hover:border-red-800",
        select: "w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-base text-gray-200 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/30 transition-all duration-300 backdrop-blur-sm cursor-pointer shadow-inner hover:border-red-800",
        button: "w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-5 px-10 rounded-2xl font-black text-xl hover:from-red-700 hover:via-red-800 hover:to-red-700 transition-all duration-300 shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 transform hover:scale-[1.03] active:scale-[0.97] border-2 border-red-500/40 uppercase tracking-wider"
    },
    
    // Categories - matching list movies style
    categories: {
        container: "col-span-full mb-6 p-6 bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border-2 border-red-900/40 backdrop-blur-sm",
        title: "text-sm font-black text-red-400 mb-4 flex items-center gap-2 uppercase tracking-wider",
        grid: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",
        checkboxLabel: "group flex items-center space-x-3 p-3 bg-gradient-to-br from-gray-900/60 to-black/60 border-2 border-red-900/50 rounded-xl hover:border-red-500 hover:from-gray-800/70 hover:to-gray-900/70 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5",
        checkbox: "h-4 w-4 text-red-600 bg-gray-900 border-2 border-gray-600 rounded checked:scale-110 transition-transform duration-300",
        checkboxText: "text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300"
    },
    
    // Slots - matching list movies card style
    slots: {
        container: "mb-8 p-8 bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border-2 border-red-900/50 backdrop-blur-xl shadow-2xl",
        title: "text-2xl font-black text-white mb-6 uppercase tracking-wide",
        slotGrid: "space-y-4",
        slotCard: "bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border-2 border-red-900/60 rounded-2xl p-5 hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all duration-300",
        slotHeader: "flex justify-between items-center mb-4 pb-3 border-b-2 border-red-900/40",
        slotNumber: "text-sm font-bold text-gray-400 uppercase tracking-wider",
        removeButton: "px-5 py-3 bg-gradient-to-r from-red-600/90 to-red-700/90 hover:from-red-700/40 hover:to-red-800/40 text-base font-bold text-white rounded-xl border-2 border-red-900/60 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 transform hover:scale-105",
        inputGroup: "grid grid-cols-1 md:grid-cols-3 gap-5",
        label: "block text-sm font-black text-red-400 mb-2 uppercase tracking-wider",
        input: "w-full px-4 py-3 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/30 transition-all duration-300 shadow-inner",
        select: "w-full px-4 py-3 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-gray-200 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/30 transition-all duration-300 cursor-pointer shadow-inner",
        addButton: "flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
    },
    
    // Duration styles
    duration: {
        container: "flex gap-4",
        group: "flex-1 flex flex-col",
        input: "w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/30 transition-all duration-300 backdrop-blur-sm shadow-inner hover:border-red-800"
    },
    
    // Person Schema - matching list movies card style
    personSchema: {
        container: "mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6",
        section: "p-6 bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border-2 border-red-900/50 backdrop-blur-md shadow-xl",
        title: "text-xl font-black text-white mb-4 border-b-2 border-red-900/40 pb-3 uppercase tracking-wide",
        personGrid: "space-y-3",
        personCard: "bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border-2 border-red-900/60 rounded-xl p-4 hover:border-red-500 hover:shadow-lg transition-all duration-300",
        personHeader: "flex items-center justify-between mb-4 pb-3 border-b border-red-900/40",
        personType: "text-sm font-bold text-gray-400 uppercase tracking-wider",
        addButton: "flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105",
        removeButton: "px-5 py-3 bg-gradient-to-r from-red-600/90 to-red-700/90 hover:from-red-700/40 hover:to-red-800/40 text-xs font-bold text-white rounded-lg border-2 border-red-900/60 hover:border-red-500 transition-all duration-300 shadow-md ml-auto transform hover:scale-105",
        inputGroup: "space-y-3",
        label: "block text-sm font-black text-red-400 mb-2 uppercase tracking-wider",
        input: "w-full px-4 py-2.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 shadow-inner"
    },
    
    // Latest Trailer Schema - matching list movies
    latestTrailer: {
        container: "mt-10 p-8 bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border-2 border-red-900/50 backdrop-blur-md shadow-xl",
        header: "flex items-center justify-between mb-6 pb-4 border-b-2 border-red-900/40",
        title: "text-2xl font-black text-white uppercase tracking-wide",
        formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
        fullWidth: "col-span-full",
        label: "block text-sm font-black text-red-400 mb-3 uppercase tracking-wider",
        input: "w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/30 transition-all duration-300 shadow-inner",
        textarea: "w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-red-500/30 transition-all duration-300 resize-vertical min-h-[120px] shadow-inner"
    }
};