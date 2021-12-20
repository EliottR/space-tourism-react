import gsap from "gsap";
import { useLocation } from "react-router-dom";
// import '../styles/pages/background.css';


const Background = () => {
    const location = useLocation()

    gsap.fromTo('body', { opacity: 0 }, { duration: 0.5, opacity: 1 })

    switch (location.pathname) {
        case '/':
            document.body.classList = '';
            document.body.classList.add('bg-home');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#0B0D19');
            break;

        case '/destination':
            document.body.classList = '';
            document.body.classList.add('bg-destination');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#FF2600');
            break;

        case '/crew':
            document.body.classList = '';
            document.body.classList.add('bg-crew');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#27282D');
            break;

        case '/technology':
            document.body.classList = '';
            document.body.classList.add('bg-technology');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#27282D');
            break;

        default:
            document.body.classList = '';
            document.body.classList.add('bg-home');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#FF2600');
            break;
    }

    return (
        <div>

        </div>
    );
};

export default Background;