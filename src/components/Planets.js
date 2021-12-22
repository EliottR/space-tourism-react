import SwitchPlanets from "./SwitchPlanets";

const Planets = (props) => {
    return (
        <article className="destination__planets">
            <img className="destination__planets__img" src={props.img} alt="planet" />
            <SwitchPlanets />
            <h2 className="destination__planets__name">{props.name}</h2>
            <p className="destination__planets__description">{props.description}</p>
            <div className="destination__planets__separator"></div>
        </article>
    );
};

export default Planets;