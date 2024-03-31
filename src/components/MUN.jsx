import React from "react"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer"
import logoMUN from "/LogoMUN.png"
import tl from "/MUNtl.png"

export default function MUN(){
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
                    <h4 className="pt-10 font-light text-lg text-[#B6BBC4]">The PICT MUN Club, established in 2016, consists of a group of inquisitive students who are passionate about social, political, and economic issues that elude the future of our world. PICT MUN strongly believes in the important role of dialogue and discussion in solving any problem and hence always abides by its motto - 'Think.Discuss.Prosper'.</h4>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#0E1724] w-full mt-28">
            <img src={tl} className="w-3/4 mb-10" />

            <div className="flex flex-col justify-center items-center bg-[#222847]/65 w-2/5 text-white text-center rounded-xl px-5 py-10 m-5">
                <h1 className="font-bold text-xl">AdLib</h1>
                <h2 className="pt-3">DATE: 23rd and 24th Jan, 2024</h2>
                <h2 className="">VENUE: Computer Seminar Hall</h2>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScdI_MCOqY_Oe_8shTBqtdCCZg6FUWf-2zfHdqMi97jYzoyWg/viewform?usp=sf_link"><button className="mt-5 px-5 py-1 rounded-lg text-black hover:bg-[#F4EBDB] cursor-pointer bg-[#E5D283]">Register Here</button></a>
            </div>
            <Footer />
            </div>
        </>
    )
}