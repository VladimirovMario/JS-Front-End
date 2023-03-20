import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
  const [formValues, setFormValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (onSubmitHandler) {
      
      if (Object.values(formValues).every((v) => v.trim() !== ``)) {
        onSubmitHandler(formValues);

        console.log(formValues);
        formValues.text = "";
      } else {
        alert("Please fill all the fields!");
      }
    }
  };

  return { formValues, onChangeHandler, onSubmit };
};
