import Card from "./Card";

export default function App() {
  let servicios = [
    { imagen: "", nombre: "techos" },
    { imagen: "", nombre: "vigas" },
    { imagen: "", nombre: "columnas" },
    { imagen: "", nombre: "pared" },
    { imagen: "", nombre: "tarrajeo" },
    { imagen: "", nombre: "zapatas" },
    { imagen: "", nombre: "pisos" },
    { imagen: "", nombre: "agua y desague" },
    { imagen: "", nombre: "termas" },
    { imagen: "", nombre: "electricidad" },
    { imagen: "", nombre: "mayolica" },
    { imagen: "", nombre: "porcelanato" },
    { imagen: "", nombre: "drywall" },
    { imagen: "", nombre: "techados de eternit" },
  ];

  const listaServicios = servicios.map((servicio) => (
    <li key={"id"+servicio.nombre}>{servicio.nombre}</li>
  ));

  //<ul>{listaServicios}</ul>
  return (
    <section id="section-servicios">
      <h2>Servicios</h2>
      <ul>{listaServicios}</ul>
      <Card nombre={"asd"} imagen={"https://static.wikia.nocookie.net/waifuism/images/5/5d/Chiaki_smile.png/revision/latest?cb=20190716061913"}/>
    </section>
  );
}
