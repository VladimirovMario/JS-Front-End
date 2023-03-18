import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <!-- Site Logo --> */}
      <ul>
        <li>
          <a href="/">
            <img
              className={styles.logo}
              src="static/shopping-logo.png"
              alt="logo"
            />
          </a>
        </li>
      </ul>

      {/* <!-- Navigation --> */}
      <nav className={styles["header-nav"]}>
        <ul className={styles["nav-ul"]}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catalog">Explore</a>
          </li>

          {/* <!-- Logged users --> */}
          <li>
            <a href="/create">Create Publication</a>
          </li>
          <li>
            <a href="/auth/profile">Profile</a>
          </li>
          <li>
            <a href="/auth/logout">Logout</a>
          </li>
          {/* <!-- Guest users --> */}
          <li>
            <a href="/auth/login">Login</a>
          </li>
          <li>
            <a href="/auth/register">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
