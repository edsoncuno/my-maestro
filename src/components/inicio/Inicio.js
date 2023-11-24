import styles from "./Inicio.module.css";

export default function App() {
  //<div className={`${styles.slide} ${styles.imagen3}`}></div>
  return (
    <section id="section-inicio" className={styles.app}>
      <div className={styles.redesSociales}>
        <ul>
          <li>
            <a
              href="www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebook}
            ></a>
          </li>
          <li>
            <a
              href="www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            ></a>
          </li>
        </ul>
      </div>
    </section>
  );
}
