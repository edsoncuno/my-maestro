import Inicio from "../components/inicio/Inicio";
import Nosotros from "../components/nosotros/Nosotros";
import Contacto from "../components/contacto/Contacto";
import Servicios from "../components/servicios/Servicios";

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
