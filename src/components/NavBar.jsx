import { useEffect } from "react";
import { useState } from "react";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); //Estado del menu
    const [activeSection, setActiveSection] = useState(""); //Estado activo del nav

    // Funcion para abrir y cerrar el menu
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
      };

    //----------------------------------------------------------------------//

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const navLinks = document.querySelectorAll("header nav a");
            const top = window.scrollY;
    
            sections.forEach((sec) => {
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute("id");
    
            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                        setActiveSection(id);
                    }
                });
            }
    });
    
    const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);
    };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    //Fin estado activo del nav
    
    //----------------------------------------------------------------------//

    return(
        <header className="header">
                <a href="#" className="logo"></a>
                <i className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`} id="menu-icon" onClick={handleMenuClick}></i>
                <nav className={`navbar ${isMenuOpen ? "active" : ""}`}> 
                {/* <nav className={`navbar`}> */}
                    <a id="homeId" href="#home" className="active" style={{ "--i": 1 }} onClick={handleNavLinkClick}>Home</a>
                    <a id="aboutMeId" href="#aboutMe" style={{ "--i": 2 }} onClick={handleNavLinkClick}>About me</a>
                    <a id="workId" href="#work" style={{ "--i": 3 }} onClick={handleNavLinkClick}>Work</a>
                    <a id="skillsId" href="#skills" style={{ "--i": 4 }} onClick={handleNavLinkClick}>Skills</a>
                    <a id="contactId" href="#contact" style={{ "--i": 5 }} onClick={handleNavLinkClick}>Contact</a>
                </nav>
            </header>
    )

}

export default NavBar