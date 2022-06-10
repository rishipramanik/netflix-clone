import React from "react";
import "./SignupComponent.css";
import SignButton from "../../dumb/signButton/SignButton";
import SignInput from "../../dumb/signInput/SignInput";
import SignText from "../../dumb/signText/SignText";
import SignTitle from "../../dumb/signTitle/SignTitle";
import SignLink from "../../dumb/signLink/SignLink";
import SignCaptcha from "../../dumb/signCaptcha/SignCaptcha";

const SignupComponent = ({ children, ...restProps }) => {
  return (
    <div className="sign-form-wrapper" {...restProps}>
      <form className="sign-form-base">
        <SignTitle>SignUp</SignTitle>
        <SignInput type="text" placeholder="Name" />
        <SignInput type="text" placeholder="Email" />
        <SignInput type="password" placeholder="Password" autoComplete="off" />
        <SignButton>Sign Up</SignButton>
        <SignText>
          Already a user?<SignLink> Sign in Now </SignLink>
        </SignText>
        <SignCaptcha>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </SignCaptcha>
      </form>
    </div>
  );
};

export default SignupComponent;
