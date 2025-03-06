import {render,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


test("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resdata = {MOCK_DATA}/>);
        //To pass the prop we will create a mock data for that prop first , fir testing
 
    const name = screen.getByText("Louis Burger");
    expect(name).toBeInTheDocument();
   
})