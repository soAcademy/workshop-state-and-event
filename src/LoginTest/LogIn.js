import React, { useState } from "react";
import Button from "@mui/material/Button";
import { fire } from "../firebaseConfig/fire";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const LogIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [formErrors, setFormErrors] = useState({ username: "", password: "" });
  // const [email, setEmail]= useState('')
  // const [password, setPassword] = useState('')
  const auth = getAuth(fire);
  const logInPage = (e) => {
    e.preventDefault();
    console.log("auth", auth);

    signInWithEmailAndPassword(auth, formData.username, formData.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const user = auth.currentUser;

  if (user) {
    user
      .getIdToken()
      .then((token) => {
        console.log(`User token ID: ${token}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    console.log("No user currently signed in.");
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const errors = {};
  //   if (formData.username.trim() === "") {
  //     errors.username = "required";
  //   }
  //   if (formData.password.trim() === "") {
  //     errors.password = "required";
  //   }

  //   setFormErrors(errors);

  //   if (Object.keys(errors).length === 0) {
  //     const form = document.getElementById("logIn-form");
  //     form.submit();
  //   }
  // };

  const inputClassName = (id) => {
    return formErrors[id]
      ? "w-3/4 m-auto bg-neutral-300 rounded-sm border border-red-500"
      : "w-3/4 m-auto bg-neutral-300 rounded-sm border border-gray-300";
  };

  return (
    <>
      <div className="bg-neutral-300 h-screen flex justify-center">
        <div className="bg-neutral-50 m-auto md:w-1/2 w-full mx-2 border border-4 border-red-700 rounded-lg mt-[70px]">
          <h1 className="text-center p-4 text-xl font-bold">Log In</h1>
          <div className="py-2">
            <div className="flex">
              <h1 className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</h1>
              <h1 className="lg:ml-12 ml-8 md:ml-8">Username</h1>
            </div>
            <div className="text-center">
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className={inputClassName("username")}
              />
            </div>
            <div
              id="username-error"
              className="text-red-700 ml-12 font-bold text-sm"
              style={{ display: formErrors.username ? "block" : "none" }}
            >
              {formErrors.username}
            </div>
          </div>
          <div className="py-2">
            <div className="flex">
              <h1 className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</h1>
              <h1 className="lg:ml-12 ml-8 md:ml-8">Password</h1>
            </div>
            <div className="text-center">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className={inputClassName("password")}
              />
            </div>
            <div
              id="password-error"
              className="text-red-700 ml-12 font-bold text-sm"
              style={{ display: formErrors.password ? "block" : "none" }}
            >
              {formErrors.password}
            </div>
            <div className="flex">
              <h1 className="text-neutral-50 ml-1 md:ml-3 lg:ml-5">.</h1>
              <button className="lg:ml-12 ml-4 md:ml-8 text-xs mt-2 underline-offset-0 underline button hover:text-sky-500 active:text-sky-800 ">
                Forgot Password?
              </button>
            </div>
          </div>
          <form onClick={logInPage} id="logIn-form">
            <div className="text-center">
              <Button
                className=" bg-red-700 mb-2 text-neutral-50 font-bold md:w-1/3 w-3/4 p-2 mt-4 rounded-lg mx-auto mb-4  md:text-base text-sm"
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
