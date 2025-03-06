import Contact from "../Contact";
import { render ,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
//Step 46 : testing the contact component , if the component is rendering or not
//Note : Whenever we are testing a component of react we have to render the component on jsDom first


describe("Testing Contact Component", () => {
    test("Should load the contact component", () => {
        //Render the component on the JSDOM
        render(<Contact/>);
        //Now check if the component is rendering/load or not
        //Now this screen.getByRole("heading") will return all the elements which have the heading element
        const heading = screen.getByRole("heading");
    
        //this function will check whethe this element is in the document or not
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside contact component", () => {
        //Render the component on the JSDOM
        render(<Contact/>);
        //Now check if the component is rendering/load or not
        //Now this screen.getByRole("button") will return all the elements which have the heading element
        const button = screen.getByRole("button"); //OR screen.getByText("Submit");
    
        //this function will check whethe this element is in the document or not
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name inside contact component", () => {
        //Render the component on the JSDOM
        render(<Contact/>);
        //Now check if the component is rendering/load or not
       
        const inputName = screen.getByPlaceholderText("message"); 
    
        //this function will check whethe this element is in the document or not
        expect(inputName).toBeInTheDocument();
    })
    
    it("Should load two input boxes inside contact component", () => {
        //Render the component on the JSDOM
        render(<Contact/>);
        //Now check if the component is rendering/load or not
       
        const inputBoxes = screen.getAllByRole("textbox"); //For multiple functions use getAll
    
        //this function will check whethe this element is in the document or not
        expect(inputBoxes.length).toBe(2); //2 because we have 2 input boxes ();
    })
})

//Note: instead of "test" keyword  we can use "it" also.