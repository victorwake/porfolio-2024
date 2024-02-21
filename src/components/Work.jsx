import { useTranslation } from "react-i18next";
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
                  <img className="img-work" src="https://picsum.photos/500/300/?image=10"></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">Card Grid Layout</h2>
                  <p className="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img className="img-work" src="https://picsum.photos/500/300/?image=5"></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">Card Grid Layout</h2>
                  <p className="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button className="btn card_btn">Read More</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img className="img-work" src="https://picsum.photos/500/300/?image=11"></img>
                </div>
                <div className="card_content">
                  <h2 className="card_title">Card Grid Layout</h2>
                  <p className="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid
                    layout
                  </p>
                  <button className="btn card_btn">Read More</button>
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
