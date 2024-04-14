import { Box } from "@mui/material";
import "./about.scss";

const About = () => {
    return (
        <Box
            className="about container spacing"
            id="about"
            data-aos="fade-up">
            <h3 className="title">About Me</h3>
            <Box className="about__cont">
                <Box className="about__cont__table">
                    <table>
                        <tbody>
                            <tr>
                                <td className="item">Name:</td>
                                <td className="subitem">Valentin Tarnovsky</td>
                            </tr>
                            <tr>
                                <td className="item">Age:</td>
                                <td className="subitem">21</td>
                            </tr>
                            <tr>
                                <td className="item">Country:</td>
                                <td className="subitem">Argentina</td>
                            </tr>
                            <tr>
                                <td className="item">Languages:</td>
                                <td className="subitem">Spanish & English</td>
                            </tr>
                            <tr>
                                <td className="item">Objective:</td>
                                <td className="subitem">Work in an IT company</td>
                            </tr>
                            <tr>
                                <td className="item">Passion:</td>
                                <td className="subitem">Coding & Training</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
                <Box className="about__cont__text">
                    <p><b>Coding</b> is one of my greatest <b>passions</b>, and web development is a tangible expression of this passion.
                        <br/>
                        Graduated in Front-End from UTN. Currently, I am immersed in a FullStack development <b>Bootcamp</b> on the <a
                            href="https://www.educacionit.com/bootcamp-full-stack?gclid=CjwKCAjw4ZWkBhA4EiwAVJXwqbBGZK3J-TJAFzESuiTV8w8Y3CfLYsfOcBcECPF6ccZkvdrsa5OS6xoC09YQAvD_BwE"
                            target="_blank"
                            rel="noreferrer"><b>EducationIT</b></a> platform, backed by Manhattan College. My focus spans both Frontend and Backend.
                        <br/>
                        Throughout my life, I&apos;ve developed unwavering <b>determination</b> and <b>focus</b> in what I love, like coding and
                        training, bringing together a <b>healthy</b> mind and body.
                        <br/>
                        I am naturally adaptable, proactive, and creative. Disciplined and organized.
                        <br/>
                        I enjoy <b>dealing with challenges</b>, researching, and <b>solving problems</b>. I work well in a team and
                        appreciate collaboration to overcome obstacles.
                        <br/>
                        Currently focused on my bootcamp, I am <b>committed to my continuous growth</b> in the development world.
                    </p>
                </Box>
            </Box>
            <Box className="about__cv">
                <a
                    href="/pdf/CV-Tarnovsky-Valentin-en.pdf"
                    download>
                    <div className="animated-button">
                        download cv<span></span><span></span><span></span><span></span>
                    </div>
                </a>
            </Box>
        </Box>
    );
};

export default About;