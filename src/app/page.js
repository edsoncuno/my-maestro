import Inicio from "../components/inicio/Inicio";
import Nosotros from "../components/nosotros/Nosotros";
import Servicios from "../components/servicios/Servicios";
import Contacto from "../components/contacto/Contacto";

export default function Home() {
  return (
    <main>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Contacto />
    </main>
  );
}
