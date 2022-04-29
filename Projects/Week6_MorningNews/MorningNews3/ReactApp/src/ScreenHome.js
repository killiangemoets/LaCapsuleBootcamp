import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./App.css";
import { Input, Button } from "antd";

function ScreenHome() {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpePassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const [signUpUsernameMessage, setSignUpUsernameMessage] = useState("");
  const [signUpEmailMessage, setSignUpEmailMessage] = useState("");
  const [signUpPasswordMessage, setSignUpePasswordMessage] = useState("");
  const [signInEmailMessage, setSignInEmailMessage] = useState("");
  const [signInPasswordMessage, setSignInPasswordMessage] = useState("");

  async function handleSignUp() {
    const rawResponse = await fetch("/users/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${signUpPassword}&email=${signUpEmail}&password=${signUpPassword}`,
    });

    var response = await rawResponse.json();
    if (response.status === "success") {
      setIsLogin(true);
    } else {
      setSignUpUsernameMessage("");
      setSignUpEmailMessage("");
      setSignUpePasswordMessage("");

      if (response.message.indexOf("xxx") !== -1) {
        const usernameSignupError = response.message.substring(
          response.message.indexOf("xxx") + "xxx".length + 1,
          response.message.lastIndexOf("xxx")
        );
        setSignUpUsernameMessage(usernameSignupError);
      }

      if (response.message.indexOf("yyy") !== -1) {
        const emailSignUpError = response.message.substring(
          response.message.indexOf("yyy") + "yyy".length + 1,
          response.message.lastIndexOf("yyy")
        );
        setSignUpEmailMessage(emailSignUpError);
      }

      if (response.message.indexOf("zzz") !== -1) {
        const passwordSignUpError = response.message.substring(
          response.message.indexOf("zzz") + "zzz".length + 1,
          response.message.lastIndexOf("zzz")
        );
        setSignUpePasswordMessage(passwordSignUpError);
      }

      if (response.message.indexOf("E11000") !== -1) {
        const emailSignUpError = "This email adress is already used";
        setSignUpEmailMessage(emailSignUpError);
      }
      // if(response.message.includes("Please provide a username"))
    }
  }

  async function handleSignIn() {
    const rawResponse = await fetch("/users/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${signInEmail}&password=${signInPassword}`,
    });

    var response = await rawResponse.json();
    if (response.status === "success") {
      setIsLogin(true);
    } else {
      setSignInEmailMessage("");
      setSignInPasswordMessage("");

      if (response.message.indexOf("yyy") !== -1) {
        const emailSignInError = response.message.substring(
          response.message.indexOf("yyy") + "yyy".length + 1,
          response.message.lastIndexOf("yyy")
        );
        setSignInEmailMessage(emailSignInError);
      }

      if (response.message.indexOf("zzz") !== -1) {
        const passwordSignInError = response.message.substring(
          response.message.indexOf("zzz") + "zzz".length + 1,
          response.message.lastIndexOf("zzz")
        );
        setSignInPasswordMessage(passwordSignInError);
      }
    }
  }

  if (isLogin) {
    return <Redirect to="/sources" />;
  } else {
    return (
      <div className="Login-page">
        {/* SIGN-IN */}

        <div className="Sign">
          <div className="field">
            <Input
              className="Login-input"
              placeholder="arthur@lacapsule.com"
              onChange={(e) => setSignInEmail(e.target.value)}
              value={signInEmail}
            />
            <p>{signInEmailMessage}</p>
          </div>

          <div className="field">
            <Input.Password
              className="Login-input"
              placeholder="password"
              onChange={(e) => setSignInPassword(e.target.value)}
              value={signInPassword}
            />
            <p>{signInPasswordMessage}</p>
          </div>

          <Button
            style={{ width: "80px" }}
            type="primary"
            onClick={() => handleSignIn()}
          >
            Sign-in
          </Button>
        </div>

        {/* SIGN-UP */}

        <div className="Sign">
          <div className="field">
            <Input
              className="Login-input"
              placeholder="arthuro"
              onChange={(e) => setSignUpUsername(e.target.value)}
              value={signUpUsername}
            />
            <p>{signUpUsernameMessage}</p>
          </div>

          <div className="field">
            <Input
              className="Login-input"
              placeholder="arthur@lacapsule.com"
              onChange={(e) => setSignUpEmail(e.target.value)}
              value={signUpEmail}
            />
            <p>{signUpEmailMessage}</p>
          </div>

          <div className="field">
            <Input.Password
              className="Login-input"
              placeholder="password"
              onChange={(e) => setSignUpePassword(e.target.value)}
              value={signUpPassword}
            />
            <p>{signUpPasswordMessage}</p>
          </div>

          <Button
            style={{ width: "80px" }}
            type="primary"
            onClick={() => handleSignUp()}
          >
            Sign-up
          </Button>
        </div>
      </div>
    );
  }
}

export default ScreenHome;
