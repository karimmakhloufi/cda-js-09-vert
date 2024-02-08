import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AdCard from "../components/AdCard";

describe("Counter", () => {
  it("renders the AdCard", () => {
    render(
      <AdCard
        category={{ id: 1, name: "vehicle" }}
        description="this car is beautiful"
        imageUrl="zlkjsdf"
        link="slskdjf"
        location="slkdfj"
        owner="sdfsdf"
        price={15000}
        title="I sell my car"
        id={1}
        key={1}
      />
    );

    const title = screen.getByText(/sell my Car/i);

    expect(title).toBeInTheDocument();
  });
});
