import React from "react";
import Card from "./Card";

const Dash = ({setPage}) =>{
    return(
            <div className="flex justify-center h-5/6 w-full mt-10">
                <div className="w-10/12 h-full overflow-y-scroll grid grid-cols-4 gap-10">
                    <Card setPage={setPage}/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
    )
}

export default Dash;