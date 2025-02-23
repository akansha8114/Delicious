//Step 25: Now i am building a class based component in the About page where i will provide 
// the information about the team members which we will fetch from the git hub.
import React from "react";  //React.component will come from here

//1. Declare a class using extends keyword which shows it is a class based component
class UserClass extends React.Component{

    //4. How do we recieve a props? With the help of constructor
    constructor(props){
        super(props);  //Why super is used? Calls the parent class constructor, which is required to initialize the new component 

        console.log(props);
        //Now i Have recieveed 'name prop' inside my construrctor

        //5. Creating a state variable
        //it is a big large object which will store the data
        this.state = {
            //9. updating the json data on the web by using state varaible
            userInfo :{
                //Default data
                name: "Dummy",
                location : "delhi",
                
                

            },
            count : 0,
        };
    }

    //8 . this method will be called after the component is rendered.
    //this method is used to make a API call bas uske aage 'async' call karenge
    async componentDidMount(){
        console.log(" Child component is Mounted");

        const data = await fetch('https://api.github.com/users/akansha8114');
        const json =  await data.json();
        console.log(json);

        //10. updating the state variable
        this.setState({
            userInfo : json,
        });
    }
    //2.Now use render method which will return a jsx piece of code
    render(){
        // const {name , other_props_name} = this.props;  //This is called destructuring

        //3. Now return the jsx piece of code
        return(
           <div className="user-card">
            {/* 6.calling the count state variable on the browser */}
              <h1>Count: {this.state.count}</h1>

            {/* 7.Updating the count on the browser using button  */}
              <button 
                onClick = {() => {
                   this.setState({
                     count : this.state.count + 1,
                    //if i want to update another state variable i can do it in the same object
                    //   count2 : this.state.count + 1,
                   });
                }}>Click me
               </button>
               <br/><br/>

               <img src= {this.state.userInfo.avatar_url}></img>

              <h2>Name: {this.state.userInfo.name}</h2>

              <h3>Role: Frontend Developer</h3>
              <h4>Location:{this.state.userInfo.location}</h4>
              <h4>Contact: akanshavgk2004@gmail.com</h4>
           </div>
        )
    }
}

export default UserClass;