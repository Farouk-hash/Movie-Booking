import React, { useState } from 'react'
import { Clapperboard, Eye, EyeClosed, User } from 'lucide-react'
import { signupStyle } from '../../styles/auth/signup.js'
import { NavLink } from 'react-router-dom'
import {  ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {successToaster , failedToaster} from '../../utilites/toasters.js';

export const SignupComponent = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        username: '',
        user_email: '',
        user_password: '',
        confirm_password: ''
    });
    
    const [isError, setIsError] = useState<boolean>(false);
    const [errors, setErrors] = useState({
        username: '',
        user_email: '',
        user_password: '',
        confirm_password: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        if (validateForm(formData)) {

            // adding authentication to local-storage ; 
            localStorage.setItem('user_email' , JSON.stringify(formData.user_email));
            localStorage.setItem('is_login' , JSON.stringify(true));
            localStorage.setItem('user_auth',JSON.stringify({user_email:formData.user_email , is_login:true}));

            // Success toast
            successToaster('Account created successfully! 🎉');
            
            console.log('Registration successful:', formData);

            // similar behavior as an HTTP redirect
            setTimeout(() => {

                window.location.replace("/login");
            }, 3000);

            // similar behavior as clicking on a link
            // window.location.href = "https://stackoverflow.com";

        } else {
            // Show error toast for validation failures
            failedToaster('Please fix the errors in the form');
           
        }
        
        setIsLoading(false);
    };

    const validateForm = (formData): boolean => {
        const userName = formData.username;
        const user_email = formData.user_email;
        const user_password = formData.user_password;
        const confirm_password = formData.confirm_password;

        // Reset errors
        setErrors({
            username: '',
            user_email: '',
            user_password: '',
            confirm_password: ''
        });

        let isValid = true;

        if (userName.length === 0) {
            setErrors(previousErrors => ({ ...previousErrors, username: 'Please provide a username' }));
            isValid = false;
        } else if (userName.length < 3) {
            setErrors(previousErrors => ({ ...previousErrors, username: 'Username must be at least 3 characters' }));
            isValid = false;
        }

        if (user_email.length === 0) {
            setErrors(previousErrors => ({ ...previousErrors, user_email: 'Please enter your email' }));
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(user_email)) {
            setErrors(previousErrors => ({ ...previousErrors, user_email: 'Please enter a valid email address' }));
            isValid = false;
        }

        if (user_password.length === 0) {
            setErrors(previousErrors => ({ ...previousErrors, user_password: 'Please enter a password' }));
            isValid = false;
        } else if (user_password.length < 6) {
            setErrors(previousErrors => ({ ...previousErrors, user_password: 'Password must be at least 6 characters' }));
            isValid = false;
        }

        if (confirm_password.length === 0) {
            setErrors(previousErrors => ({ ...previousErrors, confirm_password: 'Please confirm your password' }));
            isValid = false;
        } else if (user_password !== confirm_password) {
            setErrors(previousErrors => ({ 
                ...previousErrors, 
                user_password: 'Passwords do not match',
                confirm_password: 'Passwords do not match'
            }));
            isValid = false;
        }

        setIsError(!isValid);
        return isValid;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <div className={signupStyle.container}>
            {/* Toast Container */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            {/* Left Side - Cinema Image */}
            <div 
                className={signupStyle.leftSide.base}
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1489599809505-7c8e45128ff3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                }}
            >
                <div className={signupStyle.leftSide.overlay}></div>
                <div className={signupStyle.leftSide.content}>
                    <Clapperboard className="h-16 w-16 text-red-500 mb-4" />
                    <h1 className="text-4xl font-bold mb-4" style={{fontFamily:'Dance'}}>Join Cinema Verse</h1>
                    <p className="text-xl text-gray-300 text-center">
                        Create your account and start your cinematic journey
                    </p>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className={signupStyle.rightSide.base}>
                <div className={signupStyle.rightSide.formContainer.base}>
                    {/* Header */}
                    <div className={signupStyle.rightSide.formContainer.header.base}>
                        <div className={signupStyle.rightSide.formContainer.header.icon}>
                            <User className={signupStyle.rightSide.formContainer.header.iconSvg} />
                        </div>
                        <div className={signupStyle.rightSide.formContainer.header.text}>
                            <h2 style={{fontFamily:'Dance'}}>Create Account</h2>
                        </div>
                        <p className={signupStyle.rightSide.formContainer.header.subtitle}>
                            Join our cinema community
                        </p>
                    </div>

                    {/* Form Body */}
                    <div className={signupStyle.rightSide.formContainer.body}>
                        <form onSubmit={handleSubmit} className={signupStyle.rightSide.formContainer.form}>
                            {/* Username Input */}
                            <div className={signupStyle.rightSide.formContainer.inputGroup}>
                                <label htmlFor="username" className={signupStyle.rightSide.formContainer.label}>
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    placeholder="Choose a username"
                                    className={`${signupStyle.rightSide.formContainer.input} ${errors.username ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.username && (
                                    <p className="text-red-500 text-xs mt-1">{errors.username}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className={signupStyle.rightSide.formContainer.inputGroup}>
                                <label htmlFor="user_email" className={signupStyle.rightSide.formContainer.label}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={formData.user_email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className={`${signupStyle.rightSide.formContainer.input} ${errors.user_email ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.user_email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div className={signupStyle.rightSide.formContainer.inputGroup}>
                                <label htmlFor="user_password" className={signupStyle.rightSide.formContainer.label}>
                                    Password
                                </label>
                                <div className={signupStyle.rightSide.formContainer.passwordContainer}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="user_password"
                                        name="user_password"
                                        value={formData.user_password}
                                        onChange={handleInputChange}
                                        placeholder="Create a password"
                                        className={`${signupStyle.rightSide.formContainer.passwordInput} ${errors.user_password ? 'border-red-500' : ''}`}
                                        required
                                    />
                                    <div 
                                        className={signupStyle.rightSide.formContainer.passwordToggle}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                                {errors.user_password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.user_password}</p>
                                )}
                            </div>

                            {/* Confirm Password Input */}
                            <div className={signupStyle.rightSide.formContainer.inputGroup}>
                                <label htmlFor="confirm_password" className={signupStyle.rightSide.formContainer.label}>
                                    Confirm Password
                                </label>
                                <div className={signupStyle.rightSide.formContainer.passwordContainer}>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirm_password"
                                        name="confirm_password"
                                        value={formData.confirm_password}
                                        onChange={handleInputChange}
                                        placeholder="Confirm your password"
                                        className={`${signupStyle.rightSide.formContainer.passwordInput} ${errors.confirm_password ? 'border-red-500' : ''}`}
                                        required
                                    />
                                    <div 
                                        className={signupStyle.rightSide.formContainer.passwordToggle}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                                    </div>
                                </div>
                                {errors.confirm_password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className={signupStyle.rightSide.formContainer.submitButton}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>

                        {/* Login Link */}
                        <div className={signupStyle.rightSide.formContainer.login.body}>
                            <div className={signupStyle.rightSide.formContainer.login.text}>
                                <h3>Already have an account?</h3>
                            </div>
                            <div className={signupStyle.rightSide.formContainer.login.link}>
                                <NavLink to="/login">Sign in here</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}