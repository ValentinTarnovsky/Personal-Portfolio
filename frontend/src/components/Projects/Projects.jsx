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
                title="Personal Portfolio"
                gitLink="https://github.com/ValentinTarnovsky/Personal-Portfolio"
                demoLink="https://personal-portfolio-gray-alpha.vercel.app/"
                imgName="portfolio.png"
                tec={{ react: true, node: true, sass: true, git: true }}/>
            <ProjectCard
                title="MERN E-Commerce"
                gitLink="https://github.com/ValentinTarnovsky/Final-Project-MERN-eCommerce"
                demoLink="https://final-project-mern-e-commerce.vercel.app/"
                imgName="ecommerce.png"
                tec={{ mongodb: true, express: true, react: true, node: true, sass: true, git: true, js: true, photoshop: true }}/>
            <p>{getLangText("more")}</p>
        </Box>
    );
};

export default Projects;