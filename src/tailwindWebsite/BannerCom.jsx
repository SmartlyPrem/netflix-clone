import React from 'react';
import Typed from 'react-typed';

const BannerCom = () => {
    return (
        <div className='bg-[#2699fb] w-full py-[60px] md:py-[100px]'>
            <div className='max-w-[1240px] mx-auto text-center font-bold md:my-[60px]'>
                <div className='md:text-3xl text-xl md:my-5'>
                    Learn with us
                </div>
                <h2 className='text-white font-bold text-4xl md:text-[60px] md:my-6'>Grow with us</h2>
                <div className='text-4xl md:text-[50px] text-white md:my-7'>
                    Learn 
                    <Typed 
                    className='pl-3'
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={120}/>
                </div>
                <button className='bg-black text-white p-3 rounded mt-4'>Get Started</button>
            </div>
        </div>
    );
}

export default BannerCom;
