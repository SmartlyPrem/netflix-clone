import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Netflix from './Netflix';
import WeatherApp from './weatherApp/WeatherApp';
import WebsiteApp from './tailwindWebsite/WebsiteApp';
import App from './App';
import MainContext from './Context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Netflix />
    // <WeatherApp/>
    // <MainContext>
    //     {/* <WebsiteApp/> */}
    //     {/* <App/> */}
    // </MainContext>
);
