import styles from "./Profile.module.css";

// TODO fix the hole profile
export default function Profile() {
  return (
    <section className="section">
      <h2 className="section-title">Full Profile Information</h2>
      <div className="section-divider"></div>

      <article className={`${styles["profile-card"]} action-container`}>
        <article className={styles["profile-card-info"]}>
          <h2>Username: Peter</h2>
          <h3>Address: 2572 Orphan Road</h3>
          {/* <!--If the user has shared publications, separate their titles with a comma and a space (, )--> */}
          <h4>Titles of shared posts by the user: </h4>
          {/* <!--If not display:--> */}
          {/* <!--<h4>Titles of shared posts by the user: Not yet.</h4>--> */}

          {/* <!--If the user has created their own publications, separate their titles with a comma and a space (, )--> */}
          <h4>Titles of which the user is the author:</h4>
          {/* <!--If not display:--> */}
          {/* <!--<h4>Titles of which the user is the author: Not yet.</h4>--> */}
        </article>
        <article className={styles["profile-card-icon"]}>
          <img src="static/images/vip-user.png" alt="vip-user.png" />
        </article>
      </article>
    </section>
  );
}
