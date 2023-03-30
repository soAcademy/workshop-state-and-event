import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { fire } from "../firebaseConfig/fire";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const auth = getAuth(fire);
  const registerPage = (e) => {
    e.preventDefault();
    console.log("auth", auth);

    createUserWithEmailAndPassword(auth, username, password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkUsername = () => {
    if (username === "") {
      setUsernameError(true);
      setUsernameErrorMessage("required");
      return true;
    } else {
      setUsernameError(false);
      setUsernameErrorMessage("");
      return false;
    }
  };

  const checkPassword = () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setPasswordMatchError("Passwords don't match. Please try again.");
      return false;
    } else {
      setPasswordMatch(true);
      setPasswordMatchError("");
      return true;
    }
  };

  const checkEmail = () => {
    if (email === "") {
      setEmailError(true);
      setEmailErrorMessage("required");
      return true;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
      return false;
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const isPasswordMatch = checkPassword();
  //   const isUsernameEmpty = checkUsername();
  //   const isEmailEmpty = checkEmail();
  //   if (
  //     isPasswordMatch === true &&
  //     isUsernameEmpty === false &&
  //     isEmailEmpty === false
  //   ) {
  //     const form = document.getElementById("register-form");
  //     form.submit();
  //   }
  // };

  const usernameClassName = usernameError
    ? "w-3/4 m-auto bg-neutral-300 rounded-sm border border-red-500"
    : "w-3/4 m-auto bg-neutral-300 rounded-sm border border-gray-300";

  const passwordClassName = passwordMatch
    ? "w-3/4 m-auto bg-neutral-300 rounded-sm border border-gray-300"
    : "w-3/4 m-auto bg-neutral-300 rounded-sm border border-red-500";

  const confirmPasswordClassName = passwordMatch
    ? "w-3/4 m-auto bg-neutral-300 rounded-sm border border-gray-300"
    : "w-3/4 m-auto bg-neutral-300 rounded-sm border border-red-500";

  const emailClassName = emailError
    ? "w-3/4 m-auto bg-neutral-300 rounded-sm border border-red-500"
    : "w-3/4 m-auto bg-neutral-300 rounded-sm border border-gray-300";

  return (
    <>
      <div className="bg-neutral-300 h-screen flex justify-center overflow-auto">
        <div className="bg-neutral-50 m-auto md:w-10/12 w-full h-[500px] mx-2 border border-4 border-red-700 rounded-lg mt-[70px]">
          <h1 className="text-center p-4 text-xl font-bold ">Registration</h1>
          <div className="py-2">
            <div className="flex">
              <h1 className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</h1>
              <h1 className="lg:ml-12 ml-9 md:ml-8">Username</h1>
            </div>
            <div className="text-center">
              <input
                type="text"
                id="username"
                onChange={(event) => setUsername(event.target.value)}
                required
                className={usernameClassName}
              />
            </div>
            <div
              id="username-error"
              className="text-red-700 ml-12 font-bold text-sm"
              style={{ display: usernameErrorMessage ? "block" : "none" }}
            >
              {usernameErrorMessage}
            </div>
          </div>
          <div className="py-2">
            <div className="flex">
              <h1 className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</h1>
              <h1 className="lg:ml-12 ml-9 md:ml-8">Password</h1>
            </div>
            <div className="text-center">
              <input
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                className={passwordClassName}
              />
            </div>
          </div>
          <div className="py-2">
            <div className="flex">
              <h1 className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</h1>
              <h1 className="lg:ml-12 ml-9 md:ml-8">Confirm Password</h1>
            </div>
            <div className="text-center">
              <input
                type="password"
                id="confirm-password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                className={confirmPasswordClassName}
              />
            </div>
            <div
              id="password-match-error"
              className="text-red-700 text-center font-bold text-sm"
              style={{ display: passwordMatchError ? "block" : "none" }}
            >
              {passwordMatchError}
            </div>
          </div>
          <div className="py-2">
            <div className="flex">
              <h1 className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</h1>
              <h1 className="lg:ml-12 ml-9 md:ml-8">Email</h1>
            </div>
            <div className="text-center">
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className={emailClassName}
              />
            </div>
            <div
              id="email-error"
              className="text-red-700 ml-12 font-bold text-sm"
              style={{ display: emailErrorMessage ? "block" : "none" }}
            >
              {emailErrorMessage}
            </div>
            <div className="flex">
              <div className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</div>
              <div className="text-xs mt-2 lg:ml-12 ml-9 md:ml-8">
                already have an account?
              </div>
              <div>
                {/* <Link to="/shabu/login"> */}
                <button className="mr-5 text-xs mt-2 underline-offset-0 underline button hover:text-sky-500 active:text-sky-800 ">
                  Log in
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <form onClick={registerPage} id="register-form">
            {/* <Link to="/shabu/Home"> */}
            <div className="text-center">
              <Button
                className=" bg-red-700 mb-2 text-neutral-50 font-bold md:w-1/3 w-3/4 p-2 mt-4 rounded-lg mx-auto mb-4  md:text-base text-sm"
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </div>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
