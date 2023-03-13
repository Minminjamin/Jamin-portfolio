import React from 'react';

const Header = () => {
    return (  
        <nav className='flex items-center justify-evenly space-x-0 w-full h-24 border-b-4 bg-white'>
            <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg font-bold lg:text-3xl lg:font-extrabold'>{'<About me/>'}</h1>
            <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg font-bold lg:text-3xl lg:font-extrabold'>{'<Skills/>'}</h1>
            <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg font-bold lg:text-3xl lg:font-extrabold'>{'<Projects/>'}</h1>
            {/* <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg font-bold lg:text-3xl lg:font-extrabold'>{'<Footer/>'}</h1> */}
        </nav>  
    );
};

export default Header;