import Card from "./Card";

import styles from "./Servicios.module.css";

export default function App() {
  let servicios = [
    { imagen: "https://i.postimg.cc/sD31TZ1V/techos2.jpg", nombre: "Techos" },
    { imagen: "https://i.postimg.cc/Y2JbFbs4/vigas1.jpg", nombre: "Vigas" },
    { imagen: "https://i.postimg.cc/HWKbKnwF/columna1.jpg", nombre: "Columnas" },
    { imagen: "https://i.postimg.cc/DZN4tpX1/paredes1.webp", nombre: "Pared" },
    { imagen: "https://i.postimg.cc/QCWKsgQw/tarrajeo.jpg", nombre: "Tarrajeo" },
    { imagen: "https://i.postimg.cc/44KWnrBk/zapata1.jpg", nombre: "Zapatas" },
    { imagen: "https://i.postimg.cc/bwfky5FT/piso1.jpg", nombre: "Pisos" },
    { imagen: "https://i.postimg.cc/43Jct9GH/agua-desague1.png", nombre: "Agua y Desague" },
    { imagen: "https://i.postimg.cc/6TJ2Q7z3/terma1.png", nombre: "Termas" },
    { imagen: "https://i.postimg.cc/W1mrh7BP/electricidad1.jpg", nombre: "Electricidad" },
    { imagen: "https://i.postimg.cc/vT1fTwsP/mayolica1.jpg", nombre: "Mayólica" },
    { imagen: "https://i.postimg.cc/9M0qgHrW/porcelanato1.jpg", nombre: "Porcelanato" },
    { imagen: "https://i.postimg.cc/ZKd6hmjn/drywall1.jpg", nombre: "Drywall" },
    { imagen: "https://i.postimg.cc/Y0JgmD2t/eternit1.webp", nombre: "Techados de Eternit" },
  ];

  const listaDeServicios = servicios.map((item) => (
    <div key={"id_" + item.nombre} className={styles.feature}>
      <Card nombre={item.nombre} imagen={item.imagen} />
    </div>
  ));

  return (
    <section id="section-servicios" className={styles.app}>
      <h2 className={styles.titulo}>Servicios</h2>
      <div className={styles.galery}>
        {listaDeServicios}
      </div>
    </section>
  );
}
