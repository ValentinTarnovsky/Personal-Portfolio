import { Box } from "@mui/material";
import { useState } from "react";

import "./navbar.scss";

import SvgArrowDownIcon from "../../styles/svgs/arrow-down-s-line.svg";
import SvgCloseLineIcon from "../../styles/svgs/close-line.svg";
import SvgCodeBoxIcon from "../../styles/svgs/code-box-fill.svg";
import SvgMenuLineIcon from "../../styles/svgs/menu-line.svg";
import SvgMoonFillIcon from "../../styles/svgs/moon-fill.svg";
import SvgSunFillIcon from "../../styles/svgs/sun-fill.svg";

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleOnClickShowMenu = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };

    return (
        <nav className="nav container">
            <Box className="nav__data">
                <a
                    href="#"
                    className="nav__logo">
                    <SvgCodeBoxIcon/> VALENTIN
                </a>

                <Box
                    className={isMenuOpen ? "nav__toggle show-icon" : "nav__toggle"}
                    onClick={handleOnClickShowMenu}>
                    <SvgMenuLineIcon className="nav__burger"/>
                    <SvgCloseLineIcon className="nav__close"/>
                </Box>
            </Box>
            <Box
                className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li><a
                        href="#about"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                            About Me
                    </a></li>

                    <li><a
                        href="#skills"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                            Skills
                    </a></li>

                    <li><a
                        href="#projects"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                            Projects
                    </a></li>
                    <li className="dropdown__item">
                        <Box className="nav__link">
                            <SvgMoonFillIcon className="dropdown__svgicon"/><SvgArrowDownIcon className="dropdown__arrow"/>
                        </Box>

                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    id="dark-theme-toggle"
                                    onClick={handleOnClickShowMenu}>
                                    <SvgMoonFillIcon/> Dark
                                </a>
                            </li>

                            <li>
                                <a
                                    className="dropdown__link"
                                    id="light-theme-toggle"
                                    onClick={handleOnClickShowMenu}>
                                    <SvgSunFillIcon/> Light
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown__item">
                        <Box className="nav__link">
                            <span className="dropdown__svgicon">En</span> <SvgArrowDownIcon className="dropdown__arrow"/>
                        </Box>

                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    onClick={handleOnClickShowMenu}>
                                        English
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/index _es.html"
                                    className="dropdown__link"
                                    onClick={handleOnClickShowMenu}>
                                    Spanish
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Box>
        </nav>
    );
};

export default Navbar;