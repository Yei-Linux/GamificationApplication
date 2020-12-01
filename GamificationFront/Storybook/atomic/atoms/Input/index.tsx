import React from 'react';

export interface InputProps {
    children : string
}

const Input = ({children}) => {
    return (
        <input type="text"  value={children}/>
    );
}

export default Input;