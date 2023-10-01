"use client";
import styles from "./Header.module.css";

export default function App() {
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  return (
    <header className={styles.header}>
      <a
        href="#section-inicio"
        onClick={(e) => scrollToSection(e)}
        className={styles.logo}
      ></a>
      <nav>
        <ul>
          <li>
            <a href="#section-inicio" onClick={(e) => scrollToSection(e)}>
              INICIO
            </a>
          </li>
          <li>
            <a href="#section-nosotros" onClick={(e) => scrollToSection(e)}>
              NOSOTROS
            </a>
          </li>
          <li>
            <a href="#section-servicios" onClick={(e) => scrollToSection(e)}>
              SERVICIOS
            </a>
          </li>
          <li>
            <a href="#section-contacto" onClick={(e) => scrollToSection(e)}>
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="#section-contacto"
        onClick={(e) => scrollToSection(e)}
        className={styles.solicitarServicio}
      >
        SOLICITAR SERVICIO
      </a>
    </header>
  );
}
