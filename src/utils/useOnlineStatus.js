//This hookswill show a message when you are offline means when your internet is off.

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //check if online
    const [onlineStatus,setOnlineStatus] = useState(true);

    //We will use Event listener: provided by the browser to check whether user is offline oronline
     //Now we will add a Event listener on the web only once and then it keeps track that we are offline or online
     useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })

     },[])
    //boolean value
    return onlineStatus;
}

export default useOnlineStatus