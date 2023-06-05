import { render, screen } from "@testing-library/react"
import SavingThrows from "./SavingThrows.jsx";

describe('SavingThrows', () => {
    it('tests', () => {
        render(<SavingThrows />);
        expect(screen.getByText('Saving Throws')).toBeInTheDocument();
    });
});
