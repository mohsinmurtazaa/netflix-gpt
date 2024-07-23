export const checkValidate = (name, email, password) => {
  const isUsernameValid = /^[a-zA-Z]{3,15}$/.test(name);
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  return { isUsernameValid, isEmailValid, isPasswordValid };
};
