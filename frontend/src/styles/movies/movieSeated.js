export const MovieSeatedStyle = {
    container: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-30 pb-12 px-4 md:px-6", // Added padding for header and footer
    

    // Movie Info
    movieInfo: "max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 flex items-center gap-6 border-2 border-slate-600 shadow-xl",
    moviePoster: "w-24 h-36 rounded-lg overflow-hidden flex-shrink-0 shadow-lg",
    movieDetails: "flex-1",
    movieTitle: "text-2xl md:text-3xl font-bold text-white mb-3",
    movieMeta: "flex flex-col gap-2 text-slate-300",
    metaItem: "flex items-center gap-2 text-sm md:text-base",

    // Screen
    screen: "max-w-4xl mx-auto mb-8 text-center",
    screenLabel: "text-slate-300 font-bold text-lg py-3 px-16 mx-16 bg-gradient-to-b from-slate-600 to-slate-800 rounded-t-full border-x-4 border-t-4 border-slate-500 shadow-xl",

    // Seating Layout
    seatingLayout: "max-w-4xl mx-auto space-y-4 mb-8",
    row: "flex items-center justify-center gap-4",
    rowLabel: "text-slate-400 font-bold w-6 text-center text-sm",
    seats: "flex gap-8 flex-1 justify-center max-w-3xl", // Changed gap-15 to gap-8 (you can use gap-12, gap-16, gap-20, etc.)

    // Seat Styles - Increased size
    seat: "w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer border-2 hover:scale-110 active:scale-95",
    standard: "bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-slate-500 text-slate-300",
    recliner: "bg-blue-900/50 border-blue-700 hover:bg-blue-800 hover:border-blue-600 text-blue-300",
    seatSelected: "!bg-green-600 !border-green-500 hover:!bg-green-700 !text-white shadow-lg shadow-green-500/30",
        
    // Legend
    legend: "max-w-4xl mx-auto mb-8 flex justify-center gap-6 flex-wrap text-sm",
    legendItem: "flex items-center gap-2 text-slate-300 bg-slate-800/30 px-4 py-2 rounded-lg border border-slate-600",
    
    // Booking Summary
    bookingSummary: "max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-600 shadow-xl",
    summaryDetails: "space-y-3 mb-4",
    summaryItem: "flex justify-between text-slate-300 text-base",
    summaryTotal: "flex justify-between text-white text-lg font-bold border-t-2 border-slate-700 pt-4 mt-2",
    bookButton: "w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-lg hover:shadow-green-500/30 transform hover:scale-[1.02] active:scale-[0.98]"
};