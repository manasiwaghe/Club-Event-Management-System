import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import logoTEDx from "/LogoTEDx.png"
import tl from "/MUNtl.png"

export default function TEDx(){
    return (
        <>
            <Navbar />
            <div className="flex flex-row justify-center items-center mx-20 mt-28 sm:mx-10">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <img src={logoTEDx} className=""></img>
                    <h1 className="text-white py-10 font-bold text-3xl">TEDxPICT</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center w-1/2 md:px-44 sm:px-20 text-center">
                    <h1 className="font-bold text-2xl text-[#F0ECE5]">About TEDxPICT</h1>
                    <h4 className="pt-10 font-light text-lg text-[#B6BBC4]">TED is a non-profit organization promoting the spread of innovative ideas, best practices, human values and worthy life experiences since its inception in 1984.TEDxPICT is an extension of this mission with the help of a group of proactive individuals focussed at providing a platform to bring in various stakeholders together to share the ideas, stories, and innovation.</h4>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#0E1724] w-full mt-40">
            <img src={tl} className="w-3/4 mb-10" />
            <Footer />
            </div>
        </>
    )
}