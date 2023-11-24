import { render, screen } from "@testing-library/react"
import Product from "../components/Product"
import { productMock } from "./mock/productMock"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it('should render Product component with props data', () => {
    render(
        <BrowserRouter>
            <Product {...productMock} />
        </BrowserRouter>
    )
    
    const title = screen.getByText('iPhone 9');

    expect(title).toBeInTheDocument();
})