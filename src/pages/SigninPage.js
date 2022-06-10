import React from 'react'
import SigninComponent from '../component/smart/signinComponent/SigninComponent'
import HeaderWrapper from "../component/dumb/header/headerWrapper/HeaderWrapper";
import Logo from "../component/dumb/header/logo/Logo";
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent'
import NavBar from "../component/dumb/header/navBar/NavBar"

const SigninPage = () => {
  return (
    <>
    <HeaderWrapper>
        <NavBar className='navbar-home'>
            <Logo />
        </NavBar>
        <SigninComponent />
    </HeaderWrapper>
    <FooterComponent />
    </>
  )
}

export default SigninPage