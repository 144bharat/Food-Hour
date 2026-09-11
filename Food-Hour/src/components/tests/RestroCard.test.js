import { render, screen } from "@testing-library/react";
import RestroCard from "../RestroCard";
import {restroCardMockData} from "../../mocks/restroCardMock";
import "@testing-library/jest-dom";

test("Should render RestroCard component with props Data", () => {

    //THIS RESTROCARD COMPONENT CONTAINS PROPS TOO SO THEREFORE I NEED TO ADD PROPS HERE TOO.
    render(<RestroCard resData={restroCardMockData}/>)

    const name = screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument();

})