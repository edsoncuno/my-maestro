import styles from "./Footer.module.css";

export default function App() {
  const link_facebook = "https://facebook.com";
  const telefono = 987987987;
  const direccion = "Av. Rio Perene 711 Sol de Vitarte";
  const correoElectronico = "edson.cuno.122@outlook.com";

  return (
    <footer className={styles.app}>
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
          <li>Dirección: {direccion}</li>
          <li>Número de teléfono: {telefono}</li>
          <li>Correo electrónico: {correoElectronico}</li>
        </ul>
      </div>
      <div className={styles.redesSociales}>
        <h3>Síguenos en redes sociales</h3>
        <ul>
          <li>
            <a href={link_facebook} target="_blank" rel="noopener noreferrer">
              <div className={styles.logoFacebook}></div>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.textoDeCopyright}>
        <p>Derechos de autor &copy; 2023. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
