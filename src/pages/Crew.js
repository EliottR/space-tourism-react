import React from 'react';
import Header from '../components/Header';
import NamePage from '../components/NamePage';

const Crew = () => {
    return (
        <>
            <Header />
            <main>
                <NamePage index='02' text="crew" />
            </main>
        </>
    );
};

export default Crew;