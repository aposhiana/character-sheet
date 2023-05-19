import { render, screen } from "@testing-library/react";
import Abilities from './Abilities';

describe('Abilities', () => {
    it('tests', () => {
        render(<Abilities />);
        expect(screen.getByText('Strength')).toBeInTheDocument();
        expect(screen.getByTitle('Strength Score')).toBeInTheDocument();
        expect(screen.getByTitle('Strength Modifier')).toBeInTheDocument();
    })
});
