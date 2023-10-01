import styles from "./Card.module.css";

export default function App(props) {
  return (
    <article
      style={
        props.imagen
          ? {
              backgroundImage: `url(${props.imagen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
