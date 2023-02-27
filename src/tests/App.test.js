import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Connect 4/i);
  expect(linkElement).toBeInTheDocument();
});
