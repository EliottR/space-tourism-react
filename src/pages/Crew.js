import React, { Component } from 'react';
import Header from '../components/Header';
import NamePage from '../components/NamePage';
import { SwitchTransition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import data from '../data/data';

const obj = JSON.stringify(data);
const json = JSON.parse(obj);

const ImageCrew = (props) => {
    return (
        <div className='crew__imageContainer'>
            <img className='crew__imageContainer__img' src={props.image} alt="astronaut" />
        </div>
    );
};

const Bullets = (props) => {
    return (
        <li onClick={props.onClick} className={'crew__SwitchBullets__bullet' + (props.className ? ' activeBullet' : '')}></li>
    );
};

const People = (props) => {
    return (
        <div className='crew__details'>
            <p className='crew__details__role'>{props.role}</p>
            <h2 className='crew__details__name'>{props.name}</h2>
            <h3 className='crew__details__bio'>{props.bio}</h3>
        </div>
    );
};


class Crew extends Component {
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
            <>
                <Header />
                <main className='crew'>
                    <NamePage index='02' text="meet your crew" />
                    <SwitchTransition>
                        <CSSTransition key={this.state.index} timeout={400} classNames="peopleTransition">
                            <ImageCrew image={require('../assets' + json.crew[i].images.png)} />
                        </CSSTransition>
                    </SwitchTransition>
                    <ul className='crew__SwitchBullets'>
                        {json.crew.map((i, key) => {
                            return <Bullets key={key} onClick={() => this.handleClick(key)} className={this.state.array[key]} />
                        })}
                    </ul>
                    <SwitchTransition>
                        <CSSTransition key={this.state.index} timeout={400} classNames="peopleTransition">
                            <People role={json.crew[i].role} name={json.crew[i].name} bio={json.crew[i].bio} />
                        </CSSTransition>
                    </SwitchTransition>
                </main>
            </>
        );
    }
}

export default Crew;