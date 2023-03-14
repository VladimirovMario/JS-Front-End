import styles from "./Navigation.module.css";

export const Navigation = ({ children }) => {
  // console.log(children);
  return (
    <nav className={styles.nav}>
        <ul>
            {children}
        </ul>
    </nav>
  );
};
