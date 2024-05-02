import { Box } from "@mui/material";
import { useContext } from "react";

import "./skills.scss";

import MyContext from "../../contexts/MyContext";

const Skills = () => {
    const { langData } = useContext(MyContext);
    const getLangText = (prop) => langData && langData.skill && langData.skill[prop] ? langData.skill[prop] : prop;

    const skillsLeft = [
        {
            id: 1,
            skill: "HTML",
            per: 99,
        },
        {
            id: 2,
            skill: "CSS",
            per:85,
        },
        {
            id: 3,
            skill: "SASS",
            per: 85,
        },
        {
            id: 4,
            skill: "JAVASCRIPT",
            per: 90,
        },
        {
            id: 5,
            skill: "REACT",
            per: 80,
        },
    ];

    const skillsRight= [
        {
            id: 1,
            skill: "GIT",
            per: 80,
        },
        {
            id: 2,
            skill: "NODE.JS",
            per: 70,
        },
        {
            id: 3,
            skill: "EXPRESS.JS",
            per: 65,
        },
        {
            id: 4,
            skill: "MONGODB",
            per: 50,
        },
        {
            id: 5,
            skill: "PHOTOSHOP",
            per: 75,
        },
    ];

    return (
        <Box
            className="skills container spacing"
            id="skills"
            data-aos="fade-up">
            <h3 className="title">{getLangText("title")}</h3>
            <Box className="skills__box">
                <Box className="skills__cont">
                    {skillsLeft?.map((skill) => (
                        <Box
                            className="skill"
                            key={skill.id}>
                            <Box className="skill__name">{skill.skill}</Box>
                            <Box className="skill__bar">
                                <Box
                                    className="skill__per"
                                    per={skill.per}
                                    sx={{ maxWidth : `${skill.per}%` }}>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className="skills__cont">
                    {skillsRight?.map((skill) => (
                        <Box
                            className="skill"
                            key={skill.id}>
                            <Box className="skill__name">{skill.skill}</Box>
                            <Box className="skill__bar">
                                <Box
                                    className="skill__per"
                                    per={skill.per}
                                    sx={{ maxWidth : `${skill.per}%` }}>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;