import React from 'react';

const Plans = () => {
    return (
        <div className='py-[100px]'>
            <div className="max-w-[1240px] md:grid grid-cols-3 gap-5 mx-auto">
                <div className='shadow-lg rounded md:my-6 h-[500px] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-30px]' src='./img/assest/single.png' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3'>Start Trial</button>
                    </div>
                </div>
                <div className='shadow-lg rounded mt-[100px] md:my-6 h-[500px] bg-gray-100 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-30px]' src='./img/assest/double2.png' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3'>Start Trial</button>
                    </div>
                </div>
                <div className='shadow-lg rounded mt-[100px] md:my-6 h-[500px] hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-30px]' src='./img/assest/triple.png' alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3'>Start Trial</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plans;
