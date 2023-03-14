import React from 'react';

const Project = () => {
    const projectData = [
        {
            id : 0,
            img : 'asset/img.jpg',
            projectName : '하루 일기',
            date : '2022',
            describe : '어쩌고 저쩌고 어쩌고 저쩌고',
            function : '어쩌고',
            skills : 'React.js, tailwindCSS',
            gitHub : 'https://github.com/Minminjamin'
        }
    ]

    return (
        <div className=' bg-indigo-100 flex justify-center flex-col'>
            <h1 className='font-bold lg:text-4xl my-5 text-center'>My Projects</h1>
            
            <div className='flex flex-col items-center'>
                {projectData.map(item => (
                    <div key={item.id} className = 'my-5 w-5/6 lg:w-1/2 flex-col lg:flex-row bg-white rounded-lg flex items-center shadow-xl'>
                        <img src={item.img} alt={item.projectName} className='mx-3 w-2/5'/>
                        
                        <div className='flex-col flex'>
                            <span><span className='font-bold mr-3'>프로젝트 이름</span>{item.projectName}</span>

                            <span className='my-3'><span className='font-bold mr-3'>진행날짜</span>{item.date}</span>
                            
                            <h3 className='font-bold'>프로젝트 설명</h3>
                            <span className='mb-3'>{item.describe}</span>

                            <h3 className='font-bold'>프로젝트 주요기능</h3>
                            <span className='mb-3'>{item.function}</span>
                            
                            <h3 className='font-bold'>프로젝트에 사용된 스택들</h3>
                            <span className='mb-3'>{item.skills}</span>

                            <span className='mb-5'><span className='font-bold mr-3'>외부 링크</span><a href={item.gitHub} className="text-black hover:text-blue-700">깃허브 바로가기</a></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;