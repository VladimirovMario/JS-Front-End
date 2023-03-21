import { useState } from "react";
import { formValidations } from "../../utils/formValidations";

export const CreateGame = ({ onCreateGameSubmit }) => {
  const [values, setValues] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  const [formErrors, setFormErrors] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  const onChangeHandler = (e) => {
      setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateGameSubmit(values);
  };

  const validateForm = (e) => {
    const errors = formValidations(e);
    setFormErrors(errors);
    // console.log(errors);
  }

  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            value={values.title}
            onChange={onChangeHandler}
            onBlur={validateForm}
          />
          {formErrors && <p>{formErrors.title}</p>}
          

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
            value={values.category}
            onChange={onChangeHandler}
            onBlur={validateForm}
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
            value={values.maxLevel}
            onChange={onChangeHandler}
            onBlur={validateForm}
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={values.imageUrl}
            onChange={onChangeHandler}
            onBlur={validateForm}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={onChangeHandler}
            onBlur={validateForm}
          ></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
};
