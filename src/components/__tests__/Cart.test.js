import Cart from "../Cart";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should Render Restaurant Menu Component", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  // Debug the initial render
  screen.debug(); // Check if "ADD +" exists

  // Ensure that the "Recommended" section appears
  const accordionHeader = await screen.findByText(/Recommended/i);
  fireEvent.click(accordionHeader);

  // Wait for content inside the expanded section
  await waitFor(() => expect(screen.queryAllByRole("listitem").length).toBeGreaterThan(0));

  
});
