import React,{ useState, useEffect } from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClubCards from './ClubCards.jsx'
import ClubCardData from './ClubCardData.js'
import bg from "/bgvector.png"
import calendar from "/calendarImg.png"

export default function HomePageBody(){
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const images = [
          'img1.png',
          'img2.jpg',
          'img3.jpg',
          'img4.jpg',
        ];
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3000);
        return () => clearInterval(interval);
        }, [images.length]);

        
        const cards = ClubCardData.map(item => {
          return (
            <ClubCards 
              id={item.id}
              logo={item.logo}
              name={item.name}
              info={item.info}
              clubpl={item.clubpl} 
              />     
          )
        })

    return (
        <>

        <Navbar />
        <div className="grid grid-cols-2 place-items-center mx-16 mt-32">
            <div className="body--img h-80 mx-10">
              <img className="" src={bg} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#E5D283] text-8xl font-extrabold">CLUBSYNC</h1>
                <h4 className="text-[#B6BBC4] py-10 text-base text-center w-3/5">Our website is a one-stop page for all the clubs and their activities so that you never miss out on anything! From technical to cultural we host the information of all clubs and events that take place on our campus. To make sure that students stay updated at all times we hope to give you a great experience. </h4>
                {/* <input type="text" className="border-2 border-[#E5D283] bg-[#E5D283] rounded-3xl w-2/5 py-2 my-5 placeholder-[#161A30] text-center placeholder-center" placeholder="Search here" /> */}
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-44 mb-16">
            <h3 className="text-2xl text-white font-bold pb-8">Recent Highlights</h3>
            <img className="rounded-md w-2/5 h-96" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
        <section className='flex flex-nowrap py-8 px-10'>
        {cards}
        </section>
        <Footer />
        </>
    )
}
