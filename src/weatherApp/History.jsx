import React, { useState } from 'react';
import {getTimeDifference } from './helper';

const History = ({history, getUpdateTime, clearAll}) =>{

    // const clearAll = () =>{
    //     return localStorage.removeItem('history')
    // }

    return (
        <div className='border col-span-2'>
            <div className='text-xl text-center mb-3'>History</div>
            <button className='bg-blue-600 text-white p-2 rounded ms-3' onClick={clearAll}>Clear All</button>
            <ul className='px-3'>
                {
                    history.map(
                        (h, i)=>{
                            return <li key={i} className='shadow my-2 p-1 relative cursor-pointer'onClick={()=>getUpdateTime(h.name)}>{h.name} 
                            <span className='text-gray-500 absolute text-sm right-[10px]'> ({getTimeDifference(h.timestamp)})</span>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default History;
