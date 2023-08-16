import Inicio from "../components/Inicio";
import Nosotros from "../components/Nosotros";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";

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
