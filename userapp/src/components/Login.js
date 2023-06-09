import React, { useState } from "react";

const Login = ({google, setPage, emailS, signup}) =>{
    const [email, setEmail] = useState("username")
    const [pass, setPass] = useState("username")

    const handleSubmit = (e) =>{
        e.preventDefault(); // Prevent form submission behavior
    }
    return(
        //center all
        <div className="flex justify-center h-screen">
            {/* center 1/3 */}
            <div className="w-full sm:w-full md:w-1/2 flex justify-center h-screen">
                <div className="flex-none text-center w-full">
                    <h1 onClick={() => signup('login')} className="text-4xl pt-4 hover:cursor-pointer">Ecoclosure</h1>
                    <h3 className="text-xl">Decarbonating Regenerable Technology for a Sustainable Future</h3>
                    <hr className="h-px my-4 bg-black border-0 dark:bg-black"></hr>

                    <form onSubmit={handleSubmit} className="flex-none">
                        <div className="pb-2 pt-12">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                name="email"
                                className="border border-slate-500 rounded-lg h-10 w-1/2 px-2"
                                placeholder="Email"
                            />
                        </div>
                        <div className="py-2">
                            <input
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                                name="email"
                                className="border border-slate-500 rounded-lg h-10 w-1/2 px-2"
                                placeholder="Password"
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-1/2">
                                <p className="float-right text-green-500 hover:cursor-pointer">forgot password?</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center pt-4">
                            <button onClick={() =>emailS(email, pass)} className="w-1/2 bg-green-400 rounded-lg flex items-center justify-center border h-10 drop-shadow-md hover:cursor-pointer hover:bg-green-500">
                                <p className="text-white">Login</p>
                            </button>
                        </div>

                        <div className="flex items-center justify-center pt-8">
                            <hr className="h-px my-4 bg-black border-0 dark:bg-black w-1/6 inline-block"></hr>
                            <p className="inline-block px-4">or sign in with</p>
                            <hr className="h-px my-4 bg-black border-0 dark:bg-black w-1/6 inline-block"></hr>
                        </div>

                        <div className="w-full flex justify-center pt-4">
                            <button onClick={() => {
                                google()
                                setPage('devices')
                            }} className="w-1/6 h-10 bg-gray-500 flex items-center justify-center rounded-lg drop-shadow-md hover:cursor-pointer hover:bg-gray-600">
                                <p className="text-white">Google</p>
                            </button>
                        </div>
                    </form>
                    <div className="pt-4" onClick={() => {
                            signup('signup')
                            }}>
                        <p  className="inline-block">dont have an account?</p> <p className="text-sm inline-block hover:cursor-pointer text-green-400">join now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;