import React from 'react';
import './header.css';

const Header = () => {
    const inlineStyle = {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
    }
    return (
        <>
        <div className="header">
            <h1>My React App</h1>
        </div>
        </>   
    )
}

export default Header