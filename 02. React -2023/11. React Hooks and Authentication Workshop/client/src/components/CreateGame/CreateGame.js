import { useState } from "react";

import { useForm } from "../../hooks/useForm";

import { formValidations } from "../../utils/formValidations";

export const CreateGame = ({ onCreateGameSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      title: "",
      category: "",
      maxLevel: "",
      imageUrl: "",
      summary: "",
    },
    onCreateGameSubmit
  );

  const [formErrors, setFormErrors] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  const validateForm = (e) => {
    const errors = formValidations(e);
    setFormErrors(errors);
    // console.log(errors);
  };

  return (
    <section id="create-page" className="auth">
      <form id="create" method="post" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Game</h1>
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
            value={values.title}
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
            onBlur={validateForm}
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
            value={values.imageUrl}
            onChange={changeHandler}
            onBlur={validateForm}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={values.summary}
            onChange={changeHandler}
            onBlur={validateForm}
          ></textarea>
          <input className="btn submit" type="submit" value="Create Game" />
        </div>
      </form>
    </section>
  );
};
