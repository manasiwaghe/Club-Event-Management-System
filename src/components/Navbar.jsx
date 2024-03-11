import React from "react";
import Aboutus from "./Aboutus";
import { Link } from "react-router-dom";
import Logo from "/Clubsync-removebg.png";

export default function Navbar(){

    return (
        <nav className="flex place-content-between items-center">
            <Link to='/'>
            <img className="nav--logo h-24 cursor-pointer" src={Logo} />
            </Link>
            
            <div className="text-white flex flex-row px-7 ">
                <Link to='/' className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">Home</Link>
                <Link to='/clubs' className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">Clubs</Link>
                <Link to='/gallery' className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">Gallery</Link>
                <Link to='/aboutus' className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">About us</Link>
                
                    <Link to='/login'>
                    <button className="text-[#161A30] font-semibold bg-[#F0ECE5] px-5 py-1 rounded-xl hover:cursor-pointer hover:bg-[#E5D283] hover:text-lg">Login</button>
                    </Link>
                
            </div>

        </nav>
    )
}
