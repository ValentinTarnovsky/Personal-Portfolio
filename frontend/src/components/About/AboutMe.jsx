import { useContext } from "react";
import MyContext from "../../contexts/MyContext";

const AboutMe = () => {
    const { portfolioConfig } = useContext(MyContext);
    const lang = portfolioConfig && portfolioConfig.length > 0 ? portfolioConfig[1].lang : "en";
    return (
        <>
            {lang === "en" ? (
                <p>
                    I am passionate about <b>programming</b> and currently seeking opportunities as a <b>Front End Developer</b>. I recently graduated from the <b>FullStack Engineer Bootcamp</b> at <a href="https://www.educacionit.com/bootcamp-full-stack?gclid=CjwKCAjw4ZWkBhA4EiwAVJXwqbBGZK3J-TJAFzESuiTV8w8Y3CfLYsfOcBcECPF6ccZkvdrsa5OS6xoC09YQAvD_BwE" target="_blank" rel="noreferrer"><b>EducationIT</b></a>, backed by Manhattan College, where I gained knowledge in both Frontend and Backend, and graduated in Front-End by <b>UTN</b>. Although I do not have professional experience, I am a dedicated and quick learner.<br/>
                    My short-term goal is to start my career in the technology field, while my long-term aspiration is to work in the leading countries of the industry, contributing to innovative and significant projects.<br/>
                    I am characterized by my unwavering <b>determination</b> and <b>focus</b>, both in my personal and professional life. I consider myself adaptable, proactive, and creative, capable of working both independently and in a team.<br/>
                    To stay updated, I work on personal projects and enjoy challenges on platforms like LeetCode. My greatest strength is my dedication; when I am passionate about something, I commit fully to achieve exceptional results.<br/>
                    I face challenges with determination, seeking solutions through research and leveraging the expertise of other industry professionals. I am motivated by the prospect of achieving a balance between my two passions: training and programming.
                </p>

            ) : (
                <p>
                    Soy un apasionado de la <b>programación</b> y actualmente busco oportunidades como <b>Desarrollador Front End</b>. Recientemente me gradué del <b>Bootcamp FullStack Engineer</b> en <a href="https://www.educacionit.com/bootcamp-full-stack?gclid=CjwKCAjw4ZWkBhA4EiwAVJXwqbBGZK3J-TJAFzESuiTV8w8Y3CfLYsfOcBcECPF6ccZkvdrsa5OS6xoC09YQAvD_BwE" target="_blank" rel="noreferrer"><b>EducationIT</b></a>, respaldado por Manhattan College, donde adquirí conocimientos tanto en Frontend como Backend, y me titulé en Front-End por la <b>UTN</b>. Aunque no tengo experiencia profesional, soy una persona dedicada y de rápido aprendizaje.<br/>
                    Mi objetivo a corto plazo es iniciar mi carrera en el campo de la tecnología, mientras que a largo plazo aspiro a trabajar en las principales empresas de la industria, contribuyendo en proyectos innovadores y significativos.<br/>
                    Me caracterizo por mi <b>determinación</b> y <b>enfoque</b> inquebrantables, tanto en mi vida personal como profesional. Me considero adaptable, proactivo y creativo, capaz de trabajar tanto en equipo como de forma independiente.<br/>
                    Para mantenerme actualizado, trabajo en proyectos personales y me entretengo con desafíos en plataformas como LeetCode. Mi mayor fortaleza es mi dedicación; cuando me apasiona algo, me comprometo al máximo para lograr resultados excepcionales.<br/>
                    Enfrento los desafíos con determinación, buscando soluciones a través de la investigación y aprovechando la experiencia de otros expertos en la materia. Me motiva la perspectiva de lograr un equilibrio entre mis dos pasiones: entrenar y programar.
                </p>

            )}
        </>
    );
};

export default AboutMe;