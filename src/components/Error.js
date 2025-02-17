//This is a hook which is used to get the error when some other error occurs
import { useRouteError } from "react-router-dom"


const Error = ()=>{
    //This hook will give all the errors in the path which could be possible
    //React router Dom will catch all the errors and give it to this hook/object
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!! Page Not Found</h1> 
            <h2>Something went wrong</h2>
            <h3>{err.status}</h3>
        </div>
    )
}
export default Error;