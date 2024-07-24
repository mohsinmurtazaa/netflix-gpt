import React, { useRef, useState } from "react";
import { checkValidate } from "../utils/checkValidate";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleAuthForm = () => {
    setIsSignInForm(!isSignInForm);
    setEmailError(null);
    setPasswordError(null);
    setNameError(null);
    // name.current.value = "";
    // email.current.value = "";
    // password.current.value = "";
  };
  const validateForm = () => {
    const { isUsernameValid, isEmailValid, isPasswordValid } = checkValidate(
      isSignInForm ? "" : name.current.value,
      email.current.value,
      password.current.value
    );
    setEmailError(isEmailValid ? null : "Please enter a valid email address");
    setPasswordError(isPasswordValid ? null : "Please enter a valid password");
    setNameError(isUsernameValid ? null : "Please enter a valid username");
    return isEmailValid && isPasswordValid && (isSignInForm || isUsernameValid);
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("email", email);
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("user", user);
            // ...
          })
          .catch((error) => {
            console.log("error", error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("signInUser", user);
            // ...
          })
          .catch((error) => {
            console.log("error");
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
    }
  };
  return (
    <div className="relative h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/1461adb6-5183-4a48-8346-d14d7250302c/US-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8b32f466-39f1-47d0-ade1-7bbf83666948_large.jpg"
        alt="Login Background"
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black opacity-80 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h3 className="text-2xl text-white font-bold mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h3>
          <form onSubmit={handleForm}>
            {!isSignInForm && (
              <div className="mb-4">
                <input
                  ref={name}
                  type="text"
                  placeholder="Enter Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <span className="text-red-600">{nameError}</span>
              </div>
            )}
            <div className="mb-4">
              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <span className="text-red-600">{emailError}</span>
            </div>
            <div className="mb-6">
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <span className="text-red-600">{passwordError}</span>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-600 text-white rounded"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="mt-4 text-white text-center">
              {!isSignInForm ? "Already a memebr?" : "New to Netflix?"}{" "}
              <span
                onClick={handleAuthForm}
                className="text-blue-500 cursor-pointer"
              >
                {isSignInForm ? "Sign up now." : "Sign In now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
