import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

const Background = () => {
    const location = useLocation()

    useEffect(() => {
        gsap.fromTo('body', { opacity: 0 }, { duration: 0.5, opacity: 1 })
    }, []);


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

    return '';
};

export default Background;