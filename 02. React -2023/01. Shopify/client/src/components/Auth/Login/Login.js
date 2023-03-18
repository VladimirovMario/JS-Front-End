import styles from '../Register/Register.module.css'

export default function Login () {
    return(
        <section className="section">
        <h2 className="section-title">Sign In</h2>
        <div className="section-divider"></div>

        <div className={`${styles["login"]} action-container`}>           
            <div className={styles["login-img-wrapper"]}>
                <img className={styles["login-img"]} src="/static/images/register-login.jpg" alt="login.jpg" />
            </div>

            <form className={styles["login-form"]}>
                <h3 className={styles["form-container-title"]}>Welcome back</h3>
                
                {/* <!-- Inputs --> */}
                <div className={styles["input-login"]}>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input className={styles["email"]} type="email" id="email" name="email" placeholder="peter@abv.bg" />
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

                    <button className={"form-btn btn"}>Sign in</button>
                </div>

            </form>
        </div>
    </section>
    );
}