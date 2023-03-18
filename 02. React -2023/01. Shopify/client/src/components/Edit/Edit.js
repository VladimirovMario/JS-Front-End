import styles from '../Create/Create.module.css'

export default function Edit () {
    return (
        <section className="section">
        <h2 className="section-title">Edit product</h2>
        <div className="section-divider"></div>

        <div className={"action-container"}>

            <div className={styles["edit-img-wrapper"]}>
                <img className={styles["create-edit-img"]} src={"/static/images/edit-product.jpg"} alt="edit-product.jpg" />
            </div>

            <form className={styles["form-container"]}>
                <h3 className={styles["form-container-title"]}>Edit Publication</h3>
                <p className={styles["form-container-desc"]}>Edit your own masterpiece!</p>

                {/* <!-- Inputs --> */}
                <div className={styles["input-wrapper"]}>
                    <div className={styles["rows-aligned"]}>
                        <label className={styles["vertical"]} htmlFor="title">
                            <span>Title</span>
                            <input className={styles["input-title"]} type="text" id="title" name="title"
                                placeholder="Grand Theft Auto V" />
                        </label>
                        <label htmlFor="genre">
                            <span>Genre</span>
                            <input className={styles["input-genre"]} type="text" id="genre" name="genre" placeholder="Action" />
                        </label>
                        <label htmlFor="price">
                            <span>Price</span>
                            <input className={styles["input-price"]} type="number" id="price" name="price" />
                        </label>
                        <label htmlFor="imageUrl">
                            <span>Image Url</span>
                            <input className={styles["input-img-url"]} type="text" id="imageUrl" name="imageUrl"
                                placeholder="https://" />
                        </label>
                    </div>

                    {/* <!-- text area --> */}
                    <div className={styles["align-center"]}>
                        <label htmlFor="description">
                            <span>Description</span>
                            <textarea className={styles["description"]} name="description" cols="40" rows="4"
                                placeholder="Grand Theft Auto (usually abbreviated GTA) is a series of games that incorporate driving and action gameplay styles."></textarea>
                        </label>
                        <div className={styles["align-center-action"]}>
                            <input className={"action-bnt edit-btn btn"} type="submit" value="Edit" />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </section>
    );
}