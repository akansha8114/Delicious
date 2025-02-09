import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"},
     (React.createElement("div", {id: "child"},
     React.createElement("h1", {}, "Hello React"))));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



//if more than one 'h' tag in the same div use array to create more than one element 
//in the same div
const parent2 = React.createElement("div", {id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "Hello React"),
        React.createElement("h2", {}, "Hello React")] 
    )
)


const parent3 = React.createElement("div", {id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "Hello React"),
        React.createElement("h2", {}, "Hello React")] 
    ,React.createElement("div",{id:"child2"},
        [React.createElement("h1", {}, "Hello React"),
        React.createElement("h2", {}, "Hello React")])
)])