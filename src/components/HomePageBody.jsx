import React,{ useState, useEffect } from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClubCards from './ClubCards.jsx'
import ClubCardData from './ClubCardData.js'
import bg from "./bgvector.png"
import calendar from "./calendarImg.png"

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
          }, 5000);
        return () => clearInterval(interval);
        }, [images.length]);

        
        const cards = ClubCardData.map(item => {
          return (
            <ClubCards 
              id={item.id}
              logo={item.logo}
              name={item.name}
              info={item.info}
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
                <h4 className="text-[#B6BBC4] py-5 text-sm text-center w-2/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                <input type="text" className="border-2 border-[#E5D283] bg-[#E5D283] rounded-3xl w-2/5 py-2 my-5 placeholder-[#161A30] text-center placeholder-center" placeholder="Search here" />
            </div>
        </div>
        <div className="grid grid-cols-2 place-items-center mt-52 mb-24">
          <div className="pl-32">
            <h3 className="text-2xl text-white font-bold pb-8 px-32">Recent Highlights</h3>
            <img className="rounded-md w-4/5 h-80" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          </div>
            <img src={calendar} className="w-4/5 h-full rounded-lg" />
        </div>
        <section className='flex flex-nowrap pt-10 pb-10'>
        {cards}
        </section>
        <Footer />
        </>
    )
}