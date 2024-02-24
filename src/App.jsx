import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePageBody from './components/HomePageBody.jsx'
import ClubCards from './components/ClubCards.jsx'
import ClubCardData from './components/ClubCardData.js'
import Footer from './components/Footer.jsx'
import Aboutus from './components/Aboutus.jsx'
import Login from './components/Login.jsx'
import './App.css'
import Signup from './components/Signup.jsx'
import Clubpage from './components/Clubpage.jsx'

function App() {

  const cards = ClubCardData.map(item => {
    return (
      <ClubCards 
        logo={item.logo}
        name={item.name}
        info={item.info}
        />     
    )
  })

  function handleAboutus(){
    window.open("src/components/Aboutus.jsx")
  }

  return (
    <>
    {/* <Login /> */}
    {/* <Aboutus /> */}
    {/* <Signup /> */}

      {/* <Navbar />
      <Clubpage /> */}
      {/* <Navbar />
      <HomePageBody />
      <section className='flex flex-nowrap pt-10'>
        {cards}
      </section>
      <Footer /> */}
    </>
  )
  

}

export default App
