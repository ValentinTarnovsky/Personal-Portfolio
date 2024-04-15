import { Box } from "@mui/material";
import "./main.scss";

import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Main = () => {
    return (
        <Box
            component="main"
            className="main">
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </Box>
    );
};

export default Main;