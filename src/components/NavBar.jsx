import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); //Estado del menu
    const [activeSection, setActiveSection] = useState(""); //Estado activo del nav
    const [t, i18n] = useTranslation("global"); //Traduccion

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
    //Cambio de ideoma
    const changeLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };
    //----------------------------------------------------------------------//


    return(
        <header className="header">
                <a href="#" className="logo"></a>
                <i className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`} id="menu-icon" onClick={handleMenuClick}></i>
                <nav className={`navbar ${isMenuOpen ? "active" : ""}`}> 
                    <a id="homeId" href="#home" className="active" style={{ "--i": 1 }} onClick={handleNavLinkClick}>{t("navBar.0")}</a>
                    <a id="aboutMeId" href="#aboutMe" style={{ "--i": 2 }} onClick={handleNavLinkClick}>{t("navBar.1")}</a>
                    <a id="workId" href="#work" style={{ "--i": 3 }} onClick={handleNavLinkClick}>{t("navBar.2")}</a>
                    <a id="skillsId" href="#skills" style={{ "--i": 4 }} onClick={handleNavLinkClick}>{t("navBar.3")}</a>
                    <a id="contactId" href="#contact" style={{ "--i": 5 }} onClick={handleNavLinkClick}>{t("navBar.4")}</a>
                    <i className='bx bxs-flag-alt' id="flag" onClick={changeLanguage}></i>
                </nav>
                
            </header>
    )

}

export default NavBar