import styles from "./Welcome.module.css";
export default function Welcome({ todoItems }) {
  return (
    todoItems.length === 0 && (
      <h3 className={styles.welcome}>Congrates! No work left</h3>
    )
  );
}
