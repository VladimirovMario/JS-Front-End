import styles from "./CommentCreate.module.css";

export default function CommentCreate() {
  return (
    <section className="section">
      <h2 className={"section-title"}>Create Comment</h2>
      <div className={"section-divider"}></div>

      <div className={styles["create-comment"]}>
        <div className={styles["form-wrapper"]}>
          <form className={styles["form"]} action="post">
          
              <label htmlFor="genre">
                <span className={styles["input-title"]}>Subject</span>
                <input
                  className={styles["input-subject"]}
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                  //   value={values.subject}
                  //   onChange={onChangeHandler}
                />
              </label>
                 
              <label htmlFor="content">
                <span className={styles["input-title"]}>Content</span>
                <textarea
                  className={styles["message"]}
                  cols="40"
                  rows="4"
                  placeholder="Sure, feel free to enter your comment!"
                  name="content"
                  //   value={values.content}
                  //   onChange={onChangeHandler}
                ></textarea>
              </label>
         
            <button className={"action-bnt create-btn btn"}>
              Send Comment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
