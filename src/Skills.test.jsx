import { render, screen } from "@testing-library/react";
import Skills from './Skills';

describe('Skills', () => {
    it('tests', () => {
        render(<Skills />);
        expect(screen.getByLabelText('Athletics')).toBeInTheDocument();
        expect(screen.getByText('Str')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
    })
});
