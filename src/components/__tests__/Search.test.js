import Body from "../Body";
import {fireEvent, render,screen,waitFor}  from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { BrowserRouter } from "react-router-dom";


//As jest down't understand the fetch function , so we have to mock fetch funtion

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


test("Should Search Res List for burger text input", async() => {
    render (
       <BrowserRouter>
           <Body/>
       </BrowserRouter>
    );
    const cardsBeforeSearch = await waitFor(() => screen.getAllByTestId("resCard"));
    expect(cardsBeforeSearch.length).toBe(8);


    const searchBtn = await waitFor(() => screen.getByRole("button", { name: /search/i }));
    const searchInput = await waitFor(() => screen.getByTestId("searchInput"));

    fireEvent.change(searchInput, { target: { value: "Burger" } });
    fireEvent.click(searchBtn);

// Screen shoulf load noof burger res card
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
    
})

test("Should filter Top Rated Res List for burger text input", async() => {
    render (
       <BrowserRouter>
           <Body/>
       </BrowserRouter>
    );
    const cardsBeforeFilter = await waitFor(() => screen.getAllByTestId("resCard"));
    expect(cardsBeforeFilter.length).toBe(8);


    const TopRatedBtn = await waitFor(() => screen.getByRole("button", { name: /Top-Rated Restaurants/i }));
    fireEvent.click(TopRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(1);
    
})



//Note:
// Whenever u are using a async,await function in the test case ,
//We have to Wrap our render method in act funtion