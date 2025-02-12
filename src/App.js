
import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header.js";
import Body from "./components/Body.js";


//Step1 : Lets make a one top level component in which all component resides
const AppLayout = () => {
    return (
        <div className="app">
            {/* In our our app we will keep 
            Header,Body,Footer*/}
            <Header />
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
 