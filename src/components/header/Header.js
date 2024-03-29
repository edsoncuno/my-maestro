"use client";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export default function App() {
  const [isShowingSideBar, setIsShowingSideBar] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const sections = [
    { href: "#section-inicio", name: "INICIO" },
    { href: "#section-nosotros", name: "NOSOTROS" },
    { href: "#section-servicios", name: "SERVICIOS" },
    { href: "#section-contacto", name: "CONTACTO" },
  ];

  const list = sections.map((item) => (
    <li key={"id_" + item.name}>
      <a href={item.href} onClick={(e) => scrollToSection(e)}>
        {" "}
        {item.name}
      </a>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    //if (typeof window !== "undefined") {}
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
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
      style={{
        boxShadow:
          isScrolling || windowWidth <= 750
            ? "0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.1)"
            : "none",
        backgroundColor:
          isScrolling || windowWidth <= 750 ? "white" : "transparent",
      }}
    >
      <div className={styles.bars} onClick={handleSideBar}></div>
      <a
        href="#section-inicio"
        onClick={(e) => scrollToSection(e)}
        className={styles.logo}
      ></a>
      <nav
        className={`${isShowingSideBar ? styles.open : ""}`}
        style={{
          backgroundColor: windowWidth <= 750 ? "white" : "transparent",
        }}
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
