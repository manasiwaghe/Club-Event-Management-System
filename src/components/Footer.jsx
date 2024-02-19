import React from "react"

export default function(){
    return (
        <>
            <div className="flex flex-nowrap w-full justify-center items-center text-center text-white divide-x-2 divide-slate-600 mb-10">
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
                        <img className="h-5 px-3 mt-4" src="./public/Twitter.png" />
                        <img className="h-5 px-3 mt-4" src="./public/Instagram.png" />
                        <img className="h-5 px-3 mt-4" src="./public/Linkedin.png" />
                        <img className="h-5 px-3 mt-4" src="./public/Facebook.png" />
                    </div>
                </div>
            </div>
            <footer className="sticky flex justify-center">
            <small className="text-white content-center">Developed with ❤️</small>
            </footer>
        </>
    )
}