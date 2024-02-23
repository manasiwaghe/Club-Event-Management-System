import React from "react";
import Aboutus from "./Aboutus";

export default function Navbar(){

    return (
        <nav className="flex place-content-between items-center">
            <img className="nav--logo h-24" src="./public/Clubsync-removebg.png" />
            <div className="text-white flex flex-row px-7 ">
                <a className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">Home</a>
                <a className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">Clubs</a>
                <a className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">Highlights</a>
                <a className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">Gallery</a>
                <a className="px-7 font-semibold hover:cursor-pointer hover:text-lg hover:text-[#E5D283]">About us</a>
                <button className="text-[#161A30] font-semibold bg-[#F0ECE5] px-5 py-1 rounded-xl hover:cursor-pointer hover:bg-[#E5D283]">Login</button>
            </div>

        </nav>
    )
}