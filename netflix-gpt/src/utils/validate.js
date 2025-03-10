export const checkValidateData = (email, password) => {
  const isEMailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!isEMailValid) {
    return "Email is invalid";
  }

  if (!isPasswordValid) {
    return "Password is invalid";
  }

  return null;
};
