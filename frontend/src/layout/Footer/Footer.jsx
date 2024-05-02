import { Box, Tooltip } from "@mui/material";
import { useContext } from "react";
import "./footer.scss";

import MyContext from "../../contexts/MyContext";

const Footer = () => {
    const { langData } = useContext(MyContext);
    const getLangText = (prop) => langData && langData.footer && langData.footer[prop] ? langData.footer[prop] : prop;

    return (
        <Box
            component="footer"
            className="footer">
            <Box className="footer__info">
                <Box className="footer__info__copy">
                    <p>{getLangText("made")} ❤️ {getLangText("by")} <span>{getLangText("me")}</span></p>
                </Box>
                <Box className="footer__info__media">
                    <p>
                        <Tooltip
                            title="My Linkedin"
                            arrow>
                            <a
                                href="https://www.linkedin.com/in/valentin-tarnovsky-1b91b8219/"
                                target="_blank"
                                rel="noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </Tooltip>
                        <Tooltip
                            title="My GitHub"
                            arrow>
                            <a
                                href="https://github.com/ValentinTarnovsky"
                                target="_blank"
                                rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </Tooltip>
                        <Tooltip
                            title="My Instagram"
                            arrow>
                            <a
                                href="https://www.instagram.com/valentarno_/"
                                target="_blank"
                                rel="noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </Tooltip>
                    </p>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;