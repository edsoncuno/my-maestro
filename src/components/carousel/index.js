"use client";
import styles from "./carousel.module.css";
import { useEffect, useRef } from "react";

export default function App(props) {
  const sliderRef = useRef(null);

  const mover = () => {
    const slider = sliderRef.current;
    slider.style.transition = "all 0.5s ease";
    slider.style.marginLeft = "-100%";

    setTimeout(() => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = "all 0s";
      slider.style.marginLeft = "unset";
    }, 1000);
  };

  useEffect(() => {
    const intervalId = setInterval(mover, 2500);
    return () => clearInterval(intervalId);
  }, []);

  //<div className={`${styles.slide} ${styles.imagen3}`}></div>

  const slides = props.slides.map((item) => (
    <div
      key={"id_" + item}
      style={{
        width: "100%",
        height: props.height,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${item})`,
      }}
    ></div>
  ));

  return (
    <div
      className={styles.app}
      style={{ width: props.width, overflow: "hidden" }}
    >
      <div
        className={styles.slider}
        ref={sliderRef}
        style={{
          width: `calc(${"100%"} * ${props.slides.length})`,
          display: "flex",
        }}
      >
        {slides}
      </div>
    </div>
  );
}
