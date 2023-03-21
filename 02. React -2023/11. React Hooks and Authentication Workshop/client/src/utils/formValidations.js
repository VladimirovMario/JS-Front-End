export const formValidations = (e) => {
  const value = e.target.value;
  const errors = {};

  if (e.target.name === "maxLevel" && Number(value) < 1) {
    errors[e.target.name] = `${e.target.name} must be a positive number!`;
  } else if (value.length < 3 || value.length > 30) {
    errors[e.target.name] = `${e.target.name} should be between 3 and 30 characters!`;
  }

  return errors;
};

// export const formValidationsOnSubmit = (data) => {
//   if (Object.values(data).every((x) => x !== "") === false) {
//     return console.error("All fields are required!");
//   }
// };
