import React from 'react';
import Logo from './Logo';
import MainPage from '../pages/MainPage';

const homepage = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '8000px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
    backgroundPosition: 'left top',
    backgroundColor: 'black'
}

const Home = () => {
    return (
        <div style={homepage}>
            <Logo />
            <MainPage />
        </div>
    );
};

export default Home;
