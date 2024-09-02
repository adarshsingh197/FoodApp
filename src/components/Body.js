
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
import { useEffect } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body=()=>{
  const [listofrestaurant,setlistofrestaurant]= useState([]);
  const [filteredrestaurant,setfilteredrestaurant]=useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const [searchtext,setSearchtext]=useState("");

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setlistofrestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setfilteredrestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
    
  }
  const onlineStatus = useOnlineStatus();
  if(onlineStatus==false){
   return  <h1>Looks Like you are Offline</h1>
  }
  if(listofrestaurant.length==0){
    return <Shimmer/>
  }

    return(
        <div className="Body">
          <div className="Search m-4  flex h-6 items-center gap-4  ">
            <input type="text" className="border-solid border-black"  placeholder="search restaurant" value={searchtext} onChange={(e)=>{setSearchtext(e.target.value)}}/>
            <button className="bg-green-100 py-1 rounded-lg px-4 flex items-center" onClick={()=>{
            const filteredrestaurant=  listofrestaurant.filter((res)=>{
              console.log(res.info.name);
                return res.info.name.toLowerCase().includes(searchtext.toLowerCase());
              })
              setfilteredrestaurant(filteredrestaurant)
            }}>Search restaurant</button>
               <div className="">
              <button className="bg-gray-100 py-1  rounded-lg px-4 flex items-center" onClick={()=>{
                let newobj=   listofrestaurant.filter((res)=>{
                  console.log(res.info);
                  return res.info.avgRating>4
                })
                setfilteredrestaurant(newobj)

              }}>Top Rated Restaurants</button>
            </div>
          </div>
         
            <div className="res-container">
                {
                filteredrestaurant.map((resObj)=>{

                    return(
                      <Link to={`/restaurants/${resObj.info.id}`}>
                      <RestaurantCard key={resObj.info.id} resData={resObj.info} />
                  </Link>
                  

                    )

                })
            }
           
          
            </div>

        </div>
    )
}
export default Body;