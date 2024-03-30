import React,{useEffect,useRef} from "react"
import { Link , useNavigate} from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function Login(){
    const navigate = useNavigate()
    const {user, loginUser} = useAuth()
        
    const loginForm = useRef(null)

    useEffect(() => {
        if(user){
            navigate('/adminevent')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current['0'].value
        const password = loginForm.current['1'].value
        
        const userInfo = {email, password}
    
        loginUser(userInfo)
    }

    return (
        < div className="flex flex-col justify-center items-center" > 
            <div className="text-white flex flex-col justify-center items-center bg-[#222847]/55 py-16 px-20 rounded-3xl mt-28">
        
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[#B5C9E5] font-bold text-3xl">Login</h1>
                    <div className="pt-5 pb-5 flex flex-row justify-center items-center">
                        <h4 className="font-normal ">Don't have an account? </h4>
                        <h4 className="text-[#4F709C] font-bold hover:cursor-pointer">
                            <Link to='/signup'>Sign up</Link>
                            </h4>
                    </div>
                    <form ref={loginForm} onSubmit={handleSubmit}>
                    <input type="email" id="email" className=' text-black border-2 border-slate-200 rounded-lg px-5 py-1 text-sm w-full' placeholder='Email'></input>
                    <input type="password" id="password" className=' text-black border-2 border-slate-200 rounded-lg px-5 py-1 text-sm mt-4 w-full' placeholder='Password'></input>
                    <button type="submit" className="text-center bg-[#E5D283] text-[#213555] w-full rounded-lg mt-5 mb-2 py-1 font-semibold">Login</button>
                    </form>
                </div>
                
            </div>

            </div >
    )
}