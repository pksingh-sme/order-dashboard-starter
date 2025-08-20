import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders dashboard title", () => {
  render(<App />);
  expect(screen.getByText(/Order Dashboard/i)).toBeInTheDocument();
});
