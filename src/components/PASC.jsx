import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import logoACM from "/LogoACM.png"
import tl from "/MUNtl.png"

export default function PASC(){
    return (
        <>
            <Navbar />
            <div className="flex flex-row justify-center items-center mx-20 mt-32 sm:mx-10">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <img src={logoACM} className=""></img>
                    <h1 className="text-white py-10 font-bold text-3xl">PICT ACM Student Chapter</h1>
                </div>
                <div className="text-white flex flex-col justify-center items-center w-1/2 md:px-44 sm:px-20 text-center">
                    <h1 className="font-bold text-2xl text-[#F0ECE5]">About PASC</h1>
                    <h4 className="pt-10 font-light text-lg text-[#B6BBC4]">Association for computing machinery (ACM) is the world’s largest educational and scientific society, uniting educators, researchers and professors. PICT ACM student chapter (PASC) was established in 2011 with a view of fostering technical and non-technical qualities in an individual.</h4>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-[#0E1724] w-full mt-44">
            <img src={tl} className="w-3/4 mb-10" />
            <Footer />
            </div>
        </>
    )
}