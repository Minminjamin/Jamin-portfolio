import React from 'react';

const AboutMe = () => {
    return (
        <div className='flex flex-col lg:flex-row h-1/2 mt-10 justify-center'>
            <div className='lg:w-1/3 flex justify-center'>
                <img src='/asset/img.jpg' alt='임시 이미지' className='border rounded-md'/> 
            </div>
            
            <div className='w-full lg:w-1/3 flex justify-center flex-col '>
                <div className='rounded-md border p-6 border-black '>
                    <h2 className='text-3xl font-bold mb-2'>손자민 | Portfolio</h2>
                    <span className='mt-4 block'>안녕하세요👋, 끊임없이 발전하는 프론트엔드 개발자 손자민입니다. 새로운 기술과 도전에 대한 열정을 가지고 있으며, 꼼꼼한 성격으로 좋은 결과물을 만들기 위해 노력합니다. 팀원들과의 협력을 통해 더 나아가는 개발자가 되고자 합니다.</span>
                </div>

                <div className='flex flex-col mt-6'>
                    <h2 className='text-3xl font-bold mb-2'>📢Link</h2>
                    <span className='text-lg'>✉Email. 0429el@gmail.com</span>
                    <span className='text-lg'>Github. <span className='hover:text-blue-400 hover:border-b-2 border-blue-500 text-lg'>https://github.com/Minminjamin</span></span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;