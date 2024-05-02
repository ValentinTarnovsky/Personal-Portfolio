import { Box } from "@mui/material";
import { useContext, useState } from "react";

import "./navbar.scss";

import SvgArrowDownIcon from "../../styles/svgs/arrow-down-s-line.svg";
import SvgCloseLineIcon from "../../styles/svgs/close-line.svg";
import SvgCodeBoxIcon from "../../styles/svgs/code-box-fill.svg";
import SvgMenuLineIcon from "../../styles/svgs/menu-line.svg";
import SvgMoonFillIcon from "../../styles/svgs/moon-fill.svg";
import SvgSunFillIcon from "../../styles/svgs/sun-fill.svg";

import MyContext from "../../contexts/MyContext";

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const { setTheme, setLang, themeData, langData } = useContext(MyContext);
    const getLangText = (prop) => langData && langData.navbar && langData.navbar[prop] ? langData.navbar[prop] : prop;

    const handleOnClickShowMenu = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };

    const handleOnClickSetTheme = (theme) => {
        setTheme(theme);
    };

    const handleOnClickSetLang = (lang) => {
        setLang(lang);
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
                        {getLangText("about")}
                    </a></li>

                    <li><a
                        href="#skills"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        {getLangText("skill")}
                    </a></li>

                    <li><a
                        href="#projects"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        {getLangText("project")}
                    </a></li>

                    <li><a
                        href="#contact"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        {getLangText("contact")}
                    </a></li>
                    <li className="dropdown__item">
                        <Box className="nav__link">
                            {themeData === "dark" ? <SvgMoonFillIcon className="dropdown__svgicon"/> : <SvgSunFillIcon/>}<SvgArrowDownIcon className="dropdown__arrow"/>
                        </Box>

                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    id="dark-theme-toggle"
                                    onClick={() => {
                                        handleOnClickShowMenu();
                                        handleOnClickSetTheme("dark");
                                    }}>
                                    <SvgMoonFillIcon/> {getLangText("dark")}
                                </a>
                            </li>

                            <li>
                                <a
                                    className="dropdown__link"
                                    id="light-theme-toggle"
                                    onClick={() => {
                                        handleOnClickShowMenu();
                                        handleOnClickSetTheme("light");
                                    }}>
                                    <SvgSunFillIcon/> {getLangText("light")}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown__item">
                        <Box className="nav__link">
                            <span className="dropdown__svgicon">{getLangText("lang")}</span> <SvgArrowDownIcon className="dropdown__arrow"/>
                        </Box>

                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    onClick={() => {
                                        handleOnClickShowMenu();
                                        handleOnClickSetLang("en");
                                    }}>
                                    {getLangText("en")}
                                </a>
                            </li>

                            <li>
                                <a
                                    className="dropdown__link"
                                    onClick={() => {
                                        handleOnClickShowMenu();
                                        handleOnClickSetLang("es");
                                    }}>
                                    {getLangText("es")}
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