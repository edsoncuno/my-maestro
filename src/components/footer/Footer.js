"use client";
import styles from "./Footer.module.css";

export default function App() {
  return (
    <footer className={styles.footer}>
      <div className={styles.enlacesInternos}>
        <h3>Navegación</h3>
        <ul>
          <li>
            <a href="#section-inicio">Inicio</a>
          </li>
          <li>
            <a href="#section-nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#section-servicios">Servicios</a>
          </li>
          <li>
            <a href="#section-contacto">Contacto</a>
          </li>
        </ul>
      </div>
      <div className={styles.informacionDeContacto}>
        <h3>Información de contacto</h3>
        <ul>
          <li>Dirección:</li>
          <li>Número de teléfono:</li>
          <li>Correo electrónico:</li>
        </ul>
      </div>
      <div className={styles.redesSociales}>
        <h3>Síguenos en redes sociales</h3>
        <ul>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoFacebook}
            />
          </li>
        </ul>
      </div>
      <div className={styles.textoDeCopyright}>
        <p>Derechos de autor &copy; 2023. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
