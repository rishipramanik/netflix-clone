import React from "react";
import './SigninComponent.css'
import SignButton from "../../dumb/signButton/SignButton";
import SignInput from "../../dumb/signInput/SignInput";
import SignText from "../../dumb/signText/SignText";
import SignTitle from "../../dumb/signTitle/SignTitle";
import SignLink from "../../dumb/signLink/SignLink";
import SignCaptcha from "../../dumb/signCaptcha/SignCaptcha";

const SigninComponent = ({ children, ...restProps }) => {
  return (
    <div className="sign-form-wrapper" {...restProps}>
      <form className="sign-form-base">
        <SignTitle>SignIn</SignTitle>
        <SignInput type="text" placeholder="email" />
        <SignInput type="password" placeholder="Password" autoComplete='off' />
        <SignButton>Sign IN</SignButton>
        <SignText>New to Netflix?<SignLink> Sign up Now </SignLink></SignText>
        <SignCaptcha>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</SignCaptcha>
      </form>
    </div>
  );
};

export default SigninComponent;
