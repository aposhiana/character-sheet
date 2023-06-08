import { render, screen } from "@testing-library/react";
import Skill from './Skill';

describe('Skill', () => {
    it('tests', () => {
        render(<Skill name="Acrobatics" abilityAbbreviation={'Dex'} modifier={'+2'} />);
        expect(screen.getByLabelText('Acrobatics')).toBeInTheDocument();
        expect(screen.getByText('Dex')).toBeInTheDocument();
        expect(screen.getByText('+2')).toBeInTheDocument();
    })
});
