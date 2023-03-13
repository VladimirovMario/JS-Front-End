export const formValidations = (e) => {
  // TODO expand the validation cases

  const value = e.target.value;
  const errors = {};

  // if (e.target.name === "firstName" && (value.length < 3 || value.length > 15)) {
  //   errors.firstName = "First name should be between 3 and 15 characters!";
  // }

  // if (e.target.name === "lastName" && (value.length < 3 || value.length > 15)) {
  //   errors.lastName = "Last name should be between 3 and 15 characters!";
  // }

  if (value.length < 3 || value.length > 15) {
    errors[e.target.name] = `${e.target.name} should be between 3 and 15 characters!`;
  }

  //   console.log(errors);
  return errors;
};
