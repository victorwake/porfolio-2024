import { useTranslation } from "react-i18next";
import iglGranos from '../assets/img/work/iglGranos.jpg'
import game from '../assets/img/work/game.jpg'

const Work = () => {
  const [t, i18n] = useTranslation("global");
  const handleMouseOver = (event) => {
    // Cambiar el color de la letra al pasar el ratón sobre ella
    event.target.style.color = getRandomColor();
  };

  const handleMouseOut = (event) => {
    // Restaurar el color original de la letra al quitar el ratón
    event.target.style.color = "";
  };

  const getRandomColor = () => {
    // Generar un color aleatorio en formato hexadecimal
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <>
      <section id="work" className="work">
        <h2 className="titulo">
          {Array.from("Work").map((char, index) => (
            // Cada caracter envuelto en un span con evento onMouseOver
            <span
              key={index}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {char}
            </span>
          ))}
        </h2>

            <section className="section_work">
        <div >
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img className="img-work" src={iglGranos}></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">IGL Granos S.A.</h2>
                  <p className="card_text">
                    Pagina para empresa exportador de materias primas agrícolas, centrándose en productos orgánicos.
                  </p>
                  <button className="btn card_btn">
                  <a  href="https://victorwake.github.io/igl-granos/" target="_blank">View Website</a>
                  </button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img className="img-work" src={game}></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">PI soy Henry</h2>
                  <p className="card_text">
                    Proyecto individual para el curso fullStack de soyHenry.
                  </p>
                  <button className="btn card_btn">
                  <a  href="https://pi-videogames-pza6s3qw0-victorwake.vercel.app/" target="_blank">View Website</a>
                  </button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img className="img-work" src={iglGranos}></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">IGL Granos S.A.</h2>
                  <p className="card_text">
                    Pagina para empresa exportador de materias primas agrícolas, centrándose en productos orgánicos.
                  </p>
                  <button className="btn card_btn">
                  <a  href="https://victorwake.github.io/igl-granos/" target="_blank">View Website</a>
                  </button>
                </div>
              </div>
            </li>
        
       
          
          </ul>
        </div>
        </section>
      </section>
    </>
  );
};

export default Work;
