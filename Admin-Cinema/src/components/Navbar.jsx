
import { NavLink } from 'react-router-dom';
import {navBarStyles} from '../styles/navbar.js'
import { Plus, List, BarChart3, Ticket, Home, Clapperboard } from 'lucide-react';


export const Navbar = () => {
    const navItems = [
        { id: "add-movies", label: "Add Movies", icon: Plus, path: "/add-movies" },
        { id: "list-movies", label: "List Movies", icon: List, path: "/list-movies" },
        { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/dashboard" },
        { id: "bookings", label: "Bookings", icon: Ticket, path: "/bookings" },
    ];


    return (
        <nav className={navBarStyles.nav.base}>
            <div className={navBarStyles.container}>
                {/* Logo on the left */}
                <div className={navBarStyles.logo.container}>
                    <div className={navBarStyles.logo.icon.base}>
                        <Clapperboard  className={navBarStyles.logo.icon.lucideIcon}/>
                    </div>
                    <div className={navBarStyles.logo.text.base}>
                        <span className={navBarStyles.logo.text.span}>Cinema Admin</span>
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

       

            </div>
        </nav>
    );
};