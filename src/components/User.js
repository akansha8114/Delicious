//Now we are going to develop a Class based component in the About page where i will provide 
// the information about the team members which we will fetch from the git hub.

//Step 24: First , we will create a User component using function based component

import { useState,useEffect } from "react";


const User = ({name}) =>{
    const [count,setcount] = useState(0);

   
    useEffect(() => {
         //this will start a time and will not stop after the switching the component also
        const timer = setInterval(() => {
            console.log("Use Effect is rendering...");
        },1000);

        //To stop a time we will clear the interval
        //this return statement will be called when we will unmount the component
        return () => {
            
            clearInterval(timer);
            console.log("Use Effect is unmounting...");
        };
    },[]);

    return (
    <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{setcount(count + 1)}}>Click me</button>
        <h2>Name: {name}</h2>
        <h3>Role: Frontend Developer</h3>
        <h4>Location: Delhi</h4>
        <h4>Contact: akanshavgk2004@gmail.com</h4>
    </div>
    );
};

export default User;