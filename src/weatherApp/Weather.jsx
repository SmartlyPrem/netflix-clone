import React, { useEffect, useState } from 'react';
import { getDataFromStamp } from './helper';
import { getUpdateTime } from './History';

const Weather = ({ weather, fetchWeather }) => {

    function getInpValue(event) {
        if (event.key == "Enter" && event.target.value != "") {
            fetchWeather(event.target.value);
            event.target.value = "";
        }
    }


    return (
        <div className='col-span-3 '>
            <input onKeyUp={getInpValue} className='w-full border rounded focus:outline-none p-1 text-center' type="text" />
            <div className='text-center h-[500px] flex flex-col gap-5 items-center justify-center shadow mt-3 rounded-tr-full rounded-bl-3xl'>
                {
                    weather == null ? <><span className='text-3xl font-bold text-slate-600'>Please enter city name</span></> :
                        <>
                            <div className='text-5xl font-bold'>{weather.name}</div>
                            <div className='text-3xl'>{weather.main.temp}℃</div>
                            <div className='shadow p-3 flex gap-2'>
                                <div> <p className='font-bold'>Sunrise:</p> {getDataFromStamp(weather.sys.sunrise * 1000, 1)}</div>
                                <div> <p className='font-bold'>Sunset:</p> {getDataFromStamp(weather.sys.sunset * 1000, 1)}</div>
                            </div>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""></img>
                        </>
                }

            </div>

        </div>
    );
}

export default Weather;
