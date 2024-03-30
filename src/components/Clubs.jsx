import React from "react";
import ClubCardData from "./ClubCardData";
import ClubCards from "./ClubCards";
import Clubpage from "./Clubpage";
import Navbar from "./Navbar";

export default function Clubs(){

    const cards = ClubCardData.map(item => {
        return (
          <ClubCards 
            id= {item.id}
            logo={item.logo}
            name={item.name}
            abv={item.abv}
            info={item.info}
            clubpl={item.clubpl} 
            />     
        )
      })

    return (
        <>
        <Navbar />
        <section className='flex flex-nowrap pt-10 pb-10 mx-10'>
            {cards}
        </section>
        </>
    )
}