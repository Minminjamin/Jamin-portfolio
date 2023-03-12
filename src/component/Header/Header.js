import React from 'react';

const Header = () => {
    return (  
        <nav className='flex items-center justify-evenly space-x-2 w-full h-16 border-b-4 '>
            <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500'>{'<About me/>'}</h1>
            <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500'>{'<Skills/>'}</h1>
            <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500'>{'<projects/>'}</h1>
            <h1 className='hover:text-blue-400 hover:border-b-2 border-blue-500'>{'<Footer/>'}</h1>
        </nav>  
    );
};

export default Header;