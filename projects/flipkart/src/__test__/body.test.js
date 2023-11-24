import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import '@testing-library/jest-dom'
import { Provider } from "react-redux";
import appStore from "../redux/store";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data)
        }
    });
})

it('Should render the Body component', () => {
    render(
        <Provider store={appStore}>
            <Body />
        </Provider>
    )
})