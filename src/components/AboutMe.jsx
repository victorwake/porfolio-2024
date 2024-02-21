import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const AboutMe = () => {
  const textRef = useRef(null);
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

  useEffect(() => {
    const options = {
      strings: [t('multi-texto.0'), t('multi-texto.1'), t('multi-texto.2')],// El texto que se escribe solo
      typeSpeed: 100, // tiempo que tarda en escribir cada letra
      backSpeed: 50, // tiempo que tarda en borrar cada letra
      backDelay: 1000, // tiempo que tarda en borrar todo el texto
      loop: true // para que se repita
    };

    const typed = new Typed(textRef.current, options); // se le pasa el texto y las opciones

    return () => {
      typed.destroy(); // para que no se repita
    };
  }, [i18n.language]);

    return(
       <>
       <section id='aboutMe' className="aboutMe">
            <h2 className="titulo">
                {Array.from("ABOUT ME").map((char, index) => (
                // Cada caracter envuelto en un span con evento onMouseOver
                <span key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {char}
                </span>
                ))}
                </h2>
                <div className="about-content">
                <div className="multi-texto">
            <h3 className="soy">{t('soy')}</h3>
            <h3>
              <span ref={textRef} className="multiple-texto"></span>
            </h3>
          </div>
          <p>{t('aboutMe')}</p>
          <button className="btn">
            {t('btn-about')}
          </button>
        </div>
      </section>
       </>
    )

}

export default AboutMe