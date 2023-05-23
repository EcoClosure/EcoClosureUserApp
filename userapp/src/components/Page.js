import React, { useEffect, useState } from "react";
import Nav from "./NavBar";
import Devices from "./Devices";
import Account from "./Account";
import Settings from "./Settings";
import Contact from "./Contact";
import PanelSettings from "./PanelSettings";
import { globalSignOut } from "../config/firebase";
import {AiOutlineUser} from "react-icons/ai"
import { userName } from "../config/firebase";


const Page = ({page, setPage}) =>{
    let uName = userName()
    const [dashPage, setDashPage] = useState("devices")
    return(
        // page
        <div className="h-screen w-screen">
            {/* Header */}
            <div className="">
                {/* Nav */}
                <div className="inline-block w-1/4 p-2">
                    <Nav selected={page} onSelect={setDashPage} dash={setDashPage}></Nav>
                </div>
                {/* User */}
                <div className="float-right">
                    <p className="inline-block hover:cursor-default">Hello {uName}</p>
                    <AiOutlineUser onClick={() => {
                        globalSignOut()
                    }} className="w-10 h-10 m-2 inline-block hover:cursor-pointer"></AiOutlineUser>
                </div>
            </div>
            {/* body */}
            {
                (dashPage == "devices") ? <Devices setPage={setDashPage}/> 
                : (dashPage == "settings") ? <Settings/> 
                :(dashPage == "contact") ? <Contact/> 
                :(dashPage == "account") ? <Account/> 
                : <PanelSettings/>
            }
        </div>
    )
}

export default Page;