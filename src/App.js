import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { useState } from "react";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";



 //Step 26 : To do a lazy loading of the Grocery component import grocery component like this.
 const Grocery = lazy(()=> import ("./components/Grocery.js"));
//Step1 : Lets make a one top level component in which all component resides
const AppLayout = () => {

    const[userName,setUserName] = useState("Guest");

   
    return (
        //Step 39 : Now we will provide the Redux store to the whole app
        <Provider store={appStore}>
        // Step 35 : now with the help of the UserContextProvider we can access the context data through out the app and can pass new data also
        <UserContext.Provider value = {{LoggedInUser:userName,setUserName}}>
         <div className="app">
            {/* In our our app we will keep 
            Header,Body,Footer*/}
            <Header />
            
            {/* Now we will push the children according to the their routes */}
            {/* Step 17 : Outlet is a component provided by react router dom used to push the children */}
            {/* This outlet will be filled with the children according to the path */}
            <Outlet />
        </div>
        </UserContext.Provider> 
        </Provider> 
    );
};
//Step 15 : Now we will create routing configuration to develop routes
//configuration: means some information that define what will happen on the specific route
//so this 'createBrowserRouter' will take a list of paths
//Path is nothing but an object
//in this we will define if my path is '/' then what will happen and any other path
const appRouter = createBrowserRouter([
    {
    path: "/",
    //Element : write a name of the component which you want to render on that path
    element: <AppLayout />,
    //ErrorElement : write a name of the component which you want to render when there is any error
    errorElement: <Error />,
    //As if we are passing the below paths normally then it was removing the header component 
    //We want during rendering these components/paths the header component should remain on top
    //That is why we are passing these paths in children
    children: [
        {
            path: "/",
            element: <Body/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        { 
            path: "/contact",
            
            element: <Contact/>,
        },
        {
            // Step 20 : in this we will give the dynamic path which will show on clicking any of the restaurant card
            path : "/restaurants/:resId", //this resid is a dynamic id which will change according to the restaurant
            element : <RestaurantMenu/>
        },
        {
            path:"/grocery",
            element :<Suspense fallback={<Shimmer/>}><Grocery/> </Suspense>
        }
    ]
    },
    
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Step 16 : Earlier we were using ReactDOM.render() but now we will use <RouterProvider> to render the routes
root.render(<RouterProvider router={appRouter} />);
  