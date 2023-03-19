import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <!-- Site Logo --> */}
      <ul>
        <li>
          <Link to={"/"}>
            <img className={styles.logo} src="static/shopping-logo.png" alt="logo"/>
          </Link>
        </li>
      </ul>

      {/* <!-- Navigation --> */}
      <nav className={styles["header-nav"]}>
        <ul className={styles["nav-ul"]}>
          
          {/* Main links */}
          <div className={styles["main-links"]}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/catalog"}>Explore</Link></li>
          </div>

          {/* <!-- Logged users --> */}
          <div className={styles["user-links"]}>
            <li><Link to={"/create-product"}>Create Publication</Link></li>
            <li><Link to={"/auth/profile"}>Profile</Link></li>
            <li><Link to={"/auth/logout"}>Logout</Link></li>
          </div>

          {/* <!-- Guest users --> */}
          <div className={styles["guest-links"]}>
            <li><Link to={"/auth/login"}>Login</Link></li>
            <li><Link to={"/auth/register"}>Register</Link></li>
          </div>

        </ul>
      </nav>
    </header>
  );
}
