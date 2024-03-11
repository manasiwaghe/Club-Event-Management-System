import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import logoMUN from "/LogoMUN.png"

export default function Clubpage(){
    return (
        <>
            <Navbar />
            <div className="flex flex-row justify-center items-center mx-20 mt-28 sm:mx-10">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <img src={logoMUN} className=""></img>
                    <h1 className="text-white py-10 font-bold text-3xl">PICT Model United Nations</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center w-1/2 md:px-44 sm:px-20 text-center">
                    <h1 className="font-bold text-2xl text-[#F0ECE5]">About PICTMUN</h1>
                    <h4 className="pt-10 font-light text-lg text-[#B6BBC4]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                </div>
            </div>
        </>
    )
}