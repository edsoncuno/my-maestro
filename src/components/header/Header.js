"use client";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function App() {
  const [isShowingSideBar, setIsShowingSideBar] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const sections = [
    { href: "#section-inicio", name: "INICIO" },
    { href: "#section-nosotros", name: "NOSOTROS" },
    { href: "#section-servicios", name: "SERVICIOS" },
    { href: "#section-contacto", name: "CONTACTO" },
  ];

  const list = sections.map((item) => (
    <li key={"id_" + item.name}>
      <a href={item.href} onClick={(e) => scrollToSection(e)}>
        {item.name}
      </a>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Limpia el listener del evento cuando el componente se desmonta
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    setIsShowingSideBar(false);
  }

  function handleSideBar() {
    setIsShowingSideBar(!isShowingSideBar);
  }

  return (
    <header
      className={styles.header}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className={styles.bars} onClick={handleSideBar}></div>
      <a
        href="#section-inicio"
        onClick={(e) => scrollToSection(e)}
        className={styles.logo}
      ></a>
      <nav
        className={`${isShowingSideBar ? styles.open : ""}`}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <ul>{list}</ul>
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
