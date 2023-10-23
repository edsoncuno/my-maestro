import styles from "./Contacto.module.css";
import Mapa from "./Mapa";

export default function App() {
  return (
    <section id="section-contacto" className={styles.app}>
      <h2 className={styles.titulo}>Contacto</h2>
      <div className={styles.mapa}>
        <Mapa />
      </div>
      <div className={styles.datos}>
        <div className={styles.fila}>
          <div className={styles.facebook}></div>
          <div>Facebook</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.whatsapp}></div>
          <div>Whatsapp: 999-999-999</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.call}></div>
          <div>Telefono: 999-999-999</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.direccion}></div>
          <div>Direccion</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.correo}></div>
          <div>Correo: correo@gmail.com</div>
        </div>
      </div>
    </section>
  );
}
