import React from "react"

export default function Signup(){
    return (

        < div className="flex flex-col justify-center items-center" >
        
            <div className="text-white flex flex-col justify-center items-center bg-[#222847]/55 py-12 px-16 rounded-3xl mt-20">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[#B5C9E5] font-bold text-3xl pb-5">Sign up</h1>
                    <div className="pt-5 pb-5 flex flex-row justify-center items-center">
                        <h4 className="font-normal ">Already have an account? </h4>
                        <h4 className="text-[#4F709C] font-bold hover:cursor-pointer">Log in</h4>
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 mx-1 text-sm w-2/5 text-black' placeholder='First name'></input>
                        <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 mx-1 text-sm w-2/5 text-black' placeholder='Last name'></input>
                    </div>
                    <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4 w-4/5 text-black' placeholder='Email'></input>
                    <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4 w-4/5 text-black' placeholder='Password'></input>
                    <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4 w-4/5 text-black' placeholder='Confirm Password'></input>
                    <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4 w-4/5 text-black' placeholder='Year of Admission'></input>
                    <button className="text-center bg-[#E5D283] text-[#213555] w-4/5 rounded-lg mt-12 mb-2 py-1 font-semibold">Sign up</button>
                </div>
            </div>

            </div >
    )
}