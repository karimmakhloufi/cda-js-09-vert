import SearchBar from "@/components/SearchBar";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Counter", () => {
  it("renders the searchform", () => {
    const mockPush = jest.fn();

    render(<SearchBar router={{ push: mockPush }} />);

    const input = screen.getByLabelText("search-input");

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "car" } });

    const searchButton = screen.getByRole("button");

    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith("/ad/search/car");
  });
});
