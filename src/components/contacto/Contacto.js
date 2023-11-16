import styles from "./Contacto.module.css";
import Mapa from "./Mapa";

export default function App() {
  const whatsapp = 987987987;
  const link_facebook = "Alex Cuno";
  const telefono = 987987987;
  const direccion = "Av. Rio Perene 711 Sol de Vitarte";
  const correoElectronico = "edson.cuno.122@outlook.com";

  return (
    <section id="section-contacto" className={styles.app}>
      <h2 className={styles.titulo}>Contacto</h2>
      <div className={styles.mapa}>
        <Mapa />
      </div>
      <div className={styles.datos}>
        <div className={styles.fila}>
          <div className={styles.facebook}></div>
          <div className={styles.valor}>Facebook</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.whatsapp}></div>
          <div className={styles.valor}>{whatsapp}</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.call}></div>
          <div className={styles.valor}>{telefono}</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.direccion}></div>
          <div className={styles.valor}>{direccion}</div>
        </div>
        <div className={styles.fila}>
          <div className={styles.correo}></div>
          <div className={styles.valor}>{correoElectronico}</div>
        </div>
      </div>
    </section>
  );
}
