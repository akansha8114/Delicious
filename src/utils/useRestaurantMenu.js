//This Hooks will take a resId as a prop and its job is to return a resInfo object

import { useEffect ,useState} from "react";
import {Menu_API} from "../utils/contents";
const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    //fetchdata
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(Menu_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data);
    }

    return resInfo;
}
export default useRestaurantMenu;