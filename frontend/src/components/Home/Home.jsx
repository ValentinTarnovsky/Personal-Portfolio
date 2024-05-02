import { Box } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import SvgComment from "../../styles/svgs/comment.svg";
import MyContext from "../../contexts/MyContext";
import LinkButton from "../linkButton";

import "./home.scss";

const Home = () => {
    const { langData } = useContext(MyContext);
    const getLangText = (prop) => langData && langData.home && langData.home[prop] ? langData.home[prop] : prop;

    const [ displayText, setDisplayText ] = useState("");
    const texts = [ "Web Developer...", "Freelancer...", "Fullstack engineer..." ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    useEffect(() => {
        const typeText = () => {
            const currentText = texts[textIndex];
            if (isDeleting) {
                setDisplayText(currentText.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setDisplayText(currentText.substring(0, charIndex + 1));
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length + 1) {
                isDeleting = true;
                setTimeout(typeText, 6000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeText, 500);
            } else {
                setTimeout(typeText, 80);
            }
        };

        typeText();
    }, []);

    return (
        <Box className="home container">
            <Box className="home__text">
                <Box className="home__text__cont">
                    <p><span>{getLangText("hello")}</span></p>
                    <p>{getLangText("im")} <span>Valentin</span></p>
                    <p><span>Tarnovsky</span></p>
                    <p><SvgComment/>{displayText}</p>
                    <Box className="home__text__cont__links">
                        <LinkButton
                            className="home__text__cont__links__item"
                            href="https://github.com/ValentinTarnovsky">
                            <i className="fa-brands fa-github"></i>GitHub
                        </LinkButton>
                        <LinkButton
                            className="home__text__cont__links__item"
                            href="https://www.linkedin.com/in/valentin-tarnovsky/">
                            <i className="fa-brands fa-linkedin"></i>LinkedIn
                        </LinkButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;