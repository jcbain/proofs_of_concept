import { getByTestId, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const renderedItem = await screen.getByTestId("title");
  // const renderedItem = await screen.findByTestId(
  //   "grocery-list",
  //   {},
  //   { timeout: 4000 }
  // );
  expect(renderedItem).toBeInTheDocument();
});
