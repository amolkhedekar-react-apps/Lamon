import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AuthStyle.css";
import AuthImage from "../../static/images/authimage.svg";
import { auth } from "../../services/firebase";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confrimPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          if (user) {
            history.push("/");
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Passwords didn't match");
    }
  };
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__row">
          <img className="auth__image" src={AuthImage} alt="personimage" />
          <div className="auth__formContainer">
            <h1 className="auth__title">Signup here</h1>
            <form className="auth__form">
              <div className="div__textInput">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="text__input"
                  name="text__email"
                />
              </div>
              <div className="div__textInput">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="text__input"
                  name="text__password"
                />
              </div>
              <div className="div__textInput">
                <input
                  type="password"
                  value={confrimPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="text__input"
                  name="text__confirmPassword"
                />
              </div>
              <input
                type="submit"
                className="button__submit"
                value="Signup"
                onClick={handleSignup}
              />
            </form>
            <div className="auth__signupDiv">
              <small>Already a member?</small>
              <Link to="/login" className="auth__complementaryLink">
                <strong>Login</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
