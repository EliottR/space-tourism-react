import React, { Component } from 'react';
import { SwitchTransition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import NamePage from '../components/NamePage';
import data from '../data/data';

const obj = JSON.stringify(data);
const json = JSON.parse(obj);

function SwitchTechnology(props) {
    return (
        <li onClick={props.onClick} className={"technology__details__switchTechnology__tab" + (props.className ? ' activeTechnology' : '')}>{props.text}</li>
    );
}

const ImageTechnology = (props) => {
    return (
        <img className='technology__details__imageContainer' src={props.image} alt="vehicle" />
    );
};

class Vehicle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [true, false, false],
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

        function selectImage() {
            if (document.body.clientWidth > 1200) {
                return require('../assets' + json.technology[i].images.portrait)
            }
            if (document.body.clientWidth < 1200) {
                return require('../assets' + json.technology[i].images.landscape)
            }
        }

        return (
            <article className="technology__details" index={this.state.index}>
                <ImageTechnology image={selectImage()} />
                <ul className='technology__details__switchTechnology' >
                    {json.technology.map((j, key) => {
                        return <SwitchTechnology key={key} className={this.state.array[key]} onClick={() => this.handleClick(--key)} text={++key} />
                    })}
                </ul>
                <SwitchTransition>
                    <CSSTransition key={this.state.index} timeout={200} classNames="technologyTransition">
                        <div className='technology__details__texts'>
                            <p className='technology__details__texts__terminology'>the terminology …</p>
                            <h2 className="technology__details__texts__h2">{json.technology[i].name}</h2>
                            <p className="technology__details__texts__description">{json.technology[i].description}</p>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </article >
        );
    }
};

class Technology extends Component {
    render() {
        return (
            <>
                <Header />
                <main className='technology'>
                    <NamePage index='03' text='space in launch 101' />
                    <Vehicle />
                </main>
            </>
        );
    };
}

export default Technology;