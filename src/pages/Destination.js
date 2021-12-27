import React, { Component } from 'react';
import Header from '../components/Header';
import NamePage from '../components/NamePage';
import data from '../data/data';


const obj = JSON.stringify(data);
const json = JSON.parse(obj);

function SwitchPlanets(props) {
    return (
        <li onClick={props.onClick} className={"destination__switchPlanets__tab" + (props.className ? ' activePlanets' : '')}>{props.name}</li>
    );
}

class Planets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [true, false, false, false],
            index: 0
        }
    }

    handleClick(i) {
        const array = this.state.array.slice();
        array[i] = true;

        for (let j = 0; j < this.state.array.length; j++) {
            if (j !== i) {
                array[j] = false;
            }
        }

        this.setState({
            array: array,
            index: i
        })


    }

    renderSwitchPlanet(i) {

        return (
            <SwitchPlanets
                className={this.state.array[i]}
                onClick={() => this.handleClick(i)}
                name={json.destinations[i].name}
            />
        )
    }

    render(i = this.state.index) {
        let images = [
            require('../assets/destination/image-moon.png'),
            require('../assets/destination/image-mars.png'),
            require('../assets/destination/image-europa.png'),
            require('../assets/destination/image-titan.png')
        ];

        return (
            <article className="destination__planets">
                <img className="destination__planets__img" src={images[i]} alt="planet" />
                <ul className='destination__switchPlanets' >
                    {this.renderSwitchPlanet(0)}
                    {this.renderSwitchPlanet(1)}
                    {this.renderSwitchPlanet(2)}
                    {this.renderSwitchPlanet(3)}
                </ul>
                <h2 className="destination__planets__name">{json.destinations[i].name}</h2>
                <p className="destination__planets__description">{json.destinations[i].description}</p>
                <div className="destination__planets__separator"></div>
                <p className='destination__planets__distance'>avg. distance</p>
                <h3 className="destination__planets__distance__text">{json.destinations[i].distance}</h3>
                <p className='destination__planets__travelTime'>est. travel time</p>
                <h3 className="destination__planets__travelTime__text">{json.destinations[i].travel}</h3>
            </article>
        );
    }
};

class Destination extends Component {

    render() {
        return (
            <>
                <Header />
                <NamePage index='01' text='pick your destination' />
                <main className='destination'>
                    <Planets />
                </main>
            </>
        );
    }
}

export default Destination;
