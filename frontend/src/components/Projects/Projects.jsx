import { Box } from "@mui/material";
import { useContext } from "react";
import "./projects.scss";

import ProjectCard from "../ProjectCard";
import MyContext from "../../contexts/MyContext";

const Projects = () => {
    const { langData } = useContext(MyContext);
    const getLangText = (prop) => langData && langData.project && langData.project[prop] ? langData.project[prop] : prop;

    return (
        <Box
            className="projects container spacing"
            id="projects"
            data-aos="fade-up">
            <h3 className="title">{getLangText("title")}</h3>
            <ProjectCard
                title="My Portfolio"
                gitLink="https://github.com/ValentinTarnovsky/mern-portfolio"
                demoLink="https://valentin-tarnovsky-portfolio.netlify.app/"
                imgName="portfolio.png"
                tec={{ react: true, node: true, sass: true, git: true }}/>
            <ProjectCard
                title="MERN E-Commerce"
                gitLink="https://github.com/ValentinTarnovsky/proyecto-integrador-frontend"
                demoLink="https://mi-tienda-valentin.netlify.app/"
                imgName="ecommerce.png"
                tec={{ mongodb: true, express: true, react: true, node: true, sass: true, git: true, js: true, photoshop: true }}/>
            <p>{getLangText("more")}</p>
        </Box>
    );
};

export default Projects;