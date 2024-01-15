import React from 'react';

const logostyle = {
    width:'100%',
    height: '300px',
    margin: '50px',
    transform: 'scale(1.5)',
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const Logo = () => {
    return (
        <div style={containerStyle}>
            <img src={process.env.PUBLIC_URL + 'logo2.png'} alt='space' style={logostyle}></img>
        </div>
    );
};

export default Logo;
