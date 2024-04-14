import { Box } from "@mui/material";
import "./main.scss";

import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

const Main = () => {
    return (
        <Box
            component="main"
            className="main">
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
        </Box>
    );
};

export default Main;