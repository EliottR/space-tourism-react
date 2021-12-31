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

    return (
        <header className='header'>
            <NavLink to='/'>
                <img className='header__logo' src={logo} alt="logo" />
            </NavLink>
            {open ? closeIcon : openIcon}
            <ul className='header__nav' ref={animationMenu}>
                <NavLink to='/' end className={({ isActive }) => "header__nav__tab" + (isActive ? " activeTab" : "")}><b className='header__nav__tab__index'>00</b> Home</NavLink>
                <NavLink to='/destination' end className={({ isActive }) => "header__nav__tab" + (isActive ? " activeTab" : "")}><b className='header__nav__tab__index'>01</b> Destination</NavLink>
                <NavLink to='/crew' end className={({ isActive }) => "header__nav__tab" + (isActive ? " activeTab" : "")}><b className='header__nav__tab__index'>02</b> Crew</NavLink>
                <NavLink to='/technology' end className={({ isActive }) => "header__nav__tab" + (isActive ? " activeTab" : "")}><b className='header__nav__tab__index'>03</b> Technology</NavLink>
            </ul>
        </header>
    );
};

export default Header;