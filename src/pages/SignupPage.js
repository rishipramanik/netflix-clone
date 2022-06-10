import React from 'react'
import SignupComponent from '../component/smart/signupComponent/SignupComponent'
import HeaderWrapper from "../component/dumb/header/headerWrapper/HeaderWrapper";
import Logo from "../component/dumb/header/logo/Logo";
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent'
import NavBar from "../component/dumb/header/navBar/NavBar"

const SignupPage = () => {
  return (
    <>
    <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo />
        </NavBar>
        <SignupComponent />
    </HeaderWrapper>
    <FooterComponent />
    </>
  )
}

export default SignupPage