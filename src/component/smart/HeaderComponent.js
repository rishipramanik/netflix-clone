import React from "react";
import SubscribeButton from "../dumb/forms/subscribe/subscribeButton/SubscribeButton";
import SubscribeEmail from "../dumb/forms/subscribe/subscribeEmail/SubscribeEmail";
import SubscribeWrapper from "../dumb/forms/subscribe/subscribeWrapper/SubscribeWrapper";
import FeatureTitle from "../dumb/header/featureTitle/FeatureTitle";
import FeatureWrapper from "../dumb/header/featureWrapper/FeatureWrapper";
import HeaderWrapper from "../dumb/header/headerWrapper/HeaderWrapper";
import Logo from "../dumb/header/logo/Logo";

import NavBar from "../dumb/header/navBar/NavBar";
import SigninButton from "../dumb/header/signinBtn/SigninButton";
import Separator from "../dumb/separator/Separator";

const HeaderComponent = () => {
  return (
    <>
      <HeaderWrapper>
        <NavBar className="navbar-home">
          <Logo />
          <SigninButton />
        </NavBar>
        <FeatureWrapper className="feature-wrapper-home">
          <FeatureTitle className="feature-title-home">
            Unlimited movies, TV Shows & More.
          </FeatureTitle>
        </FeatureWrapper>
        <SubscribeWrapper>
          <SubscribeEmail type="email" />
          <SubscribeButton>Get Started</SubscribeButton>
        </SubscribeWrapper>
      </HeaderWrapper>
    </>
  );
};

export default HeaderComponent;
