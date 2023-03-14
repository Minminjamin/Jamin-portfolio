import React from 'react';

const Project = () => {
    const projectData = [
        {
            id : 0,
            img : 'asset/diaryNote.png',
            projectName : '하루 일기',
            date : '2023.03.01 ~ 2023.03.09',
            describe : ` 나의 의미있는 하루를 일기로 써봐요! \n \n 매일 매일 쓰는 일기, 하루 일기는 RESTful API를 활용하여 사용자가 일기를 쓰고 수정하며, 필요에 따라 삭제할 수 있는 기능을 구현한 프로젝트입니다. 이 프로젝트는 CRUD 기능을 학습하고 그것을 실전에 적용하는 연습을 하는 과정에서 만들어졌습니다. 사용자 친화적인 UI/UX를 제공하여 쉽게 일기를 작성하고, 각 달별로 일기를 조회할 수 있습니다. 일기를 JSON 서버에 저장하며 RESTful API에 대한 이해를 높였습니다 \n \n 일기 부분을 누르면 그날 쓴 일기의 상세 데이터가와 수정하기로 이동하기 창이 나오며 수정하기 상에서는 일기 수정과 삭제가 가능합니다.`,
            function : ` - JSON을 이용하여 데이터 저장 \n - 일기 작성, 수정, 삭제 기능 \n - 일기 상세 보기 페이지와 작성 페이지, 수정 페이지 개발`,
            skills : 'React, tailwindCSS, RESTfulAPi',
            gitHub : 'https://github.com/Minminjamin/Day-Diary'
        },
        {
            id : 1,
            img : 'asset/webde.png',
            projectName : '웹디자인기능사 실기',
            date : '2022.08.01 ~ 2022.08.19',
            describe : ` 웹디자인기능사 자격증은 저로서 필요한 '기능사' 자격증이자 웹 개발자로 꿈을 키우기 위한 시도였습니다. \n 이 자격증을 통해 HTML, CSS, JS, jQuery와 같은 웹 개발자의 기본 소양을 배울 수 있었으며, 한국산업인력공단에서 제공하는 기출문제를 풀어보며 이러한 언어들을 직접 사용해 볼 수 있었습니다. \n 또한 웹 분야에서 종사하는 사람이라면 반드시 알아야 하는 '사용자 편의성'에 대한 고민과 '웹 표준'을 준수한 웹 페이지 개발, 그리고 태그들 사이에서의 위계질서에 대해서도 실습해 볼 수 있는 시간이었습니다.`,
            function : ` - 웹 표준과 웹 사이트의 유효성, HTML 태그 간의 위계질서에 대한 학습 \n - 사용자에게 편리한 기능이란 무엇인지 학습`,
            skills : 'HTML, CSS, Javascript, jQuary',
            gitHub : 'https://github.com/Minminjamin/Clone-Web-Design'
        }
    ]

    return (
        <div className=' bg-indigo-100 flex justify-center flex-col'>
            <h1 className='font-bold lg:text-4xl my-5 text-center mt-10'>My Projects</h1>
            
            <div className='flex flex-col items-center'>
                {projectData.map(item => (
                    <div key={item.id} className = 'my-5 w-5/6 lg:w-1/2 flex-col lg:flex-row bg-white rounded-lg flex shadow-xl'>
                        <img src={item.img} alt={item.projectName} className='mx-3 my-4 w-2/5 border rounded-lg'/>
                        
                        <div className='flex-col flex mx-3 my-6'>
                            <span><span className='font-bold mr-3'>프로젝트 이름</span>{item.projectName}</span>

                            <span className='my-3'><span className='font-bold mr-3'>진행날짜</span>{item.date}</span>
                            
                            <h3 className='font-bold'>프로젝트 설명</h3>
                            <span className='mb-3 whitespace-pre-wrap'>{item.describe}</span>

                            <h3 className='font-bold'>프로젝트 주요기능</h3>
                            <span className='mb-3 whitespace-pre-wrap'>{item.function}</span>
                            
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