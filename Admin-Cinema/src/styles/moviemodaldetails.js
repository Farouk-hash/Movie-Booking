export const MovieModalStyle = {
  // Overlay and container - dramatic entrance
  overlay: "fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fadeIn",
  container: "bg-gradient-to-br from-gray-950 via-black to-gray-950 rounded-3xl border-2 border-red-900/50 shadow-[0_0_80px_rgba(220,38,38,0.3)] max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 hover:shadow-[0_0_100px_rgba(220,38,38,0.4)]",
  
  // Loading and error states
  loading: "p-12 text-center text-gray-300 text-xl font-semibold animate-pulse",
  notFound: "p-12 text-center text-gray-400 text-xl font-semibold",
  
  // Content
  content: "p-8",
  
  // Header - bold and dramatic
  header: "flex justify-between items-start mb-8 pb-6 border-b-2 border-red-900/30",
  title: "text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]",
  closeButton: "text-gray-400 hover:text-red-500 hover:bg-red-950/30 p-2 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 border border-gray-700 hover:border-red-500",
  
  // Grid layout - enhanced spacing
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  
  // Image - enhanced with glow effect
  imageContainer: "md:col-span-1 group",
  image: "w-full rounded-2xl shadow-2xl border-2 border-red-900/40 group-hover:border-red-500/60 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] transform group-hover:scale-[1.02]",
  
  // Details section
  details: "md:col-span-2 space-y-8",
  
  // Release Soon specific styles - eye-catching
  releaseSoonContent: "space-y-8 text-center md:text-left",
  comingSoonBadge: "inline-block px-6 py-3 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white rounded-full text-base font-black uppercase tracking-wider mb-6 shadow-lg shadow-red-500/50 animate-pulse border-2 border-red-500/50",
  releaseText: "text-gray-300 text-xl leading-relaxed font-medium",
  
  // Full movie details
  fullDetails: "space-y-8",
  
  // Info grid - enhanced with better icons and spacing
  infoGrid: "grid grid-cols-2 gap-6 p-6 bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-800/60 backdrop-blur-sm",
  infoItem: "flex items-center gap-3 text-gray-300 text-base font-semibold hover:text-white transition-colors duration-300 group",
  infoIcon: {
    clock: "h-5 w-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    star: "h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]",
    users: "h-5 w-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
    calendar: "h-5 w-5 text-green-500 group-hover:text-green-400 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
  },
  
  // Sections - enhanced
  section: "space-y-4 p-6 bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border border-gray-800/50 backdrop-blur-sm hover:border-red-900/40 transition-all duration-300",
  sectionTitle: "text-xl font-black text-white uppercase tracking-wider border-b border-red-900/30 pb-3 mb-4",
  
  // Story - enhanced readability
  story: "text-gray-300 text-base leading-loose font-light",
  
  // Categories section
  categoriesSection: "space-y-4",
  categoriesList: "flex flex-wrap gap-3",
  categoryTag: "px-4 py-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl text-sm text-gray-300 font-semibold border-2 border-gray-700/60 hover:border-red-500/60 hover:text-white hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105 cursor-default backdrop-blur-sm",
  
  // People lists - enhanced tags
  peopleList: "flex flex-wrap gap-3",
  personTag: "px-4 py-2 bg-gradient-to-br from-red-950/40 to-red-900/40 rounded-xl text-sm text-gray-300 font-semibold border-2 border-red-900/50 hover:border-red-500/70 hover:text-white hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 cursor-default backdrop-blur-sm"
};