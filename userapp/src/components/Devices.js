import React, { useEffect, useState } from "react";
import Card from "./Card";
import InfiniteScroll from 'react-infinite-scroll-component';
import { panelQuery } from "../config/firebase";
import {GrAdd} from 'react-icons/gr'
import DeviceEdit from "./DeviceEdit";
import DeviceAdd from "./DeviceAdd";

const Devices = ({setPage, user}) =>{
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState(null)
    const [len, setLen] = useState(1)
    const [edit, setEdit] = useState(false)
    const [editName, setEditName] = useState("")
    const [add, setAdd] = useState(false)
    const getData = async () => {
        const res = await panelQuery(user.uid);
        if (data) {
          return;
        }
        if (res) {
          setData(res);
          setLen(res.length);
          setLoaded(true);
        }
      };

    useEffect(()=>{
        getData()
    },[])

 

    useEffect(()=>{
        if(data){
            setLoaded(true)
        }
    },[data])
    
    return(
    
    <div>
        {
        edit && <DeviceEdit name={editName} edit={edit} setEdit={setEdit}></DeviceEdit>
        }
        {
            add && <DeviceAdd add={add} setAdd={setAdd} getData={getData}/>
        }
        {
            loaded ? <div>
                <div className="flex h-4/6 justify-center px-10 py-6">
                    <div className="flex-none w-full">
                        <h1 className="inline-block text-4xl md:text-6xl ">Your Devices</h1>
                            <GrAdd onClick={()=>{
                                setAdd(true)
                            }} className="h-10 w-10 md:h-14 md:w-14 inline-block float-right hover:cursor-pointer "/>
                    </div>
                </div>
            <div className="flex justify-center h-4/6 w-full  overflow-scroll border-t " >
                <InfiniteScroll               
                    dataLength={len}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                          <b>You have reached the end of your panels</b>
                        </p>
                    }
                >
                    <div className="w-screen flex justify-center h-full">
                        <div className="w-11/12 h-full border-t">
                        {data.map((item)=>{
                            return <Card name={item.name} setEdit={setEdit} setName={setEditName} key={item.id} />;
                        })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div> 
            </div> :
            <div>Loading</div> 
        }
        </div>
    )
}



export default Devices;