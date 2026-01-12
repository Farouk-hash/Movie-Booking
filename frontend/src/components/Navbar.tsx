
import { NavLink } from 'react-router-dom';
import {navBarStyles} from '../styles/components/navbar.js'
import { Calendar, Clapperboard , DoorOpen, Film, Home, Mail, Ticket, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Navbar = () => {
    const navItems = [
        { id: "home", label: "Home", icon: Home, path: "/" },
        { id: "movies", label: "Movies", icon: Film, path: "/movies" },
        { id: "releases", label: "Releases", icon: Calendar, path: "/releases" },
        { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
        { id: "bookings", label: "Bookings", icon: Ticket, path: "/bookings" },
    ];
    // const [isActive,setIsActive] = useState<boolean>(false);
    const [isLogin , setIsLogIn] = useState<boolean>(false);
    const [userEmail , setUserEmail] = useState<string>('');

    // Read auth state from localStorage
    useEffect(()=>{
        const userAuthentication = ()=>{
            const localStorageResult = localStorage.getItem('user_auth');
            
            if(localStorageResult){
                try{
                    const json = JSON.parse(localStorageResult);
                    setUserEmail(json?.user_email);
                    setIsLogIn(Boolean(json?.is_login));
                    console.log(json ,userEmail , isLogin);
                    
                    return ;
                }catch(error){
                    console.log(`Error during finding authentication ${error}`);
                }
            }
            setIsLogIn(false);
            setUserEmail('');
        }
        userAuthentication();
    },[]);

    const handleLogout = ()=>{
        localStorage.removeItem('user_auth');
        localStorage.removeItem('user_email');
        localStorage.removeItem('is_login');
        setUserEmail('');
        setIsLogIn(false);
    }

    return (
        <nav className={navBarStyles.nav.base}>
            <div className={navBarStyles.container}>
                {/* Logo on the left */}
                <div className={navBarStyles.logo.container}>
                    <div className={navBarStyles.logo.icon.base}>
                        <Clapperboard  className={navBarStyles.logo.icon.lucideIcon}/>
                    </div>
                    <div className={navBarStyles.logo.text.base}>
                        <span className={navBarStyles.logo.text.span}>Cinema</span>
                    </div>
                </div>

                {/* Navigation links in the center */}
                <div className={navBarStyles.links.container}>
                    {navItems.map((item)=>(
                        <div key={item.id} className={navBarStyles.links.linksItems}>
                            <NavLink to={item.path}  className={({ isActive }) => 
                                    `${navBarStyles.links.linksPath.base} ${isActive ? navBarStyles.links.linksPath.active : ''}`
                                }
                            >
                                <item.icon className={navBarStyles.links.linkIcon}/>
                                <span className={navBarStyles.links.linksLabel}>{item.label}</span>
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* Authentication section (right side) */}
                <div className={navBarStyles.authentication.container}>
                    {isLogin ? (
                        <div className="flex items-center gap-3">
                            <User className={navBarStyles.authentication.userIcon}/>
                            <span className={navBarStyles.authentication.email}>{userEmail}</span>

                            <button className={`${navBarStyles.authentication.logout} flex items-center gap-2`} onClick={handleLogout}>
                                <DoorOpen size={15}/>
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <NavLink className={navBarStyles.authentication.login} to='/login'>
                                <User className={navBarStyles.authentication.userIcon}/>
                                <span className={navBarStyles.authentication.loginSpan}>Login</span>
                            </NavLink>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};