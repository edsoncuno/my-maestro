import styles from "./Inicio.module.css";

export default function App() {
  return (
    <section id="section-inicio" className={styles.app}>
      <div className={styles.container}>
        <div className={styles.carrusel}></div>
        <div className={styles.texto}>
          <h1 className={styles.titulo}>My Maestro</h1>
          <p className={styles.parrafo}>
            Reparaciones e instalaciones con experiencia y dedicación
          </p>
        </div>
      </div>
    </section>
  );
}
