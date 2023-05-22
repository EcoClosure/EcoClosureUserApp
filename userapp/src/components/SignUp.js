import React, { useState } from "react";
import { createWithEmailPass } from "../config/firebase";
const SignUp = ({login}) =>{
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [user, setUser] = useState("")
    const [cpass, setCpass] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault(); // Prevent form submission behavior
    }
    return(
        //center all
        <div className="flex justify-center h-screen">
        {/* center 1/3 */}
        <div className="w-full sm:w-full md:w-1/2 flex justify-center h-screen">
            <div className="flex-none text-center w-full">
                <h1 className="text-4xl pt-4">Ecoclosure</h1>
                <h3 className="text-xl">Decarbonating Regenerable Technology for a Sustainable Future</h3>
                <hr className="h-px my-4 bg-black border-0 dark:bg-black"></hr>
                {/* form */}
                <form onSubmit={handleSubmit} className="flex-none">
                        {/* Email */}
                        <div className="pb-2 pt-12">
                            <div className="w-full flex justify-center">
                                <div className="w-1/2">
                                    <p className="float-left">Email</p>
                                </div>
                            </div>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                name="email"
                                className="border border-slate-500 rounded-lg h-10 w-1/2 px-2"
                            />
                        </div>
                        {/* Username */}
                        <div className="py-2">
                            <div className="w-full flex justify-center">
                                <div className="w-1/2">
                                    <p className="float-left">Username</p>
                                </div>
                            </div>
                            <input
                                onChange={(e) => setUser(e.target.value)}
                                type="text" 
                                name="email"
                                className="border border-slate-500 rounded-lg h-10 w-1/2 px-2"
                            />
                        </div>
                        {/* Password */}
                        <div className="py-2">
                            <div className="w-full flex justify-center">
                                <div className="w-1/2">
                                    <p className="float-left">Password</p>
                                </div>
                            </div>
                            <input
                                onChange={(e) => setPass(e.target.value)}
                                type="password" 
                                name="email"
                                className="border border-slate-500 rounded-lg h-10 w-1/2 px-2"
                            />
                        </div>
                        {/* Confirm passowrd */}
                        <div className="py-2">
                            <div className="w-full flex justify-center">
                                <div className="w-1/2">
                                    <p className="float-left">Confirm Password</p>
                                </div>
                            </div>
                            <input
                                onChange={(e) => setCpass(e.target.value)}
                                type="password" 
                                name="email"
                                className="border border-slate-500 rounded-lg h-10 w-1/2 px-2"
                            />
                        </div>
                        
                        <div className="w-full flex justify-center pt-4">
                            <button 
                                className="w-1/2 bg-green-400 rounded-lg flex items-center justify-center border h-10 drop-shadow-md hover:cursor-pointer hover:bg-green-500"
                                onClick={()=>{
                                    createWithEmailPass(email, user, pass, cpass)
                                    login('login')
                                }}
                            >
                                <p className="text-white">Create Account</p>
                            </button>
                        </div>
                    </form>
                    {/* end form */}
                </div>
            </div>
        </div>
    )
}

export default SignUp;