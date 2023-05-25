import React, {useState} from "react";
import Popup from "reactjs-popup";
const DeviceEdit = ({name, edit, setEdit}) =>{
    const closeModal = () => setEdit(false);
    const [editName, setEditName] = useState(name)
    return(
            <Popup open={edit} closeOnDocumentClick onClose={closeModal} className="w-full h-full">
                <div className="h-full w-full bg-white drop-shadow-lg border p-4">
                    
                        <div className="flex justify-center items-center text-center w-full ">
                            <h1 className="text-xl w-full">{name}</h1>
                        </div>
                        <form>
                            <p className="inline-block pr-5">Edit name:</p>
                            <input
                                onChange={(e) => setEditName(e.target.value)}
                                type="text"
                                name="name"
                                className="border border-slate-500  h-8 w-1/2 "
                            />
                        </form>
                    
                </div>
            </Popup>
    )

}   

export default DeviceEdit