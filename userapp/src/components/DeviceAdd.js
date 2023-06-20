import React, {useState} from "react";
import Popup from "reactjs-popup";
import { addDevice} from "../config/firebase";

const DeviceAdd = ({add, setAdd, getData}) =>{
    const closeModal = () => {
        setError(false)
        setErrorMsg("")
        setAdd(false)
    }
    const [id, setId] = useState("")
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault(); // Prevent form submission behavior
    }
    return(
        <Popup open={add} closeOnDocumentClick onClose={closeModal} >
            <div className="p-4 bg-white drop-shadow-lg border-2">
                <div className="text-center">
                    <h1 className="text-2xl text-gray-700">Add a device</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div  className="h-full">
                        <p className="inline-block">Device ID:</p>
                        <input
                            onChange={(e) => setId(e.target.value)}
                            type="text"
                            name="name"
                            className="border border-slate-500 h-8 w-1/2 inline-block float-right"
                        />
                        
                    </div>
                    <div className="pt-4">
                        <button 
                            className="w-full text-white bg-green-400 rounded-lg flex items-center justify-center border h-10 drop-shadow-md hover:cursor-pointer hover:bg-green-500"
                            onClick={() =>{
                                addDevice(id)
                                .then((res)=>{
                                    if(res === ""){
                                        setError(true)
                                        setErrorMsg("Successfully added device")
                                        getData()
                                    } else {
                                        setErrorMsg(res)
                                        setError(true)
                                    }
                                })
                            }}
                        >Add device</button>
                        {error && 
                            <div>
                                <p>{errorMsg}</p>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </Popup>
    )
}

export default DeviceAdd;