import styles from './Register.module.css'

export default function Register () {
    return (
    <section className="section">
        <h2 className="section-title">Sign Up</h2>
        <div className="section-divider"></div>

        <div className={`${styles["register"]} action-container`}>           
            <div className={styles["register-img-wrapper"]}>
                <img className={styles["register-img"]} src="/static/images/register-login.jpg" alt="register.jpg" />
            </div>

            <form className={styles["register-form"]}>
                <h3 className={styles["form-container-title"]}>Create your account today</h3>

                {/* <!-- Inputs --> */}
                <div className={styles["input-register"]}>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input className={styles["email"]} type="email" id="email" name="email" placeholder="peter@abv.bg" />
                    </label>

                    <label htmlFor="username">
                        <span>Username</span>
                        <input className={styles["username"]} type="text" id="username" name="username" placeholder="Peter" />
                    </label>

                    <label htmlFor="tel">
                        <span>Telephone</span>
                        <input className={styles["tel"]} type="text" id="tel" name="tel" placeholder="+359885888888" />
                    </label>

                    <label htmlFor="password">
                        <span>Password</span>
                        <input className={styles["password"]} type="password" id="password" name="password"
                            placeholder="*****" />
                    </label>

                    <label htmlFor="repass">
                        <span>Repeat</span>
                        <input className={styles["repass"]} type="password" id="repass" name="repass" placeholder="*****" />
                    </label>

                    <button className={"form-btn btn"}>Sign Up</button>
                </div>

            </form>
        </div>
    </section>
    );
}