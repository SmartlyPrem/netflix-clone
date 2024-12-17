import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggel, setToggel] = useState(false)
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] my-[15px] mx-auto flex justify-between items-center'>
               <div className='text-3xl font-bold'> WsCube Tech</div>
               {
                toggel ? <AiOutlineClose onClick={()=> setToggel(!toggel)} className='md:hidden block text-white text-2xl'/> :
               <FiMenu onClick={()=> setToggel(!toggel)} className='md:hidden block text-white text-2xl'/>
               }
               
                <ul className='hidden md:flex text-white gap-5'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/company">Company</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                {/* responcive menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[98px] ${toggel ? 'left-0' : 'left-[-100%]'}`}>
                    <li className='p-5'>
                    <Link to="/">Home</Link>
                    </li>
                    <li className='p-5'>
                    <Link to="/company">Company</Link>
                    </li>
                    <li className='p-5'>
                    <Link to="/resources">Resources</Link>
                    </li>
                    <li className='p-5'>
                    <Link to="/about">About</Link>
                    </li>
                    <li className='p-5'>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
