import { useTranslation } from 'react-i18next';
import whatsapp from '../assets/img/whatsapp.png'
import gmail from '../assets/img/gmail.png'
const Contact = () => {
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
       <section id="contact" className="aboutMe">
            <h2 className="titulo">
                {Array.from("CONTACT").map((char, index) => (
                // Cada caracter envuelto en un span con evento onMouseOver
                <span key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {char}
                </span>
                ))}
                </h2>
                <div className="socialLinks">
                <a href="https://api.whatsapp.com/send/?phone=541131158866" target="_blank"><img className="imgSkills" src={whatsapp} alt="whatsapp" width={40}></img></a>
                <a href="mailto:victorpintowake@gmail.com" target="_blank"><img className="imgSkills" src={gmail} alt="gmail" width={40}></img></a>
                </div>
      </section>
       </>
    )

}

export default Contact