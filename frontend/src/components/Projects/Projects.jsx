import { Box } from "@mui/material";
import "./projects.scss";

import ProjectCard from "../ProjectCard";

const Projects = () => {
    return (
        <Box
            className="projects container spacing"
            id="projects"
            data-aos="fade-up">
            <h3 className="title">Projects</h3>
            <ProjectCard
                title="MERN Portfolio"
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
            <p>More coming soon...</p>
        </Box>
    );
};

export default Projects;