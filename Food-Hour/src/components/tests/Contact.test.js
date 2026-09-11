// test("Description of test and what it tests: ", () => {
//     //This function tests what written inside it.

//     //SO this sum function i want to test and we already have this function inside my components folder.
//     const result = sum(3, 4);

//     expect(result).toBe(7);

// })


import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("In this test case i am checking whether my contact page is loaded properly or not!", () => {

    //Whenever we are testing the component then i need to render my component into jsdom 1st.
    render(<Contact />)

    const heading = screen.getByText("Contact Us");


    //TO LOAD THE COMPONENT INTO JSDOM WE NEED THIS: @babel/preset-react PACKAGE TO BE INSTALLED. BECAUSE THIS PACKAGE WILL CONVERT JSX TO HTML FOR JSDOM RENDERING.

    expect(heading).toBeInTheDocument()
})