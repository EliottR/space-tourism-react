import React from 'react';
import Header from '../components/Header';
import NamePage from '../components/NamePage';
import logo from '../assets/destination/image-moon.png';
import data from '../data/data.json';

class SwitchPlanets extends React.Component {

    render() {
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
                default:
                    e.target.classList.add('activePlanets');
            }
        }

        function removeClass(e) {
            for (let i = 0; i < e.target.parentNode.childNodes.length; i++) {
                if (i !== e.target.attributes.index.value) {
                    e.target.parentNode.childNodes[i].classList.remove('activePlanets');
                }
            }
        }


        let indexPlanet = 0;

        return (
            <ul className='destination__switchPlanets' >
                <li index={indexPlanet++} onClick={changePlanet} className="destination__switchPlanets__tab activePlanets">moon</li>
                <li index={indexPlanet++} onClick={changePlanet} className="destination__switchPlanets__tab">mars</li>
                <li index={indexPlanet++} onClick={changePlanet} className="destination__switchPlanets__tab">europa</li>
                <li index={indexPlanet++} onClick={changePlanet} className="destination__switchPlanets__tab">titan</li>
            </ul >
        );
    }
};


class Planets extends React.Component {

    render() {
        return (
            <article className="destination__planets">
                <img className="destination__planets__img" src={this.props.img} alt="planet" />
                <SwitchPlanets />
                <h2 className="destination__planets__name">{this.props.name}</h2>
                <p className="destination__planets__description">{this.props.description}</p>
                <div className="destination__planets__separator"></div>
            </article>
        );
    }
};

class Destination extends React.Component {
    render() {
        const obj = JSON.stringify(data);
        const json = JSON.parse(obj);

        return (
            <>
                <Header />
                <main className='destination'>
                    <NamePage index='01' text='pick your destination' />

                    <h1 style={{ color: 'white' }}>{json.destinations[0].name}</h1>

                    <Planets img={logo} name='moon' description={json.destinations[0].description} />
                </main>
            </>
        );
    }
};

export default Destination;