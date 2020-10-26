import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AuthStyle.css";
import AuthImage from "../../static/images/authimage.svg";
import { auth } from "../../services/firebase";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__row">
          <img className="auth__image" src={AuthImage} alt="personimage" />
          <div className="auth__formContainer">
            <h1 className="auth__title">Login to continue</h1>
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
              <button
                type="submit"
                className="button__submit"
                onClick={handleSingin}
              >
                Login
              </button>
            </form>
            <div className="auth__signupDiv">
              <small>Not a member?</small>
              <Link to="/signup" className="auth__complementaryLink">
                <strong>Signup here</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
