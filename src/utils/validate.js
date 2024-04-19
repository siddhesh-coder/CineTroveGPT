let currPassword;
const emailValidation = (email) => {
  const validEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(email);

  if (!validEmail) {
    return "Please check your email";
  }
  return null;
};

const passwordValidation = (password) => {
  currPassword = password;
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validPassword) return "Please check your password";

  return null;
};

const confirmPasswordValidation = (confirmPassword) => {
  const validConfirmPassword = currPassword === confirmPassword;

  if (!validConfirmPassword) return "password mismatch";

  return null;
};

export { emailValidation, passwordValidation, confirmPasswordValidation };
