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


const Page = ({page, setPage, user}) =>{    
    const [dashPage, setDashPage] = useState("devices")
    const [drop, setDrop] = useState(false)
    let uName = user.displayName

    return(
        // page
        <div className="h-screen w-screen overflow-hidden">
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
                        if(drop == true){
                            setDrop(false)
                        } else {
                            setDrop(true)
                        }
                        
                    }} className="w-10 h-10 m-2 inline-block hover:cursor-pointer"></AiOutlineUser>
                </div>
                {drop?<div>
                    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <p class="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</p>
                        <p class="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-1">Support</p>
                        <p class="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-2">License</p>
                        <p onClick={()=>{globalSignOut()}} class="text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer" role="menuitem" tabindex="-1" id="menu-item-3">Sign Out</p>
                    </div>
                    </div>
                </div>:<div/>}

            </div>
            {/* body */}
            {
                (dashPage == "devices") ? <Devices setPage={setDashPage} user={user}/> 
                : (dashPage == "settings") ? <Settings/> 
                :(dashPage == "contact") ? <Contact/> 
                :(dashPage == "account") ? <Account/> 
                : <PanelSettings/>
            }
        </div>
    )
}

export default Page;