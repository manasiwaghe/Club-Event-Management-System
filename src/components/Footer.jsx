import React from "react"
import twitter from "./public/Twitter.png"
import instagram from "./public/Instagram.png"
import linkedin from "./public/Linkedin.png"
import facebook from "./public/Facebook.png"

export default function(){
    return (
        <>
            <div className="flex flex-nowrap w-full justify-center items-center text-center text-white divide-x-2 divide-slate-600 mb-5">
                <div className="">
                    <h3 className="py-5 font-semibold text-lg">Contact us</h3>
                    <h4 className="text-[#B6BBC4]">Email: hibiks@pict.edu</h4>
                    <h4 className="text-[#B6BBC4]">Phone: 5236874618</h4>
                </div>
                <div className='border border-gray-300 my-1 hidden'>
                </div>
                <div className="ml-10 pl-5">
                    <h3 className="font-semibold text-lg">Follow us</h3>
                    <div className="flex flex-row py-2">
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FPunePict">
                            <img className="h-6 px-3 mt-4 hover:cursor-pointer hover:h-7" src={twitter} />
                        </a>
                        <a href="https://www.instagram.com/pict.pune?igsh=MThzMXh3NW1teDc2cQ==">
                            <img className="h-5 px-3 mt-4 hover:cursor-pointer hover:h-7" src={instagram} />
                        </a>
                        <a href="https://www.linkedin.com/school/pune-institute-of-computer-technology/">
                            <img className="h-5 px-3 mt-4 hover:cursor-pointer hover:h-7" src={linkedin} />
                        </a>
                        <a href="https://www.facebook.com/PICTOfficial">
                            <img className="h-5 px-3 mt-4 hover:cursor-pointer hover:h-7" src={facebook} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}