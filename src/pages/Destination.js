import React from 'react';
import Header from '../components/Header';
import NamePage from '../components/NamePage';
import Planets from '../components/Planets';
import logo from '../assets/destination/image-moon.png';


const Destination = () => {
    return (
        <>
            <Header />
            <main className='destination'>
                <NamePage index='01' text='pick your destination' />
                <Planets img={logo} name='moon' description='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.' />
            </main>
        </>
    );
};

export default Destination;