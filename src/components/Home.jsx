import { useTranslation } from 'react-i18next';
const Home = () => {
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
       <section id="home" className="home">
            <h2 className="titulo">
                {Array.from("Victor Pinto").map((char, index) => (
                // Cada caracter envuelto en un span con evento onMouseOver
                <span key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {char}
                </span>
                ))}
                </h2>
            <h1 className="titulo">
                {Array.from("full stack developer").map((char, index) => (
                // Cada caracter envuelto en un span con evento onMouseOver
                <span key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {char}
                </span>
                ))}
            </h1>
      </section>
       </>
    )

}

export default Home