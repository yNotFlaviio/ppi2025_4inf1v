import styles from "./MyText.module.css";

export function MyText() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>Meu primeiro React App</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos
          excepturi ea enim odit vel et quia doloremque, nam accusantium eum
          blanditiis debitis natus inventore laborum magnam ipsum tempore
          itaque?
        </p>
      </div>
    </div>
  );
}
