import React from 'react';

const Skills = () => {
    return (
        <div className='flex items-center mt-10 bg-orange-200 flex-col'>
            <div className='my-5'>
                <h1 className='text-4xl font-bold mb-2'>My Skills</h1>
            </div>

            <div className='flex w-full items-center lg:w-1/2 lg:flex-row lg:justify-between flex-col space-x-2 text-center  '>
                <div className='w-1/2 lg:w-1/4 bg-slate-100 rounded-lg my-5 shadow-2xl'>
                    <h1 className='font-bold lg:text-2xl my-5 border-b-2 border-blue-100'>Front-End</h1>
                    
                    <div className='flex flex-row lg:flex-col'>
                        <img src='/asset/feSkills.png' alt='프론트엔드 스택' className='mh-5'/> 
                    </div>
                </div>

                <div className='w-1/2 lg:w-1/4 bg-slate-100 rounded-md my-5 shadow-2xl'>
                    <h1 className='font-bold lg:text-2xl my-5 border-b-2 border-blue-100'>DB</h1>

                    <div className='flex flex-row lg:flex-col'>
                        <img src='/asset/dbSkills.png' alt='백엔드 스택' className='mh-5'/> 
                    </div>
                </div>

                <div className='w-1/2 lg:w-1/4 bg-slate-100 rounded-md my-5 shadow-2xl'>
                    <h1 className='font-bold lg:text-2xl my-5 border-b-2 border-blue-100'>Langage</h1>

                    <div className='flex flex-row lg:flex-col'>
                        <img src='/asset/langugeSkills.png' alt ='언어 스택' className='mh-5'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;