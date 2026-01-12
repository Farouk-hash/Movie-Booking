export const navBarStyles = {
    // Main nav container
    nav: {
        base: "bg-gray-900 border-b border-gray-700 shadow-xl fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-gray-900/95"
    },
    
    // Main container that holds both logo and links
    container: "max-w-7xl mx-auto px-6 py-3 flex items-center justify-between",
    
    // Logo styles
    logo: {
        container: "flex items-center gap-3 flex-shrink-0",
        icon: {
            base: "bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-xl shadow-lg",
            lucideIcon: "h-6 w-6 text-white"
        },
        text: {
            base: "text-2xl font-bold",
            span: "text-white font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent"
        }
    },
    
    // Navigation links
    links: {
        container: "flex items-center justify-center gap-1 bg-gray-800/50 rounded-xl p-2 border border-gray-700",
        linksItems: "relative group",
        linksPath: {
            base: "flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-transparent hover:border-gray-600",
            active: "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg border-red-400/30"
        },
        linkIcon: "h-5 w-5",
        linksLabel: "font-semibold text-sm"
    },

    // Authentication section
    authentication: {
        container: "flex items-center gap-4 flex-shrink-0",
        userIcon: "h-6 w-6 text-gray-300",
        email: "text-gray-300 text-sm font-medium",
        logout: "bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20",
        login: "flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-green-500/20",
        loginSpan: "font-medium"
    }
};