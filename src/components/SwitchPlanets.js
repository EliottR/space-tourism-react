import React from 'react';

const SwitchPlanets = () => {

    function changePlanet(e) {
        console.log(e)

        switch (e.target.attributes.index.value) {
            case 0:

                e.target.classList.add('active')
                break;
        }
    }

    let index = 0;
    return (
        <ul className='destination__switchPlanets'>
            <li index={index++} onClick={changePlanet} className="destination__switchPlanets__tab">moon</li>
            <li index={index++} onClick={changePlanet} className="destination__switchPlanets__tab">mars</li>
            <li index={index++} onClick={changePlanet} id="test" className="destination__switchPlanets__tab">europa</li>
            <li index={index++} onClick={changePlanet} className="destination__switchPlanets__tab">titan</li>
        </ul >
    );
};


export default SwitchPlanets;