import { useState, useEffect } from "react";
import { RESMENU_URL } from "../utils/constants";

const useRestaurantMenu = (id) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
    useEffect(()=>{
        fetchRestroInfo();
    },[]);
    
    async function fetchRestroInfo(){
        const data = await fetch(RESMENU_URL+id);
        const json = await data.json();
        // console.log("Custom Hook Menu data: ", json);
        setRestaurantInfo(json);
    }

    return restaurantInfo;
}

export default useRestaurantMenu;