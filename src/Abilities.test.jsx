import { render, screen } from "@testing-library/react";
import Abilities from './Abilities';

describe('Abilities', () => {
    it('tests', () => {
        render(<Abilities />);
        expect(screen.getByText('Strength')).toBeInTheDocument();
        expect(screen.getByText('Dexterity')).toBeInTheDocument();
        expect(screen.getByText('Constitution')).toBeInTheDocument();
        expect(screen.getByText('Intelligence')).toBeInTheDocument();
        expect(screen.getByText('Wisdom')).toBeInTheDocument();
        expect(screen.getByText('Charisma')).toBeInTheDocument();
    })
});
