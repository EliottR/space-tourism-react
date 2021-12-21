import gsap from 'gsap';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Power4 } from 'gsap';


const Home = () => {

    let navigate = useNavigate();

    gsap.registerPlugin(ScrollTrigger);

    let revealTl = gsap.timeline();
    let reveal = gsap.utils.toArray('.gs_reveal_fromLeft');

    reveal.forEach((text, i) => {
        revealTl.fromTo(text, {
            opacity: 0
        },

            {
                opacity: 1,
                ease: Power4.easeInOut,
                duration: 0.25
            }
        )
    });

    function changePage() {

        setTimeout(() => {
            navigate("/destination");
        }, 900);


        gsap.to('.home__circle__text', {
            marginBottom: 0
        }, 0)
        gsap.to('.home__circle__text', {
            opacity: 0,
            duration: 0.5,
            delay: 0.3
        })
        gsap.to('.home__text', {
            opacity: 0,
            duration: 0.2,
            delay: 0.5
        })

        let tl = gsap.timeline();

        tl.to('.home__circle', {
            y: '-5rem'
        })
        tl.to('.home__circle', {
            scale: 15,
            transformOrigin: 'center center'
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
                    <h2 className="home__text__h2 gs_reveal_fromLeft">So, you want to travel to</h2>
                    <h1 className="home__text__h1 gs_reveal_fromLeft">Space</h1>
                    <h3 className="home__text__h3 gs_reveal_fromLeft">Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</h3>
                </article>

                <article className="home__circle gs_reveal_fromLeft" onClick={changePage}>
                    <p className="home__circle__text">Explore</p>
                </article>

            </main>
        </>
    );
};

export default Home;