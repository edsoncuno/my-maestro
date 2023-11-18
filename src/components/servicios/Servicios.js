import Card from "./Card";

import styles from "./Servicios.module.css";

export default function App() {
  let servicios = [
    {
      imagen: "./servicios/techos2.jpg",
      nombre: "Techos",
      descripcion:
        "Construimos techos que protegen tu hogar con excelencia.",
    },
    {
      imagen: "./servicios/vigas1.jpg",
      nombre: "Vigas",
      descripcion:
        "Instalación de vigas para estructuras sólidas y visualmente atractivas.",
    },
    {
      imagen: "./servicios/columna1.jpg",
      nombre: "Columnas",
      descripcion:
        "Construimos columnas que elevan la arquitectura de tu espacio.",
    },
    {
      imagen: "./servicios/paredes1.webp",
      nombre: "Pared",
      descripcion:
        "Expertos en construcción y acabado para un hogar elegante y acogedor.",
    },
    {
      imagen: "./servicios/tarrajeo.jpg",
      nombre: "Tarrajeo",
      descripcion:
        "Servicios de tarrajeo para paredes lisas y estéticamente atractivas en tu hogar.",
    },
    {
      imagen: "./servicios/zapata1.jpg",
      nombre: "Zapatas",
      descripcion:
        "Construimos estabilidad con precisión en la instalación de zapatas para tu proyecto.",
    },
    {
      imagen: "./servicios/piso1.jpg",
      nombre: "Pisos",
      descripcion:
        "Transforma tu espacio con nuestros servicios profesionales de instalación de pisos.",
    },
    {
      imagen: "./servicios/agua_desague1.png",
      nombre: "Agua y Desague",
      descripcion:
        "Servicios de agua y desagüe para un hogar sin preocupaciones.",
    },
    {
      imagen: "./servicios/terma1.png",
      nombre: "Termas",
      descripcion:
        "Instalación de termas para un confort continuo en tu hogar.",
    },
    {
      imagen: "./servicios/electricidad1.jpg",
      nombre: "Electricidad",
      descripcion: "Servicios eléctricos para un hogar eficiente y seguro.",
    },
    {
      imagen: "./servicios/mayolica1.jpg",
      nombre: "Mayólica",
      descripcion:
        "Mayólica, la elección perfecta para tus espacios cautivadores.",
    },
    {
      imagen: "./servicios/porcelanato1.jpg",
      nombre: "Porcelanato",
      descripcion:
        "Instalación porcelanato para durabilidad y elegancia en cada espacio.",
    },
    {
      imagen: "./servicios/drywall1.jpg",
      nombre: "Drywall",
      descripcion: "Instalación de drywall para un hogar elegante y funcional.",
    },
    {
      imagen: "./servicios/eternit1.webp",
      nombre: "Techados de Eternit",
      descripcion:
        "Expertos en techados de Eternit para seguridad y resistencia sin igual.",
    },
  ];

  const listaDeServicios = servicios.map((item) => (
    <div key={"id_" + item.nombre} className={styles.feature}>
      <Card
        nombre={item.nombre}
        imagen={item.imagen}
        descripcion={item.descripcion}
      />
    </div>
  ));

  return (
    <section id="section-servicios" className={styles.app}>
      <h2 className={styles.titulo}>Servicios</h2>
      <div className={styles.galery}>{listaDeServicios}</div>
    </section>
  );
}
