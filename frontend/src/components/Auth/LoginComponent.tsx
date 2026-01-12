import { Clapperboard, Eye, EyeClosed } from 'lucide-react'
import {loginStyle} from '../../styles/auth/login.js'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import {successToaster , failedToaster} from '../../utilites/toasters.js';

/*
    ***** Template + Styles ;
    Page will be divided into two sides like github style ;
    leftside :Cienma-Image 
    secondside : Container of Form ;
    Form will include the following 
        user-email ;
        user-password ;
        submit-button ; 
        Direct link to Don't have an account create it ; 
    ***** Logic 
*/
export const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        const user_email = formData.user_email; 
        const user_password = formData.user_password; 
        
        // Basic validation
        if (user_email.length === 0 || user_password.length === 0) {
            toast.error('Please fill in all fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setIsLoading(false);
            return;
        }

        try {
            // Check if user exists in localStorage
            const userAuthLocalStorage = localStorage.getItem('user_auth');
            const user_email_local_storage = localStorage.getItem('user_email');
            const is_login = localStorage.getItem('is_login');
            console.log(`LocalStorage: ${user_email_local_storage}`);
            
            if (userAuthLocalStorage && user_email_local_storage && is_login === 'true') {
                // Parse the stored data
                const storedEmail = JSON.parse(user_email_local_storage);
                
                if (storedEmail === user_email) {
                    // Successful login
                    successToaster('Login successful! Redirecting...');
                    
                    // Update login status
                    localStorage.setItem('is_login', 'true');
                    
                    // Redirect after successful login
                    setTimeout(() => {
                        window.location.replace("/");
                    }, 2000);
                    
                } else {
                    // Email doesn't match
                    failedToaster('Invalid email or password');
                }
            } else {
                // No user found or not logged in
                failedToaster('No account found. Please sign up first.');
            }
        } catch (error) {
            // Handle JSON parse errors or other issues
            failedToaster('Login failed. Please try again.');
            console.log(`Errors: ${error}`);
        }
        
        setIsLoading(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <div className={loginStyle.container}>
            
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            {/* Left Side - Cinema Image */}
            <div 
                className={loginStyle.leftSide.base}
                style={{
                    // backgroundImage: 'url("https://images.unsplash.com/photo-1489599809505-7c8e45128ff3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                }}
            >
                <div className={loginStyle.leftSide.overlay}></div>
                <div className={loginStyle.leftSide.content}>
                    <Clapperboard className="h-16 w-16 text-red-500 mb-4" />
                    <h1 className="text-4xl font-bold mb-4" style={{fontFamily:'Dance'}}>Cinema Verse</h1>
                    <p className="text-xl text-gray-300 text-center" >
                        Your gateway to the world of cinema
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className={loginStyle.rightSide.base}>
                <div className={loginStyle.rightSide.formContainer.base}>
                    {/* Header */}
                    <div className={loginStyle.rightSide.formContainer.header.base}>
                        <div className={loginStyle.rightSide.formContainer.header.icon}>
                            <Clapperboard className={loginStyle.rightSide.formContainer.header.iconSvg} />
                        </div>
                        <div className={loginStyle.rightSide.formContainer.header.text}>
                            <h2 style={{fontFamily:'Dance'}}>Welcome Back</h2>
                        </div>
                        <p className={loginStyle.rightSide.formContainer.header.subtitle}>
                            Sign in to your account
                        </p>
                    </div>

                    {/* Form Body */}
                    <div className={loginStyle.rightSide.formContainer.body}>
                        <form onSubmit={handleSubmit} className={loginStyle.rightSide.formContainer.form}>
                            {/* Email Input */}
                            <div className={loginStyle.rightSide.formContainer.inputGroup}>
                                <label htmlFor="user_email" className={loginStyle.rightSide.formContainer.label}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className={loginStyle.rightSide.formContainer.input}
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div className={loginStyle.rightSide.formContainer.inputGroup}>
                                <label htmlFor="user_password" className={loginStyle.rightSide.formContainer.label}>
                                    Password
                                </label>
                                <div className={loginStyle.rightSide.formContainer.passwordContainer}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="user_password"
                                        name="user_password"
                                        value={formData.user_password}
                                        onChange={handleInputChange}
                                        placeholder="Enter your password"
                                        className={loginStyle.rightSide.formContainer.passwordInput}
                                        required
                                    />
                                    <div 
                                        className={loginStyle.rightSide.formContainer.passwordToggle}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className={loginStyle.rightSide.formContainer.submitButton}>
                                Sign In
                            </button>
                        </form>

                        {/* Register Link */}
                        <div className={loginStyle.rightSide.formContainer.register.body}>
                            <div className={loginStyle.rightSide.formContainer.register.text}>
                                <h3>Don't have an account?</h3>
                            </div>
                            <div className={loginStyle.rightSide.formContainer.register.link}>
                                <NavLink to="/signup">Create an account</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}