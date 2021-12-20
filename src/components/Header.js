import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/shared/logo.svg';
import { FiMenu, FiX } from 'react-icons/fi';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    const openIcon = <FiMenu className='header__hamburger' onClick={openMenu} />
    const closeIcon = <FiX className='header__hamburger' onClick={openMenu} />

    function openMenu() {
        setOpen(!open)
    }

    const animationMenu = useRef(null);

    useEffect(() => {
        open ?
            gsap.to(animationMenu.current, {
                x: 0
            })
            :
            gsap.to(animationMenu.current, {
                x: '100%'
            })
    }, [open]);

    let activeClassName = "active"

    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="logo" />
            {open ? closeIcon : openIcon}
            <ul className='header__nav' ref={animationMenu}>
                <NavLink to='/' className={({ isActive }) => "header__nav__tab" + (isActive ? " active" : "")}><b className='header__nav__tab__index'>00</b> Home</NavLink>
                <NavLink to='/destination' className={({ isActive }) => "header__nav__tab" + (isActive ? " active" : "")}><b className='header__nav__tab__index'>01</b> Destination</NavLink>
                <NavLink to='/crew' className={({ isActive }) => "header__nav__tab" + (isActive ? " active" : "")}><b className='header__nav__tab__index'>02</b> Crew</NavLink>
                <NavLink to='/technology' className={({ isActive }) => "header__nav__tab" + (isActive ? " active" : "")}><b className='header__nav__tab__index'>03</b> Technology</NavLink>
            </ul>
        </header>
    );
};

export default Header;