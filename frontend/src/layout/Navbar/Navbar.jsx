import { Box } from "@mui/material";
import { useState } from "react";

import "./navbar.scss";

import ArrowDownIcon from "../../styles/svgs/arrow-down-s-line.svg";
import CloseLineIcon from "../../styles/svgs/close-line.svg";
import CodeBoxIcon from "../../styles/svgs/code-box-fill.svg";
import MenuLineIcon from "../../styles/svgs/menu-line.svg";
import MoonFillIcon from "../../styles/svgs/moon-fill.svg";
import SunFillIcon from "../../styles/svgs/sun-fill.svg";

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
                    <CodeBoxIcon/> VALENTIN
                </a>

                <Box
                    className={isMenuOpen ? "nav__toggle show-icon" : "nav__toggle"}
                    onClick={() => handleOnClickShowMenu()}>
                    <MenuLineIcon className="nav__burger"/>
                    <CloseLineIcon className="nav__close"/>
                </Box>
            </Box>
            <Box
                className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li><a
                        href="#about"
                        className="nav__link nav__link--close">
                            About Me
                    </a></li>

                    <li><a
                        href="#skills"
                        className="nav__link nav__link--close">
                            Skills
                    </a></li>

                    <li><a
                        href="#projects"
                        className="nav__link nav__link--close">
                            Projects
                    </a></li>
                    <li className="dropdown__item">
                        <Box className="nav__link">
                            <MoonFillIcon className="dropdown__svgicon"/><ArrowDownIcon className="dropdown__arrow"/>
                        </Box>

                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    id="dark-theme-toggle">
                                    <MoonFillIcon/> Dark
                                </a>
                            </li>

                            <li>
                                <a
                                    className="dropdown__link"
                                    id="light-theme-toggle">
                                    <SunFillIcon/> Light
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown__item">
                        <Box className="nav__link">
                            <span className="dropdown__svgicon">En</span> <ArrowDownIcon className="dropdown__arrow"/>
                        </Box>

                        <ul className="dropdown__menu">
                            <li>
                                <a className="dropdown__link">
                                    English
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/index _es.html"
                                    className="dropdown__link">
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