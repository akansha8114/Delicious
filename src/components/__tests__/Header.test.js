import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { fireEvent,render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("SHould render Header component with a login button",() => {
    //Render the component on the JSDOM
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    // const loginButton = screen.getByRole("button");

    //if i have multiple button and i want to check specifically for loginButton
    const loginButton2 = screen.getByRole("button",{name:"Login"});
        
    expect(loginButton2).toBeInTheDocument();
    
})

test("SHould render Header component with a Cart(0) item = 0",() => {
    //Render the component on the JSDOM
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const cartItems = screen.getByText("Cart(0)");
        
    expect(cartItems).toBeInTheDocument();
    
})

test("SHould render Header component with a Cart item = 0",() => {
    //Render the component on the JSDOM
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const cartItems = screen.getByText(/Cart/); //if i want to specifically check for Cart item
        
    expect(cartItems).toBeInTheDocument();
    
})



//To test below test case we need to use fireEvent
test("SHould change Login to logut button on click",() => {
    //Render the component on the JSDOM
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
        
    expect(logoutButton).toBeInTheDocument();
    
})