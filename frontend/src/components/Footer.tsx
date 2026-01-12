import { Clapperboard, Facebook, Instagram, Locate, Mail, Phone, X, Youtube, Compass, Film, Mail as ContactIcon, Save, Home, SaveAll, Calendar, PhoneCall, User, GithubIcon } from 'lucide-react'
import {FooterStyle} from '../styles/components/footer.js'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className={FooterStyle.container.base}
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1489599809505-7c8e45128ff3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'  }}>
        {/* Background Overlay */}
        <div className={FooterStyle.container.overlay}></div>
        
        <div className={FooterStyle.container.content}>
            <div className={FooterStyle.container.grids}>
                {/* First Grid - Logo & Social */}
                <div className={FooterStyle.firstGrid.base}>
                    <div className={FooterStyle.firstGrid.logo.base}>
                        <Clapperboard className={FooterStyle.firstGrid.logo.icon} />
                        <div className={FooterStyle.firstGrid.logo.title}>Cinema Verse</div>
                    </div>
                    <div className={FooterStyle.firstGrid.description}>
                        <p>Your ultimate destination for the latest movies, trailers, and cinematic experiences. Discover, book, and enjoy the magic of cinema.</p>
                    </div>
                    <div className={FooterStyle.firstGrid.socialLinks.base}>
                        <a href="#"><Facebook className={FooterStyle.firstGrid.socialLinks.icon} /></a>
                        <a href="#"><Instagram className={FooterStyle.firstGrid.socialLinks.icon} /></a>
                        <a href="#"><Youtube className={FooterStyle.firstGrid.socialLinks.icon} /></a>
                        <a href="#"><X className={FooterStyle.firstGrid.socialLinks.icon} /></a>
                        <a href="#"><GithubIcon className={FooterStyle.firstGrid.socialLinks.icon}/></a>
                    </div>
                </div>

                {/* Second Grid - Explore */}
               <div className={FooterStyle.secondGrid.base}>
                    <div className={FooterStyle.secondGrid.header}>
                        <Compass className={FooterStyle.secondGrid.icon} />
                        <h3 className={FooterStyle.secondGrid.title}>Explore</h3>
                    </div>
                    <div className={FooterStyle.secondGrid.links.base}>
                        <div className={FooterStyle.secondGrid.links.link}>
                            <Home className={FooterStyle.secondGrid.links.linkIcon} />
                            <NavLink to='/'>Home</NavLink>
                        </div>
                        <div className={FooterStyle.secondGrid.links.link}>
                            <SaveAll className={FooterStyle.secondGrid.links.linkIcon} />
                            <NavLink to='/movies'>Movies</NavLink>
                        </div>
                        <div className={FooterStyle.secondGrid.links.link}>
                            <Calendar className={FooterStyle.secondGrid.links.linkIcon} />
                            <NavLink to='/releases'>Releases</NavLink>
                        </div>
                        <div className={FooterStyle.secondGrid.links.link}>
                            <PhoneCall className={FooterStyle.secondGrid.links.linkIcon} />
                            <NavLink to='/contact'>Contact</NavLink>
                        </div>
                        <div className={FooterStyle.secondGrid.links.link}>
                            <User className={FooterStyle.secondGrid.links.linkIcon} />
                            <NavLink to='/login'>Login</NavLink>
                        </div>
                    </div>
                </div>

                {/* Third Grid - Genres */}
                <div className={FooterStyle.thirdGrid.base}>
                    <div className={FooterStyle.thirdGrid.header}>
                        <Film className={FooterStyle.thirdGrid.icon} />
                        <h3 className={FooterStyle.thirdGrid.title}>Genres</h3>
                    </div>
                    <div className={FooterStyle.thirdGrid.links.base}>
                        <div className={FooterStyle.thirdGrid.links.link}>
                            <span className={FooterStyle.thirdGrid.links.linkIcon}>🎬</span>
                            <NavLink to='/genre/horror'>Horror</NavLink>
                        </div>
                        <div className={FooterStyle.thirdGrid.links.link}>
                            <span className={FooterStyle.thirdGrid.links.linkIcon}>🔪</span>
                            <NavLink to='/genre/thriller'>Thriller</NavLink>
                        </div>
                        <div className={FooterStyle.thirdGrid.links.link}>
                            <span className={FooterStyle.thirdGrid.links.linkIcon}>💥</span>
                            <NavLink to='/genre/action'>Action</NavLink>
                        </div>
                        <div className={FooterStyle.thirdGrid.links.link}>
                            <span className={FooterStyle.thirdGrid.links.linkIcon}>🎭</span>
                            <NavLink to='/genre/drama'>Drama</NavLink>
                        </div>
                        <div className={FooterStyle.thirdGrid.links.link}>
                            <span className={FooterStyle.thirdGrid.links.linkIcon}>😂</span>
                            <NavLink to='/genre/comedy'>Comedy</NavLink>
                        </div>
                    </div>
                </div>

                {/* Fourth Grid - Contact */}
                <div className={FooterStyle.fourthGrid.base}>
                    <div className={FooterStyle.fourthGrid.header}>
                        <ContactIcon className={FooterStyle.fourthGrid.icon} />
                        <h3 className={FooterStyle.fourthGrid.title}>Contact Us</h3>
                    </div>
                    <div className={FooterStyle.fourthGrid.links.base}>
                        <div className={FooterStyle.fourthGrid.links.link}>
                            <Mail className={FooterStyle.fourthGrid.links.icon} />
                            <span>Raffat@cinemaverse.com</span>
                        </div>
                        <div className={FooterStyle.fourthGrid.links.link}>
                            <Phone className={FooterStyle.fourthGrid.links.icon} />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className={FooterStyle.fourthGrid.links.link}>
                            <Locate className={FooterStyle.fourthGrid.links.icon} />
                            <span>123 Cinema Street, Movie City</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle section with icon and lines */}
            <div className={FooterStyle.container.middle.base}>
                <div className={FooterStyle.container.middle.line}></div>
                <div className={FooterStyle.container.middle.iconContainer}>
                    <div className={FooterStyle.container.middle.iconCircle}>
                        <Save className={FooterStyle.container.middle.icon} />
                    </div>
                </div>
                <div className={FooterStyle.container.middle.line}></div>
            </div>

            {/* Reserved part */}
            <div className={FooterStyle.container.reservedPart.base}>
                <div className={FooterStyle.container.reservedPart.leftSide}>
                    <h4>Created By Raffat@gmail.com</h4>
                </div>
                <div className={FooterStyle.container.reservedPart.rightSide.base}>
                    <NavLink to='/' className={FooterStyle.container.reservedPart.rightSide.link}>Terms of services</NavLink>
                    <NavLink to='/' className={FooterStyle.container.reservedPart.rightSide.link}>Privacy Policy</NavLink>
                    <NavLink to='/' className={FooterStyle.container.reservedPart.rightSide.link}>Cookie Privacy</NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}