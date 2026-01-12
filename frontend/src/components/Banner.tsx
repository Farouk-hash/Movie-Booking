import { useEffect, useRef, useState } from 'react';
import {banner} from '../styles/components/banner.js';
import videoBanner from '../assets/MovieBannerVideo.mp4';
import { Film, Star, Globe, Clock, Zap, Heart, Camera, Palette, Rocket, Users, Award, Sparkles, Book, Info } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Banner = () => {
    const [bannerObject, setBannerObject] = useState({id: 1, title: 'The Magic of Cinema', info: 'Where dreams unfold on the silver screen and stories come to life', icon: Sparkles});
    const countRef = useRef<number>(1);


 const bannerTitleInfo = [
    {id: 2, title: 'Beyond Reality', info: 'Step into extraordinary realms where the impossible becomes possible, and every scene transports you to universes beyond your wildest imagination', icon: Rocket}, 
    {id: 3, title: 'Epic Stories Await', info: 'Immerse yourself in captivating narratives that span generations, where each character\'s journey becomes your own and every plot twist leaves you breathless', icon: Film}, 
    {id: 4, title: 'The Art of Storytelling', info: 'Witness the masterful craft of cinematic expression, where directors paint with light, writers weave emotional tapestries, and actors breathe life into unforgettable characters', icon: Palette}, 
    {id: 5, title: 'Unforgettable Journeys', info: 'Embark on cinematic adventures that traverse time and space, from ancient civilizations to distant galaxies, all from the comfort of your theater seat', icon: Globe}, 
    {id: 6, title: 'Cinematic Excellence', info: 'Experience the pinnacle of filmmaking artistry where cutting-edge technology meets creative genius, delivering visual and emotional experiences that redefine entertainment', icon: Award}, 
    {id: 7, title: 'Where Legends Are Born', info: 'Be part of cultural moments that will be celebrated for decades to come, witnessing the birth of iconic scenes and performances that become embedded in our collective memory', icon: Star}, 
    {id: 8, title: 'The Power of Visual Tales', info: 'Discover how moving images can evoke profound emotions, challenge perspectives, and create connections that transcend language barriers and cultural differences', icon: Heart}, 
    {id: 9, title: 'A World of Wonder', info: 'Explore the magic hidden in everyday life through the cinematic lens, where ordinary moments transform into extraordinary revelations and simple stories become profound lessons', icon: Camera},
    {id: 10, title: 'Timeless Entertainment', info: 'Create lasting memories with stories that withstand the test of time, offering new insights with each viewing and becoming cherished traditions passed through generations', icon: Clock},
    {id: 11, title: 'The Universal Language', info: 'Connect with people across the globe through the shared experience of cinema, where emotions and human experiences transcend words and create bonds that know no borders', icon: Users},
    {id: 12, title: 'Masterpieces in Motion', info: 'Witness the creation of artistic excellence where every frame is meticulously crafted, every sound carefully designed, and every performance perfectly harmonized to create cinematic symphonies', icon: Zap}
];

    useEffect(() => {
        const bannerInterval = setInterval(() => {
            const nextIndex = countRef.current % bannerTitleInfo.length;
            const banner = bannerTitleInfo[nextIndex];
            setBannerObject(banner);
            countRef.current++;
        }, 5000);

        return () => clearInterval(bannerInterval);
    }, []);

  return (
        <>
            <div className={banner.container}>
                {/* video part */}
                <div className={banner.video.container.base}>
                    <video  muted loop className={banner.video.container.video} autoPlay playsInline >
                        <source src={videoBanner} type='video/mp4'/>
                        {/* fallback */}
                        <div className={banner.video.container.videoFallback}>
                            your browser not support that video
                        </div>
                    </video>
                </div>
                {/* title + info */}
                <div className={banner.titleInfo.container.base}>
                    {
                        <div key={bannerObject.id} className={banner.titleInfo.container.content}>
                            <bannerObject.icon className={banner.titleInfo.container.icon} />
                            <h2 className={banner.titleInfo.container.title} style={{fontFamily:'Dance'}}>
                                {bannerObject.title}
                            </h2>
                            <p className={banner.titleInfo.container.info}>
                                {bannerObject.info}
                            </p>
                        </div>
                    }
                    
                </div>
            

                {/* button */}
                <div className={banner.buttons.container.base}>
                    <NavLink to='/booking' className={banner.buttons.container.button}>
                        <Book className={banner.buttons.container.icon}/>
                        <h4 className={banner.buttons.container.texting}>Booking Movies</h4>
                    </NavLink>
                    <NavLink to='/info' className={banner.buttons.container.button}>
                        <Info className={banner.buttons.container.icon}/>
                        <h4 className={banner.buttons.container.texting}>More Info</h4> {/* Fixed text */}
                    </NavLink>
                </div>
            </div>
        </>
  )
}
