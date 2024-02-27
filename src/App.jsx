import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
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
import Gallery from './components/Gallery.jsx'
import Clubs from './components/Clubs.jsx'
import ClubPageDisp from './components/ClubPageDisp.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePageBody />}></Route>
        <Route path='aboutus' element={<Aboutus />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='clubs' element={<Clubs />}></Route>
        <Route path='clubpage' element={<Clubpage />}></Route>
        <Route path='gallery' element={<Gallery />}></Route>
        <Route path="/club/:id" element={<ClubPageDisp/>}></Route>
      </Routes>


    {/* <Login /> */}
    {/* <Aboutus /> */}
    {/* <Signup /> */}
    {/* <Gallery /> */}

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
