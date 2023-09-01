import styles from "./Card.module.css";

export default function App(props) {
  return (
    <article
      style={
        props.imagen
          ? {
              background: `url(${props.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { backgroundColor: "grey" }
      }
      className={styles.app}
    >
      <div></div>
      <div className={styles.name}>{props.nombre}</div>
    </article>
  );
}
