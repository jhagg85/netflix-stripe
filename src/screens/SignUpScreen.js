import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign up</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignUpScreen;
