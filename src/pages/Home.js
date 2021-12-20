import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/pages/home.css';
import ReactDOM from 'react-dom';
import DelayLink from 'react-delay-link';

const Home = () => {

    function changePage() {
        gsap.to('.home__circle__text', {
            marginBottom: 0
        }, 0)

        let tl = gsap.timeline();

        tl.to('.home__circle', {
            y: 0
        })
        tl.to('.home__circle', {
            scale: 15,
            transformOrigin: 'center'
        }, '-=0.1')
        tl.to('.home__circle', {
            opacity: 0
        }, '-=0.2')
    }

    return (
        <>
            <Header />
            <main className="home">

                <article className="home__text">
                    <h2 className="home__text__h2">So, you want to travel to</h2>
                    <h1 className="home__text__h1">Space</h1>
                    <h3 className="home__text__h3">Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</h3>
                </article>

                <NavLink delay={2000} to='/destination' className="home__circle" onClick={changePage}>
                    <p className="home__circle__text">Explore</p>
                </NavLink>

            </main>
        </>
    );
};

export default Home;