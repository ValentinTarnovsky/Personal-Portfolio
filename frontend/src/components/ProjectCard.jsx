import { Box } from "@mui/material";
import PropTypes from "prop-types";

import FaIcon from "./FaIcon";
import LinkButton from "./linkButton";

const ProjectCard = (props) => {
    const { title, gitLink, demoLink, imgName, tec } = props;

    return (
        <Box className="card">
            <Box className="card__img">
                <img
                    src={`/images/projects/${imgName}`}
                    alt={`${title} img`}/>
            </Box>
            <h3 className="card__title">
                {title}
            </h3>
            <h3 className="card__tech">
                {tec?.html && <FaIcon tec="html"/>}
                {tec?.css && <FaIcon tec="css"/>}
                {tec?.sass && <FaIcon tec="sass"/>}
                {tec?.js && <FaIcon tec="js"/>}
                {tec?.react && <FaIcon tec="react"/>}
                {tec?.git && <FaIcon tec="git"/>}
                {tec?.node && <FaIcon tec="node.js"/>}
                {tec?.express && <FaIcon tec="express.js"/>}
                {tec?.mongodb && <FaIcon tec="mongodb"/>}
                {tec?.photoshop && <FaIcon tec="photoshop"/>}
            </h3>
            <Box className="card__buttons">
                <LinkButton href={gitLink}>
                    <i className="fa-brands fa-github"></i>GitHub
                </LinkButton>
                <LinkButton href={demoLink}>
                    <i className="fa-solid fa-laptop"></i>Demo
                </LinkButton>
            </Box>
        </Box>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    gitLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    tec: PropTypes.object,
};

export default ProjectCard;