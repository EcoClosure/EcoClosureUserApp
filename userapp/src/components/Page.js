import React, { useState } from "react";
import Nav from "./NavBar";
import Card from "./Card";
import Dash from "./Dash";
import PanelSettings from "./PanelSettings";
import { globalSignOut } from "../config/firebase";
import {AiOutlineUser} from "react-icons/ai"
const Page = ({page, setPage}) =>{
    const [dashPage, setDashPage] = useState("dash")
    return(
        // page
        <div className="h-screen w-screen">
            {/* Header */}
            <div className="">
                {/* Nav */}
                <div className="inline-block w-1/4 p-2">
                    <Nav selected={page} onSelect={setPage} dash={setDashPage}></Nav>
                </div>
                {/* User */}
                <div className="float-right">
                    <p className="inline-block hover:cursor-default">Hello User</p>
                    <AiOutlineUser onClick={() => {
                        globalSignOut()
                    }} className="w-10 h-10 m-2 inline-block hover:cursor-pointer"></AiOutlineUser>
                </div>
            </div>
            {/* body */}
            {
                (dashPage == "dash") ? <Dash setPage={setDashPage}/>
                : <PanelSettings/>
            }
            
        </div>
    )
}

export default Page;