{/* <div id ='parent'>
    <div id = "child">
        <h1> Hello React</h1>
    </div>
</div> */}

const parent = React.createElement("div", {id: "parent"},
     (React.createElement("div", {id: "child"},
     React.createElement("h1", {}, "Hello React"))));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

{/* <div id ='parent'>
    <div id = "child">
        <h1> Hello React</h1>
        <h2> Hello React</h2>
    </div>
</div> */}

//if more than one 'h' tag in the same div use array to create more than one element 
//in the same div
const parent2 = React.createElement("div", {id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "Hello React"),
        React.createElement("h2", {}, "Hello React")] 
    )
)

{/* <div id ='parent'>
    <div id = "child">
        <h1> Hello React</h1>
        <h2> Hello React</h2>
    </div>
    <div id = "child2">
        <h1> Hello React</h1>
        <h2> Hello React</h2>
    </div>
</div> */}

const parent3 = React.createElement("div", {id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "Hello React"),
        React.createElement("h2", {}, "Hello React")] 
    ,React.createElement("div",{id:"child2"},
        [React.createElement("h1", {}, "Hello React"),
        React.createElement("h2", {}, "Hello React")])
)])