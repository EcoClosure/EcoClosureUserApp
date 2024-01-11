import React, {useState, useEffect} from "react";
import Popup from "reactjs-popup";
const DeviceEdit = ({name, edit, setEdit}) =>{
    const closeModal = () => setEdit(false);
    const [editName, setEditName] = useState(name)
    const [change, setChange] = useState(false);

    useEffect(()=>{
        if(change === true){
            console.log(editName)
            setChange(false)
        }

    },[change])

    return(
            <Popup open={edit} closeOnDocumentClick onClose={closeModal} className="w-full h-full">
                <div className="h-full w-full bg-white drop-shadow-lg border p-4">
                    
                        <div className="flex justify-center items-center text-center w-full ">
                            <h1 className="text-xl w-full">{name}</h1>
                        </div>
                        <form className="justify-center">
                            <p className="inline-block pr-5">Edit name:</p>
                            <input
                                onChange={(e) => setEditName(e.target.value)}
                                type="text"
                                name="name"
                                className="border border-slate-500  h-8 w-1/2"
                            />
                            <span className="hover:cursor-pointer block" onClick={()=>setChange(true)}>Submit</span>
                        </form>
                    
                </div>
            </Popup>
    )

}   

export default DeviceEdit