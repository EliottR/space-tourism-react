import React from 'react';

const SwitchPlanets = () => {

    function removeClass(e) {
        for (let i = 0; i < e.target.parentNode.childNodes.length; i++) {
            if (i != e.target.attributes.index.value) {
                e.target.parentNode.childNodes[i].classList.remove('activePlanets');
            }
        }
    }

    function changePlanet(e) {
        switch (parseInt(e.target.attributes.index.value)) {
            case 0:
                removeClass(e);
                e.target.classList.add('activePlanets')
                break;
            case 1:
                removeClass(e);
                e.target.classList.add('activePlanets')
                break;
            case 2:
                removeClass(e);
                e.target.classList.add('activePlanets')
                break;
            case 3:
                removeClass(e);
                e.target.classList.add('activePlanets')
                break;
        }
    }

    let index = 0;
    return (
        <ul className='destination__switchPlanets'>
            <li index={index++} onClick={changePlanet} className="destination__switchPlanets__tab activePlanets">moon</li>
            <li index={index++} onClick={changePlanet} className="destination__switchPlanets__tab">mars</li>
            <li index={index++} onClick={changePlanet} id="test" className="destination__switchPlanets__tab">europa</li>
            <li index={index++} onClick={changePlanet} className="destination__switchPlanets__tab">titan</li>
        </ul >
    );
};


export default SwitchPlanets;