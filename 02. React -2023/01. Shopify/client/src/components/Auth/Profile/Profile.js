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
          <h3>Email: Peter@abv.bg</h3>
          {/* <!--If the user has shared publications, separate their titles with a comma and a space (, )--> */}
          <h4>Titles of shared posts by the user: </h4>
          {/* <!--If not display:--> */}
          {/* <!--<h4>Titles of shared posts by the user: Not yet.</h4>--> */}

          {/* <!--If the user has created their own publications, separate their titles with a comma and a space (, )--> */}
          <h4>Titles of which the user is the author:</h4>
          {/* <!--If not display:--> */}
          {/* <!--<h4>Titles of which the user is the author: Not yet.</h4>--> */}
        </article>

        <div className={styles["profile-card-icon"]}>
          <img src="/static/images/vip-user.png" alt="vip-user.png" />
        </div>
      </article>

      <div className={styles["product-wrapper"]}>
        <ul className={styles["product-ul"]}>
          <li>
            <article className={styles["card"]}>
              <div className={styles["thumbnail"]}>
                <img
                  className={styles["thumbnail-img"]}
                  src="http://localhost:3000/static/images/ps4/grand-theft-auto-v.jpg"
                  alt="Unsplash img"
                />
              </div>

              <div className={styles["content"]}>
                <h3 className={styles["content-title"]}>Grand Theft Auto V</h3>
                <div className={styles["icon-wrapper"]}>
                  <p className={styles["content-price"]}>30$</p>

                  <div className={styles["icon-btn"]}>
                    <button className={`${styles["shopping-icon"]} btn`}>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
