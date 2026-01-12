export const loginStyle = {
    container: "min-h-screen flex",
    
    // Left side - Cinema image
    leftSide: {
        base: "hidden lg:flex flex-1 bg-cover bg-center bg-no-repeat relative",
        image: "w-full h-full",
        overlay: "absolute inset-0 bg-black/40",
content: "relative z-10 flex flex-col justify-center items-start text-white p-12 ml-25 max-w-md"
    },
    
    // Right side - Form container
    rightSide: {
        base: "flex-1 flex items-center justify-center bg-gray-900 p-8",
        formContainer: {
            base: "w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8",
            header: {
                base: "text-center mb-8",
                icon: "flex justify-center mb-4",
                iconSvg: "h-12 w-12 text-red-500",
                text: "text-2xl font-bold text-white mb-2",
                subtitle: "text-gray-400 text-sm"
            },
            body: "space-y-6",
            form: "space-y-4",
            inputGroup: "space-y-2",
            label: "text-gray-300 text-sm font-medium block",
            input: "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300",
            passwordContainer: "relative",
            passwordInput: "w-full px-4 py-3 pr-12 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300",
            passwordToggle: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300",
            submitButton: "w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800",
            register: {
                body: "text-center pt-4 border-t border-gray-700",
                text: "text-gray-400 text-sm mb-2",
                link: "text-red-500 hover:text-red-400 font-semibold transition-colors duration-300"
            }
        }
    }
};