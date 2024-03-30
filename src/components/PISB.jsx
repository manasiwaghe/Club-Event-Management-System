import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import logoMUN from "/LogoMUN.png"
import tl from "/MUNtl.png"

export default function PISB(){
    return (
        <>
            <Navbar />
            <div className="flex flex-row justify-center items-center mx-20 mt-28 sm:mx-10">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <img src={logoMUN} className=""></img>
                    <h1 className="text-white py-10 font-bold text-3xl">PICT IEEE Student Branch</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center w-1/2 md:px-44 sm:px-20 text-center">
                    <h1 className="font-bold text-2xl text-[#F0ECE5]">About PISB</h1>
                    <h4 className="pt-10 font-light text-lg text-[#B6BBC4]">IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.Pune Institute of Computer Technology (PICT) IEEE Student Branch was established in the year 1988 with an aim of inculcating a sense of technical awareness amongst its student members.It aims to nurture, develop, and advance the building of global technologies.</h4>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#0E1724] w-full mt-28">
            <img src={tl} className="w-3/4 mb-10" />
            <Footer />
            </div>
        </>
    )
}