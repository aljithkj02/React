import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom"

describe("Contact page test cases", () => {
    test("Should load Contact component", () => {
        render(<Contact />)
        
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load Button in Contact component", () => {
        render(<Contact />)
        
        const button = screen.getByText('Submit');
        
        expect(button).toBeInTheDocument();
    })
    
    it("Should load Input in Contact component", () => {
        render(<Contact />)
        
        const input = screen.getByPlaceholderText('Name');
        
        expect(input).toBeInTheDocument();
    })
    
    test("Should load 2 Input boxes in Contact component", () => {
        render(<Contact />)
        
        const input = screen.getAllByRole('textbox');
        
        expect(input.length).toBe(2);
    })
})