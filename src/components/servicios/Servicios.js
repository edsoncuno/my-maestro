import Card from "./Card";

import styles from "./Servicios.module.css";

export default function App() {
  let servicios = [
    { imagen: "./servicios/techos2.jpg", nombre: "Techos" },
    { imagen: "./servicios/vigas1.jpg", nombre: "Vigas" },
    { imagen: "./servicios/columna1.jpg", nombre: "Columnas" },
    { imagen: "./servicios/paredes1.webp", nombre: "Pared" },
    { imagen: "./servicios/tarrajeo.jpg", nombre: "Tarrajeo" },
    { imagen: "./servicios/zapata1.jpg", nombre: "Zapatas" },
    { imagen: "./servicios/piso1.jpg", nombre: "Pisos" },
    { imagen: "./servicios/agua_desague1.png", nombre: "Agua y Desague" },
    { imagen: "./servicios/terma1.png", nombre: "Termas" },
    { imagen: "./servicios/electricidad1.jpg", nombre: "Electricidad" },
    { imagen: "./servicios/mayolica1.jpg", nombre: "Mayólica" },
    { imagen: "./servicios/porcelanato1.jpg", nombre: "Porcelanato" },
    { imagen: "./servicios/drywall1.jpg", nombre: "Drywall" },
    { imagen: "./servicios/eternit1.webp", nombre: "Techados de Eternit" },
  ];

  const listaDeServicios = servicios.map((item) => (
    <div key={"id_" + item.nombre} className={styles.feature}>
      <Card nombre={item.nombre} imagen={item.imagen} />
    </div>
  ));

  return (
    <section id="section-servicios" className={styles.app}>
      <h2 className={styles.titulo}>Servicios</h2>
      <div className={styles.galery}>{listaDeServicios}</div>
    </section>
  );
}
