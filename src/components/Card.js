import styles from "./Card.module.css";

export default function App(props) {
  return (
    <div
      className={styles.card}
      style={
        props.imagen
          ? { background: `url(${props.imagen})` }
          : { backgroundColor: "grey" }
      }
    >
      {props.nombre}
    </div>
  );
}
