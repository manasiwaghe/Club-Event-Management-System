import React from "react"
import { useState } from "react"
import pfp from "/PFP.png"
import { Link , useNavigate} from "react-router-dom"
import { useAuth } from "../utils/AuthContext"
import Logo from "/Clubsync-removebg.png"
import Navbar from "./Navbar"
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from "@mui/material"

export default function AdminEvent(){
    const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate()
  const {user, logoutUser} = useAuth()

  const logoutClick = () => {
      navigate('/')
  }
    return(
        <div className="font-sans">
            <nav className="flex place-content-between items-center  bg-[#16253C]">
            <Link to='/'>
            <img className="nav--logo h-20 cursor-pointer" src={Logo} />
            </Link>
            
            <div className="text-white flex flex-row items-center px-7 ">
               
                <div className="flex flex-row items-left justify-center mx-7">
                    <img src={pfp} className="h-12" />
                    <div className="px-5">
                        <ul>
                        <li className="navbar-item cursor-pointer">
                            <h1 className="text-white text-lg font-bold overflow-hidden"  onClick={logoutUser}>LOGOUT</h1>
                            <h4 className="text-white text-sm overflow-hidden">Admin</h4>
                        </li>
                        </ul>
                    </div>
                </div>
                
            </div>

        </nav>
            

            

            <div className="flex flex-row">
            <div className="bg-[#16253C]/60 w-64 h-screen">
                <div className="flex flex-col items-left justify-center text-white mx-10">
                    <h2 className="mt-10 text-lg font-bold">CONTENTS</h2>
                    <h2 className=" mt-5 font-thin ">Event Details</h2>
                    <h2 className=" mt-2 font-thin ">Operations</h2>
                    <h2 className=" mt-2 font-thin ">Permissions</h2>
                    <h2 className=" mt-2 font-thin ">Registrations</h2>
                </div>
            </div>
            
            <div className="flex flex-col items-center w-full">
                <div>
                <h2 className="text-white mt-10 text-2xl font-bold">AdLib</h2>
                </div>

                <div className="flex flex-row justify-center mt-16">
                    <div className="bg-[#16253C]/50 rounded-xl text-white px-10 py-8 mx-16">
                        <h1 className="font-bold text-lg">Date</h1>
                        <h3 className="mt-2 text-base">23-24 January 2024</h3>
                        <h1 className="mt-2 font-bold text-lg">Venue</h1>
                        <h3 className="mt-2 text-base">Computer Seminar Hall</h3>
                    </div>

                    <div className="bg-[#16253C]/50 rounded-xl text-white px-10 py-8 mx-16">
                        <h1 className="font-bold text-lg mx-10">Operations</h1>
                        <div className="flex flex-col justify-left items-left">
                            <FormControlLabel control={<Checkbox/>} label="Placards" className="mt-5"></FormControlLabel>
                            <FormControlLabel control={<Checkbox/>} label="Water Colors" className="mt-2"></FormControlLabel>
                            <FormControlLabel control={<Checkbox/>} label="Card Board" className="mt-2"></FormControlLabel>
                            <FormControlLabel control={<Checkbox/>} label="Decor material" className="mt-2"></FormControlLabel>
                            <FormControlLabel control={<Checkbox/>} label="Gifts" className="mt-2"></FormControlLabel>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>    
    )
}