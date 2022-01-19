import React, { Component } from 'react';
import { SwitchTransition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
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

    render(i = this.state.index) {
        return (
            <article className="destination__planets" index={this.state.index}>
                <img className="destination__planets__img" src={require('../assets' + json.destinations[i].images.png)} alt="planet" />
                <div className='destination__planets__texts'>
                    <ul className='destination__switchPlanets' >
                        {json.destinations.map((i, key) => {
                            return <SwitchPlanets key={key} className={this.state.array[key]} onClick={() => this.handleClick(key)} name={json.destinations[key].name} />
                        })}
                    </ul>
                    <SwitchTransition>
                        <CSSTransition key={this.state.index} timeout={200} classNames="planetTransition">
                            <div className='destination__planets__transition'>
                                <h2 className="destination__planets__name">{json.destinations[i].name}</h2>
                                <p className="destination__planets__description">{json.destinations[i].description}</p>
                                <div className="destination__planets__separator"></div>
                                <div className='destination__planets__details'>
                                    <section className='destination__planets__details__distance'>
                                        <p className='destination__planets__details__distance__legend'>avg. distance</p>
                                        <h3 className="destination__planets__details__distance__text">{json.destinations[i].distance}</h3>
                                    </section>
                                    <section className='destination__planets__details__travelTime'>
                                        <p className='destination__planets__details__travelTime__legend'>est. travel time</p>
                                        <h3 className="destination__planets__details__travelTime__text">{json.destinations[i].travel}</h3>                                </section>
                                </div>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </article >
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
