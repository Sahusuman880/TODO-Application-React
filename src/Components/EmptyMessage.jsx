import styles from "./EmptyMessage.module.css";
function EmptyMessage(props) {
  return (
    <p className={styles.deleteButton}>
      {props.todo.length === 0 ? "Add Some Todo Item" : null}
    </p>
  );
}
export default EmptyMessage;
