import React from "react";

export default function Navbar(){

    return (
        <nav className="flex place-content-between items-center">
            <img className="nav--logo h-24" src="./public/Clubsync-removebg.png" />
            <div className="text-white flex flex-row px-7 ">
                <h4 className="px-7">Home</h4>
                <h4 className="px-7">Clubs</h4>
                <h4 className="px-7">Highlights</h4>
                <h4 className="px-7">Gallery</h4>
                <h4 className="px-7">About us</h4>
                <button className="text-[#161A30] bg-[#F0ECE5] px-5 py-1 rounded-xl">Login</button>
            </div>

        </nav>
    )
}