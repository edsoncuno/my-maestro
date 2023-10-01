import Inicio from "../components/inicio/Inicio";
import Nosotros from "../components/nosotros/Nosotros";
import Servicios from "../components/servicios/Servicios";
import Contacto from "../components/contacto/Contacto";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Contacto />
    </main>
  );
}
