import { Fragment } from "react";
import styles from "./DetailsComments.module.css";

export default function DetailsComments() {
  return (
    <Fragment>
      <article className={styles["content-publication"]}>
        <div className={styles["author-wrapper"]}>
          <div className={styles["author-img-wrapper"]}>
            <img className={styles["author-img"]} src={'/static/images/vip-user.png'} alt="" />
          </div>
          <p className={styles["author-name"]}>Peter</p>
        </div>
        <div className={styles["publication-wrapper"]}>
          <h3 className={styles["publication-title"]}>Subject: Gta V</h3>
          <p className={styles["publication-desc"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quae
            magnam quo error ratione ducimus fugiat voluptatum, voluptatibus
            officiis iste, laudantium soluta? Rem eveniet aliquam iusto ad a
            officia quae?
          </p>
        </div>
      </article>

      {/* <!-- If there are no publications yet. --> */}
      {/* <article className={styles["content-publication"]}>
        <h3 className={styles["no-publication-title"]}>There are no publications yet.</h3>
      </article> */}
    </Fragment>
  );
}
