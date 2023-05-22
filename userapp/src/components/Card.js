import React from "react";

const Card = ({setPage}) =>{
    return(
        <div className="w-full h-1/2 bg-red-400 " onClick = {() => setPage("pannelsettings")}></div>
    )
}
export default Card;