export const ListMoviesStyle = {
  // Main container - dramatic dark gradient
  container:
    "min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 pt-20 px-4 pb-12  pt-32",

  // Wrapper - wider for better layout
  wrapper: "max-w-7xl mx-auto",

  // Title - bold and glowing
  title:"flex items-center justify-center gap-3 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 mb-8 pb-4 border-b-2 border-red-900/50 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] tracking-wider text-center",

  // Filters - enhanced card
  filters: {
    container:
      "bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-8 mb-8 shadow-2xl border-2 border-red-900/50 shadow-red-500/20",
    grid: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
  },

  // Search input - enhanced with glow
  search: {
    container: "relative group",
    icon: "absolute left-4 top-4 h-5 w-5 text-red-500 group-focus-within:text-red-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    input:
      "w-full pl-12 pr-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-base text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/30 transition-all duration-300 backdrop-blur-sm shadow-inner hover:border-red-800",
  },

  // Select - enhanced
  select:
    "w-full px-4 py-3.5 bg-gradient-to-r from-gray-900/80 to-black/80 border-2 border-red-900/60 rounded-xl text-base text-gray-200 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/30 cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-inner hover:border-red-800",

  // Buttons - enhanced with gradients
  button: {
    clear:
      "px-5 py-3 bg-gradient-to-r from-gray-800/90 to-gray-900/90 hover:from-red-700/40 hover:to-red-800/40 text-base font-bold text-gray-200 hover:text-white rounded-xl border-2 border-red-900/60 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 transform hover:scale-105",
    pagination:
      "px-5 py-3 bg-gradient-to-r from-gray-900/90 to-black/90 hover:from-gray-800/90 hover:to-gray-900/90 disabled:from-gray-800/50 disabled:to-gray-900/50 disabled:text-gray-500 disabled:cursor-not-allowed text-gray-200 hover:text-white text-base font-bold rounded-xl border-2 border-red-900/60 hover:border-red-500 disabled:border-red-900/30 transition-all duration-300 shadow-lg hover:shadow-red-500/20 transform hover:scale-105 disabled:transform-none",
  },

  // Categories - enhanced grid
  categories: {
    container: "mb-6 p-6 bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border-2 border-red-900/40 backdrop-blur-sm",
    label: "block text-sm font-black text-red-400 mb-4 flex items-center gap-2 uppercase tracking-wider",
    grid: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",
    checkboxLabel:
      "group flex items-center space-x-3 p-3 bg-gradient-to-br from-gray-900/60 to-black/60 border-2 border-red-900/50 rounded-xl hover:border-red-500 hover:from-gray-800/70 hover:to-gray-900/70 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5",
    checkbox:
      "h-4 w-4 text-red-600 bg-gray-900 border-2 border-gray-600 rounded checked:scale-110 transition-transform duration-300",
    checkboxText: "text-gray-300 text-sm font-semibold group-hover:text-white transition-colors duration-300",
  },

  // Active filters - enhanced tags
  activeFilters: {
    container: "flex flex-wrap gap-3 mt-3",
    search: "bg-gradient-to-r from-red-700 to-red-800 border-red-600 shadow-red-500/40",
    type: "bg-gradient-to-r from-red-800 to-red-900 border-red-700 shadow-red-600/40",
    category: "bg-gradient-to-r from-red-900 to-red-950 border-red-800 shadow-red-700/40",
  },

  // Loading state - enhanced spinner
  loading: {
    container: "text-center py-20",
    spinner: "animate-spin rounded-full h-16 w-16 border-4 border-red-900 border-t-red-500 mx-auto shadow-[0_0_30px_rgba(220,38,38,0.5)]",
    text: "mt-4 text-gray-400 text-lg font-semibold animate-pulse",
  },

  // Empty state - enhanced
  empty: {
    container:
      "text-center py-20 bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border-2 border-red-900/50 backdrop-blur-sm shadow-xl",
    title: "text-2xl font-bold text-gray-300 mb-2",
    subtitle: "text-gray-500 text-base",
  },

  // Movies - enhanced poster cards
  movies: {
    grid: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6",

    // Card - dramatic poster style with glow
    card:
      "group bg-gradient-to-br from-black to-gray-950 rounded-2xl overflow-hidden border-2 border-red-900/50 shadow-2xl hover:border-red-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all duration-500 flex flex-col h-[420px] transform hover:scale-[1.05] hover:-translate-y-2 cursor-pointer",

    // Image - taller with overlay effect
    image: "w-full h-[280px] object-cover object-top group-hover:scale-110 transition-transform duration-700",

    content: "p-4 flex flex-col justify-between flex-1 bg-gradient-to-t from-black/90 to-transparent",

    title: "text-lg font-black text-white leading-tight mb-2 group-hover:text-red-400 transition-colors duration-300 line-clamp-2",
    genre: "text-gray-400 text-sm font-semibold mb-1",
    meta: "flex justify-between items-center text-sm mt-2 pt-2 border-t border-red-900/40",
    rating: "text-yellow-400 font-bold flex items-center gap-1 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]",
    type: "text-gray-400 font-semibold uppercase text-xs",

    tags: "flex flex-wrap gap-2 mt-3",
    tag: "px-2 py-1 bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-xs font-semibold rounded-lg border border-red-900/50 text-gray-300 hover:border-red-500 hover:text-white transition-all duration-300 backdrop-blur-sm",
  },

  // Pagination - enhanced
  pagination: {
    container: "flex justify-center items-center space-x-6 mt-10 mb-6",
    info: "text-gray-300 text-base font-semibold px-6 py-3 bg-gradient-to-r from-gray-900/60 to-black/60 rounded-xl border-2 border-red-900/40 backdrop-blur-sm",
  },
};