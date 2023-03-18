import DetailsComments from "../DetailsComments/DetailsComments";
import styles from "./DetailsCommentsList.module.css";

export default function DetailsCommentsList() {
  return (
    <div className={styles["details-comments"]}>
      <h2 className={styles["comments-title"]}>Comments</h2>
      <div className="section-divider"></div>

      {/* <!-- Details Comments List component --> */}
      <DetailsComments />
      <DetailsComments />


    </div>
  );
}
