import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { useForm } from "../../hooks/useForm";

import { Link } from "react-router-dom";

export const Register = () => {
  const { registerSubmit } = useContext(AuthContext);

  const { values, onChangeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      "confirm-password": "",
    },
    registerSubmit
  );

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="maria@email.com"
            name="email"
            value={values.email}
            onChange={onChangeHandler}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="register-password"
            name="password"
            value={values.password}
            onChange={onChangeHandler}
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={values["confirm-password"]}
            onChange={onChangeHandler}
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
