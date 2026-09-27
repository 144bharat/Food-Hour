import { useState, useEffect } from "react";
import { RESMENU_URL } from "../utils/constants";
import { RESMENUDATA } from "../utils/mockData";

const useRestaurantMenu = (id) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(()=>{
        fetchRestroInfo();
    },[]);
    
    async function fetchRestroInfo(){
        if(process.env.NODE_ENV === "development"){
            const data = await fetch(RESMENU_URL+id);
            const json = await data.json();
            // console.log("RESMENU DATA: ", json);
            setRestaurantInfo(json);
        }else{
            const data = RESMENUDATA(id);
            setRestaurantInfo(data);
        }
    }

    return restaurantInfo;
}

export default useRestaurantMenu;