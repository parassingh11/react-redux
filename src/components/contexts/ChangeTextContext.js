import React, { createContext, useState } from 'react';

export const ChangeContext = createContext();

export const ChangeTextContext = (props) => {
    const [text, setText] = useState('Hello');
    
    return (
        <ChangeContext.Provider value={{ text }}>
           {props.children}
        </ChangeContext.Provider>
    )
}

