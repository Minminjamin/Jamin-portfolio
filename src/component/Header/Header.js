import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col mt-3 md:flex-row md:justify-around'>
            <div>
                <h1>SJM's portfolio</h1>
            </div>

            <nav className='flex flex-col md:flex-row'>
                <p className='mb-2 md:mb-0 md:mr-4'>About me</p>
                <p className='mb-2 md:mb-0 md:mr-4'>Skills</p>
                <p className='mb-2 md:mb-0 md:mr-4'>Projects</p>
                <p className='mb-2 md:mb-0'>Footer</p>
            </nav>         
        </div>
    );
};

export default Header;