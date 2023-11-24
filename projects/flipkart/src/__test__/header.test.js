import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./components/Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from './redux/store'
import { BrowserRouter } from "react-router-dom"


describe("It Should render Header component correctly", () => {
    it("should load p tag in the header", () => {
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const pTag = screen.getByText('No User');
        expect(pTag).toBeInTheDocument();
    })

    it("should change the login button to logout", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginBtn = screen.getByText('Login');
        
        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByText('Logout');
        expect(logoutBtn).toBeInTheDocument();
    })

})