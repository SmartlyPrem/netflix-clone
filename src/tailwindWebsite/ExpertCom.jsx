import React from 'react';

const ExpertCom = () => {
    return (
        <div className='max-w-[1240px] p-2 md:p-0 mx-auto md:grid grid-cols-2 my-8'>
            <div className='w-full flex justify-center'>
                <img className='h-none md:h-[350px]' src="./img/assest/laptop.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center w-full'>
                <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
                <div className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, corporis quam. Voluptate expedita doloribus minus voluptatem qui facere dicta consequuntur, in dolor tempora consectetur accusantium alias quod, nostrum, a ipsa.</div>
                <button className='w-[50%] sm:w-[30%] mt-4 md:mt-10 bg-black text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
    );
}

export default ExpertCom;
