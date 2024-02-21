import { useTranslation } from 'react-i18next';
import html from '../assets/img/skills/html5.png'
import css from '../assets/img/skills/css.png'
import js from '../assets/img/skills/js.png'
import react from '../assets/img/skills/react.png'
import redux from '../assets/img/skills/redux.png'
import sequelize from '../assets/img/skills/sequelize.png'
import node from '../assets/img/skills/node.png'
import java from '../assets/img/skills/java.png'
import springboot from '../assets/img/skills/springboot.png'
import postgres from '../assets/img/skills/postgres.png'
import mysql from '../assets/img/skills/mysql.png'
import bootstrap from '../assets/img/skills/bootstrap.png'
const Skills = () => {
    const [t, i18n] = useTranslation('global');
  const handleMouseOver = (event) => {
    // Cambiar el color de la letra al pasar el ratón sobre ella
    event.target.style.color = getRandomColor();
  };

  const handleMouseOut = (event) => {
    // Restaurar el color original de la letra al quitar el ratón
    event.target.style.color = '';
  };

  const getRandomColor = () => {
    // Generar un color aleatorio en formato hexadecimal
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

    return(
       <>
       <section id="skills" className="skills">
            <h2 className="titulo">
                {Array.from("SKILLS").map((char, index) => (
                // Cada caracter envuelto en un span con evento onMouseOver
                <span key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {char}
                </span>
                ))}
                </h2>
                <section className="">
        <div className="skills-container" >
        <div className="porfolio-container">
            <div className="img-skill">
                <img src={html} alt="Logo HTML5"></img>
                <h3>HTML5</h3>
            </div>
            <div className="img-skill">
                <img src={css}></img>
                <h3>CSS3</h3>
            </div>
            <div className="img-skill">
                <img src={js} alt="Logo JavaScript"></img>
                <h3>JavaScript</h3>
            </div>
            <div className="img-skill">
                <img src={react} alt="Logo jQuery"></img>
                <h3>React js</h3>
            </div>
            <div className="img-skill">
                <img src={redux} alt="Logo Redux"></img>
                <h3>Redux</h3>
            </div>
            <div className="img-skill">
                <img src={sequelize} alt="Logo Sequelize"></img>
                <h3>Sequelize</h3>
            </div>
            
        </div> 
        <div className="porfolio-container"> 
            <div className="img-skill" >
                <img src={node} alt="Logo Node"></img>
                <h3>Node</h3>
            </div>
            <div className="img-skill">
                <img src={java} alt="Logo Java"></img>
                <h3>Java</h3>
            </div>
            <div className="img-skill">
                <img src={springboot} alt="Logo Springboot"></img>
                <h3>Springboot</h3>
            </div>
            <div className="img-skill">
                <img src={postgres} alt="Logo Postgres"></img>
                <h3>Postgres</h3>
            </div>
            <div className="img-skill">
                <img src={mysql} alt="Logo MySQL"></img>
                <h3>MySQL</h3>
            </div>
            <div className="img-skill">
                <img src={bootstrap} alt="Logo Bootstrap"></img>
                <h3>Bootstrap</h3>
            </div>
        </div> 
    </div>
    </section>
      </section>
      
       </>
    )

}

export default Skills