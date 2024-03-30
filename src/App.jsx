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
import Gallery from './components/Gallery.jsx'
import Clubs from './components/Clubs.jsx'
import PrivateRoutes from './utils/PrivateRoutes.jsx'
import AdminEvent from './components/AdminEvent.jsx'
import MUN from './components/MUN.jsx'
import PASC from './components/PASC.jsx'
import PISB from './components/PISB.jsx'
import TEDx from './components/TEDx.jsx'
import { AuthProvider } from './utils/AuthContext'
import { Router } from 'react-router-dom'

// import { Client } from 'appwrite';

// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('65ee7bb07b8808d3212d');

function App() {

  return (
    <>
        <AuthProvider>
      <Routes>
        <Route path='/' element={<HomePageBody />}></Route>
        <Route path='aboutus' element={<Aboutus />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='clubs' element={<Clubs />}></Route>
        <Route path='gallery' element={<Gallery />}></Route>
        <Route path='PICTMUN' element={<MUN />}></Route>
        <Route path='PASC' element={<PASC />}></Route>
        <Route path='PISB' element={<PISB />}></Route>
        <Route path='TEDxPICT' element={<TEDx />}></Route>
        {/* <Route path='adminevent' element={<AdminEvent/>}></Route>  */}
        
        <Route element={<PrivateRoutes/>}>
          <Route path='adminevent' element={<AdminEvent/>}/> 
        </Route>
         
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
