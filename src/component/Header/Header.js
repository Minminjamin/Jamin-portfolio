import React from 'react';
import { Link } from "react-scroll";

const Header = () => {
    return (  
        <nav className='fixed top-0 z-50 flex items-center justify-evenly space-x-0 w-full h-24 border-b-4 bg-white'>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg font-bold lg:text-2xl lg:font-extrabold'>{'<About me/>'}</h1>
            </Link>

            <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg font-bold lg:text-2xl lg:font-extrabold'>{'<Skills/>'}</h1>
            </Link>
            
            <Link to="project" spy={true} smooth={true} offset={-70} duration={500}>
                <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg font-bold lg:text-2xl lg:font-extrabold'>{'<Projects/>'}</h1>
            </Link>
        </nav>  
    );
};

export default Header;