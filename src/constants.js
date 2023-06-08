class Ability {
    constructor(name, abbreviation) {
        this.name = name;
        this.abbreviation = abbreviation;
    }
}

class Skill {
    constructor(name, ability) {
        this.name = name;
        this.ability = ability;
    }
}

const STRENGTH_ABILITY = new Ability('Strength', 'Str');
const DEXTERITY_ABILITY = new Ability('Dexterity', 'Dex');
const CONSTITUTION_ABILITY = new Ability('Constitution', undefined);
const INTELLIGENCE_ABILITY = new Ability('Intelligence', 'Int');
const WISDOM_ABILITY = new Ability('Wisdom', 'Wis');
const CHARISMA_ABILITY = new Ability('Charisma', 'Cha');

export const ABILITIES = [
    STRENGTH_ABILITY,
    DEXTERITY_ABILITY,
    CONSTITUTION_ABILITY,
    INTELLIGENCE_ABILITY,
    WISDOM_ABILITY,
    CHARISMA_ABILITY,
];

export const SKILLS = [
    new Skill('Acrobatics', DEXTERITY_ABILITY),
    new Skill('Animal Handling', WISDOM_ABILITY),
    new Skill('Arcana', INTELLIGENCE_ABILITY),
    new Skill('Athletics', STRENGTH_ABILITY),
    new Skill('Deception', CHARISMA_ABILITY),
    new Skill('History', INTELLIGENCE_ABILITY),
    new Skill('Investigation', INTELLIGENCE_ABILITY),
    new Skill('Medicine', WISDOM_ABILITY),
    new Skill('Nature', INTELLIGENCE_ABILITY),
    new Skill('Perception', CHARISMA_ABILITY),
    new Skill('Performance', CHARISMA_ABILITY),
    new Skill('Persuasion', CHARISMA_ABILITY),
    new Skill('Religion', INTELLIGENCE_ABILITY),
    new Skill('Sleight of Hand', DEXTERITY_ABILITY),
    new Skill('Stealth', DEXTERITY_ABILITY),
    new Skill('Survival', WISDOM_ABILITY),
];
