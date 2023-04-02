export const formValidations = (e) => {
  const errors = {};
  const target = e.target.name;
  const value = e.target.value;
  const emailRegex =
    /(?<!\S)[A-Za-z]+(\.|-|_)?[A-Za-z]+@[A-Z-a-z]+\.[A-Z-a-z]+(\.[A-Z-a-z]*\.?)?\b/;

  const imageRegex = /^https?:\/\/.+$/i;

  // User validations
  if (target === "email" && emailRegex.test(value) === false) {
    errors.email = "must be valid address format!";
  }

  if (target === "username" && value.length < 3) {
    errors.username = "should be at least 3 characters long";
  }

  if (target === "password" && value.length < 3) {
    errors.password = "should be at least 3 characters long";
  }

  if (target === "repass" && value === "") {
    errors.repass = "don't match with password";
  }

  // Product validations
  if (target === "title" && value.length < 3) {
    errors.title = "should be at least 3 characters";
  }

  if (target === "genre" && value.length < 3) {
    errors.genre = "should be at least 3 characters";
  }

  if (target === "price" && Number(value) < 0.01) {
    errors.price = "must be a positive number";
  }

  if (target === "imageUrl" && imageRegex.test(value) === false) {
    errors.imageUrl = "should starts with http or https";
  }

  if (target === "description" && (value.length < 4 || value.length > 1400)) {
    errors.description = "should be between 4 and 1400 characters";
  }

  return errors;
};
