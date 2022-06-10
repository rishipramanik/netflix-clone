import React from 'react'
import AccordianComponent from '../component/dumb/accordian/accordianComponent/AccordianComponent'
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent'
import JumboComponent from '../component/dumb/jumbo/jumboComponent/JumboComponent'
import Separator from '../component/dumb/separator/Separator'
// import HeaderWrapper from '../component/dumb/header/headerWrapper/HeaderWrapper'
// import SigninButton from '../component/dumb/header/signinBtn/SigninButton'
import HeaderComponent from '../component/smart/HeaderComponent'


const HomePage = () => {
  return (
    <>
    <HeaderComponent />
    <Separator />
    <JumboComponent />
    <AccordianComponent />
    <Separator />
    <FooterComponent />
    </>

  )
}

export default HomePage