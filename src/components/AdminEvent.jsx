import React from "react"
import pfp from "/PFP.png"
import { Link } from "react-router-dom"
import clubsync from "/Clubsync-removebg.png"

export default function AdminEvent(){

    return(
        <div className="font-sans">
            <nav className="flex place-content-between items-center bg-[#16253C] h-20 shadow-lg">
            <Link to='/'>
                <img src={clubsync} className="h-24 mx-5" />
            </Link>
                
                <div className="flex flex-row items-left justify-center mx-7">
                    <img src={pfp} className="h-14" />
                    <div className="px-5">
                        <h1 className="text-white text-xl font-bold"> User Name</h1>
                        <h4 className="text-white text-sm">Admin</h4>
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
                <h2 className="text-white mt-10 text-2xl font-bold">Event Name</h2>
                </div>

                <div className="flex flex-row justify-center mt-16">
                    <div className="bg-[#16253C]/50 rounded-xl text-white px-10 py-8 mx-16">
                        <h1 className="font-bold text-lg">Date</h1>
                        <h3 className="mt-2 text-base">[date of event]</h3>
                        <h1 className="mt-2 font-bold text-lg">Venue</h1>
                        <h3 className="mt-2 text-base">[venue of the event]</h3>
                    </div>

                    <div className="bg-[#16253C]/50 rounded-xl text-white px-10 py-8 mx-16">
                        <h1 className="font-bold text-lg mx-10">Operations</h1>
                        <div className="flex flex-col justify-left items-left">
                            <h3 className="mt-5">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                            <h3 className="mt-2">[list items]</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>    
    )
}