import React, { createContext, useState } from 'react';

const MainComp = createContext()

const MainContext = (props) => {
    const [count, setCount] = useState(0)
    return (
        <MainComp.Provider value={{ count, setCount }}>
            {props.children}
        </MainComp.Provider>
    );
}

export default MainContext;
export { MainComp };
