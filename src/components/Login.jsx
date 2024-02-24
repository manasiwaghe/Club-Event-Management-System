import React from "react"

export default function Login(){
    return (
        < div className="flex flex-col justify-center items-center" >
        
            <div className="text-white flex flex-col justify-center items-center bg-[#222847]/55 py-16 px-20 rounded-3xl mt-28">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[#B5C9E5] font-bold text-3xl">Login</h1>
                    <div className="pt-5 pb-5 flex flex-row justify-center items-center">
                        <h4 className="font-normal ">Don't have an account? </h4>
                        <h4 className="text-[#4F709C] font-bold hover:cursor-pointer">Sign up</h4>
                    </div>
                    <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm w-full' placeholder='Email'></input>
                    <input type='text' className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4 w-full' placeholder='Password'></input>
                    <h4 className="text-sm text-left text-[#4F709C] font-medium mt-2">Forgot Password?</h4>
                    <button className="text-center bg-[#E5D283] text-[#213555] w-full rounded-lg mt-5 mb-2 py-1 font-semibold">Login</button>
                    <h4 className="text-[#F0F0F0]/60 text-sm ">or</h4>
                    <button className="text-center bg-white text-[#213555] w-full rounded-lg mt-2 py-1 font-semibold">Login with Google</button>
                </div>
            </div>

            </div >
    )
}