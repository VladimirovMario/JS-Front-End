import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
  const [values, setValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (onSubmitHandler) {

      if (Object.values(values).every((v) => v.trim() !== ``)) {
        // console.log("useForm hook", values);
        onSubmitHandler(values);
        values.email = ''
        values.password = ''
      } else {
        alert("All fields are required!");
      }
    }
  };

  return {
    values,
    onChangeHandler,
    onSubmit,
  };
};
