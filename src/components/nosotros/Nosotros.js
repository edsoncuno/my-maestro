import styles from "./Nosotros.module.css";
import Carousel from "./../carousel";

export default function App() {
  return (
    <section id="section-nosotros" className={styles.app}>
      <div className={styles.container}>
        <div className={styles.texto}>
          <h2>Nosotros</h2>
          <p>
            "Somos un equipo de expertos en construcción y renovación de hogares
            comprometidos a brindarte una experiencia única y satisfactoria.
            Desde pequeñas reparaciones hasta proyectos de construcción
            personalizados, trabajamos incansablemente para convertir tus ideas
            en realidad y lograr un resultado que eleve la belleza y
            funcionalidad de tu hogar a nuevas alturas."
          </p>
        </div>
        <div className={styles.imagen}>
          <Carousel
            slides={[
              "./nosotros_assets/imagen1.jpg",
              "./nosotros_assets/imagen2.png",
              "./nosotros_assets/imagen3.jpg",
            ]}
            width={"100%"}
            height={"72vh"}
          />
        </div>
      </div>
    </section>
  );
}
