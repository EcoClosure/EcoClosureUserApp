import React, { useEffect, useState } from "react";
import Card from "./Card";
import InfiniteScroll from 'react-infinite-scroll-component';
import { panelQuery } from "../config/firebase";

const Devices = ({setPage, user}) =>{
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState(null)
    const [len, setLen] = useState(1)

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
            loaded ? <div>
            <div className="flex justify-center h-5/6 w-full  overflow-scroll border-t " >
                <InfiniteScroll               
                    dataLength={len}
                    loader={<h4>Loading...</h4>}
                    
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="w-screen flex justify-center h-full">
                        <div className="w-11/12 h-full border-t">
                        {data.map((item)=>{
                            console.log(item)
                            return <Card name={item.name} key={item.id} />;
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