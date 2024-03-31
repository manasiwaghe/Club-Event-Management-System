import React from "react";
import { Link } from "react-router-dom";

export default function ClubCards(props){
    return (
        <div className="flex flex-col justify-center items-center bg-[#222847]/65 w-2/5 text-white text-center rounded-xl px-10 py-16 m-5">
            <img src={props.logo} className="w-4/5 pb-4" />
            <h2 className="font-bold text-xl py-3">{props.name}</h2>
            <h4 className="text-sm ">{props.info}</h4>
            <Link to={props.clubpl}>
                <button className="bg-[#E5D283] mt-5 py-1 px-6 rounded-2xl text-[#161A2F] hover:text-lg hover:font-medium">
                Explore</button>
            </Link> 
        </div>
    )
}