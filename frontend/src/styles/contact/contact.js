
export const ContactStyle = {
    container: "min-h-screen bg-gray-900 pt-20 pb-12",
    
    // Header
    header: {
        base: "max-w-7xl mx-auto px-6 mt-15 mb-12 text-center",
        title: "text-4xl md:text-4xl font-bold text-white mb-4",
        info: "text-l text-gray-300 max-w-2xl mx-auto"
    },
    
    // Main Container
    main: {
        base: "max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12"
    },
    
    // Form Section
    form: {
        wrapper: "relative", // Added wrapper for positioning
        borderIcon: "absolute -left-4 -top-5 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center z-10", // Border icon
        borderIconSvg: "text-white w-4 h-4", // Icon styling
        base: "bg-gray-800 rounded-2xl p-8 border border-gray-700 relative", // Added relative
        header: "flex items-center gap-4 mb-8",
        icon: "text-red-500",
        title: "text-2xl font-bold text-white",
        content: "space-y-6",
        grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
        field: "space-y-2",
        label: "block text-white font-medium text-sm",
        input: "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300",
        select: "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300",
        textarea: "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-vertical",
        button: "w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
    },
    
    // Contact Info Section
    contact: {
        base: "space-y-6",
        wrapper: "relative", // Added wrapper
        borderIcon: "absolute -left-4 -top-5 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10", // Blue icon
        borderIconSvg: "text-white w-4 h-4",
        card: "bg-gray-800 rounded-2xl p-8 border border-gray-700 space-y-8",
        item: "flex gap-4",
        icon: "flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white",
        info: "flex-1",
        title: "text-lg font-bold text-white mb-1",
        text: "text-red-500 font-semibold mb-1",
        description: "text-gray-400 text-sm"
    },
    
    // Urgent Issues Card
    urgent: {
        wrapper: "relative", // Added wrapper
        borderIcon: "absolute -left-4 -top-5 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center z-10", // Yellow icon
        borderIconSvg: "text-white w-4 h-4",
        card: "bg-gray-800 rounded-2xl p-8 border border-gray-700 space-y-4",
        header: "flex items-center gap-3",
        icon: "text-yellow-500",
        title: "text-xl font-bold text-white",
        info: "text-gray-400 text-sm",
        hotline: "flex items-center gap-4 bg-gray-700 rounded-xl p-4",
        label: "bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold uppercase",
        number: "text-white font-bold text-lg"
    }
}