import React, { useContext } from 'react';
import { MainComp } from './Context/MainContext';

const App = () => {
    const {count} = useContext(MainComp);
    return (
        <div className='text-center'>
            Hello
            {count}
        </div>
    );
}

export default App;
