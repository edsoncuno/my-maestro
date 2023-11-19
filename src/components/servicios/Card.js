import styles from "./Card.module.css";

export default function App(props) {
  return (
    <article className={styles.app}>
      <div
        style={
          props.imagen
            ? {
                backgroundImage: `url(${props.imagen})`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : { backgroundColor: "grey" }
        }
        className={styles.imagen}
      ></div>
      <div className={styles.texto}>
        <div className={styles.nombre}>{props.nombre}</div>
        <div className={styles.descripcion}>{props.descripcion}</div>
      </div>
    </article>
  );
}
