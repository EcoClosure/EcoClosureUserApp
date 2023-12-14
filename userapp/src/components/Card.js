import React from "react";
import panel from'../files/panel.png';
import Popup from "./Popup";
import {CiEdit} from 'react-icons/ci'
const Card = ({name, setName, setEdit,key, setPage}) =>{
    let status = 'good'
    let mode = 'off'
    let edited = '1/12/23'
    const handleClick = () =>{
        console.log('clicked')
        setName(name)
        setEdit(true)
    }

    const handleImgClick = () =>{
        setPage('controls')
    }

    return(
        <div className="md:w-1/4 w-full md:inline-block">
            <div className="w-full h-full flex justify-center">
                <div className="w-11/12 py-4 ">
                    <div className="w-full h-full bg-white drop-shadow-md rounded-lg">
                        <div className="p-4 flex justify-start">
                            <div className="inline-block w-1/3 ">
                                <img className="object-fit: contain hover:cursor-pointer" src={panel} onClick={handleImgClick}></img>
                            </div>
                            <div className="inline-block w-2/3 ">
                                <div className="w-full ">
                                    <h1 className="inline-block">{name}</h1>
                                    <CiEdit onClick={handleClick} className="h-8 w-8 inline-block float-right"/>
                                </div>
                                <div>
                                    <div>
                                        <p className="inline-block pr-2">Status: </p> 
                                        <p className="inline-block text-emerald-400">{status}</p>
                                    </div>
                                    <div>
                                        <p className="inline-block pr-2">Manual Mode: </p> 
                                        <p className="inline-block text-red-500">{mode}</p>
                                    </div>
                                    <p>Last edited: {edited}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Card;