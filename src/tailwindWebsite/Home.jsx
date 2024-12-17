import React from 'react';
import BannerCom from './BannerCom';
import ExpertCom from './ExpertCom';
import NewsLetter from './NewsLetter';
import Plans from './Plans';

const Home = () => {
    return (
        <div>
            <BannerCom/>
            <ExpertCom/>
            <NewsLetter/>
            <Plans/>
        </div>
    );
}

export default Home;
