export const formValidations = (e) => {
  const errors = {};
  const value = e.target.value;
  const target = e.target.name;

  if (target === "email" && value === "") {
    errors.email = "All fields are required!";
  }

  if (target === "password" && value === "") {
    errors.password = "All fields are required!";
  }

  return errors;
};
