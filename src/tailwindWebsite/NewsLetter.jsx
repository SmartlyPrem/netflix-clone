import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-full bg-[#2699fb] p-5 md:p-20'>
            <div className='max-w-[1240px] md:flex mx-auto justify-between items-center my-5'>
                <div>
                    <h1 className='text-[25px] lg:text-[40px] font-bold text-white'>Want ot learn latest I.T skills</h1>
                    <span className='text-white'>Sign up to our newsletter and stay up to date</span>
                </div>
                <div className='me-10'>
                    <input className='p-3 my-2 text-slate-600 me-2' placeholder='Email' type="email" />
                    <button className='bg-black text-white p-3 rounded mt-4'>Get Started</button>
                    <br />
                    <span className='text-white'>We care bout protection of your data. Read our <br /> <a className='text-black' href="#">Privacy Policy</a></span>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
