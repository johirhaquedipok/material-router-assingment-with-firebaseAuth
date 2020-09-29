import "firebase/auth";

import * as firebase from "firebase/app";

import React from "react";
import firebaseConfig from "../firebase";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);
const Testlogin = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
 

  const handleChange = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(
        event.target.name
      );
    }
    if (event.target.value === "password") {
      isFormValid = /\d/.test(event.target.value);
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  // handle submit
  const handleSubmit = (event) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    }
    console.log("submit");
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleChange}
          type="text"
          name="email"
          id="email"
          placeholder="write your email id"
          required
        ></input>
        <br />
        <input
          onBlur={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          required
        ></input>

        <button type="submit" value="submit">
          signin
        </button>
      </form>
    </div>
  );
};

export default Testlogin;
