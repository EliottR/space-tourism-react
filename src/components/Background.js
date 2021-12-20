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
            break;

        case '/destination':
            document.body.classList = '';
            document.body.classList.add('bg-destination');
            break;

        case '/crew':
            document.body.classList = '';
            document.body.classList.add('bg-crew');
            break;

        case '/technology':
            document.body.classList = '';
            document.body.classList.add('bg-technology');
            break;

        default:
            document.body.classList = '';
            document.body.classList.add('bg-home');
            break;
    }

    return (
        <div>

        </div>
    );
};

export default Background;