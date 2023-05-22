import React, { useState } from "react";
import Dropdown from "./Dropdown";
const PanelSettings = () =>{
    const [choice, setChoice] = useState("p1")
    const options = [
        { label: "Panel 1",value: "p1" },
        { label: "Panel 2", value: "p2" },
    ]
    return (
        <div className="w-full h-full">
            <Dropdown options={options} onSelect={setChoice}/>
            <div className="flex justify-around h-full w-full">
                {/* left */}
                <div className="w-1/3 h-5/6 bg-red-400 inline-block">

                </div>
                {/* right */}
                <div className="w-1/3 h-5/6 inline-block bg-green-400">

                </div>
            </div>
        </div>
    )
}

export default PanelSettings;