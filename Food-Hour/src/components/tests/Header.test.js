import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";

import { Link } from "react-router";


test("Should render Header Component with a login button", () => {
    
    //We cannot directly render the Header component because it is using react-redux and react-router-dom two external libraries.
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginbutton = screen.getByRole("button",{name:"log-in"})

    expect(loginbutton).toBeInTheDocument();
});


test("Should render Header Component with Cart items 0", () => {
    
    //We cannot directly render the Header component because it is using react-redux and react-router-dom two external libraries.
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("( 0 )")

    expect(cartItems).toBeInTheDocument();
});


test("Should change login button to logout on click", () => {
    
    //We cannot directly render the Header component because it is using react-redux and react-router-dom two external libraries.
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginbutton = screen.getByRole("button",{name:"log-in"})

    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button", {name: "log-out"})
    expect(logoutbutton).toBeInTheDocument();
});


