import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";

const FaIcon = (props) => {
    const { tec } = props;

    const getIcon = (tec) => {
        switch (tec) {
        case "html":
            return "fab fa-html5";
        case "css":
            return "fab fa-css3-alt";
        case "sass":
            return "fab fa-sass";
        case "js":
            return "fab fa-js-square";
        case "react":
            return "fab fa-react";
        case "git":
            return "fab fa-git";
        case "node.js":
            return "fab fa-node-js";
        case "express.js":
            return "fab fa-node-js";
        case "mongodb":
            return "fas fa-database";
        case "photoshop":
            return "fas fa-palette";
        default:
            return "";
        }
    };

    const icon = getIcon(tec);

    return (
        <Tooltip
            title={tec.toUpperCase()}
            arrow
            placement="bottom">
            <i className={icon}></i>
        </Tooltip>
    );
};

FaIcon.propTypes = {
    tec: PropTypes.oneOf([
        "html",
        "css",
        "sass",
        "js",
        "react",
        "git",
        "node.js",
        "express.js",
        "mongodb",
        "photoshop",
    ]).isRequired,
};

export default FaIcon;