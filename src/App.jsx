import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HomePageBody from './components/HomePageBody.jsx'
import ClubCards from './components/ClubCards.jsx'
import ClubCardData from './components/ClubCardData.js'
import Footer from './components/Footer.jsx'
import './App.css'

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
      <Navbar />
      <HomePageBody />
      <section className='flex flex-nowrap pt-10'>
        {cards}
      </section>
      <Footer />
    </>
  )
  

}

export default App
