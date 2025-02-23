//Now we are going to develop a Class based component in the About page where i will provide 
// the information about the team members which we will fetch from the git hub.

//Step 24: First , we will create a User component using function based component

const User = ({name}) =>{
    return (
    <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Role: Frontend Developer</h3>
        <h4>Location: Delhi</h4>
        <h4>Contact: akanshavgk2004@gmail.com</h4>
    </div>
    );
};

export default User;