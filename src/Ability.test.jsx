import { render, screen } from "@testing-library/react";
import Ability from './Ability';

describe('Ability', () => {
    it('tests', () => {
        render(<Ability />);
        expect(screen.getByText('Strength')).toBeInTheDocument();
        expect(screen.getByTitle('Strength Score')).toBeInTheDocument();
        expect(screen.getByTitle('Strength Modifier')).toBeInTheDocument();
    })
});
