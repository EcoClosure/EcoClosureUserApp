import React from "react";

const Nav = ({selected, onSelect, dash}) =>{
    let t1, t2, t3, t4;
    t1 = t2 = t3 = t4 = ""
    if(selected === 'devices'){
        t1 = "border-b-4 rounded-sm"
    } else if (selected === 'settings'){
        t2 = "border-b-4 rounded-sm"
    } else if (selected === 'account'){
        t3 = "border-b-4 rounded-sm"
    } else if (selected === 'contact'){
        t4 = "border-b-4 rounded-sm"
    }

    return(
        <div className="grid grid-cols-4 items-center justify-center border-b overflow-visible ">
            <div onClick={() => {
                onSelect('devices')
                dash("dash")
                }} 
                className={`h-10 items-center flex justify-center hover:cursor-pointer ${t1}`}>
                <p>Devices</p>
            </div>
            <div onClick={() => onSelect('settings')} className={`h-10 items-center flex justify-center hover:cursor-pointer ${t2}`}>
                <p>Settings</p>
            </div>
            <div onClick={() => onSelect('account')} className={`h-10 items-center flex justify-center hover:cursor-pointer ${t3}`}>
                <p>Account</p>
            </div>
            <div onClick={() => onSelect('contact')} className={`h-10 items-center flex justify-center hover:cursor-pointer ${t4}`}>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default Nav;