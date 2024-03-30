import { useRef } from "react";
import React from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function Signup(){
    const registerForm = useRef(null)
  const {registerUser} = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password1 = registerForm.current.password1.value
    const password2 = registerForm.current.password2.value

    if(password1 !== password2){
        alert('Passwords did not match!')
        return 
    }
    
    const userInfo = {name, email, password1, password2}

    registerUser(userInfo)
}

    return (

        < div className="flex flex-col justify-center items-center" >
        
            <div className="text-white flex flex-col justify-center items-center bg-[#222847]/55 py-16 px-10 rounded-3xl mt-20">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[#B5C9E5] font-bold text-3xl pb-5">Sign up</h1>
                    <div className="pt-5 pb-5 flex flex-row justify-center items-center">
                        <h4 className="font-normal ">Already have an account? </h4>
                        <h4 className="text-[#4F709C] font-bold hover:cursor-pointer">
                            <Link to='/login'>Log in</Link></h4>
                    </div>
                    <form ref={registerForm} onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center">
                    <input type='text' name="name" className=' border-2 border-slate-200 rounded-lg px-5 py-1 mx-1 text-sm  text-black' placeholder='Name'></input>
                    <input type='email' name="email" className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4 text-black' placeholder='Email'></input>
                    <input type='password'  name="password1"  className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4  text-black' placeholder='Password'></input>
                    <input type='password'  name="password2" className=' border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4  text-black' placeholder='Confirm Password'></input>
                    <button className="text-center bg-[#E5D283] text-[#213555] w-3/5 rounded-lg mt-12 mb-2 py-1 font-semibold">Sign up</button>
                    </div>
                    </form>
                </div>
            </div>

            </div >
    )
}