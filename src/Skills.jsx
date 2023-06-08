import {Box, Text} from "@mantine/core";
import Skill from "./Skill";
import { SKILLS } from "./constants"

export default function Skills() {
    const skills = SKILLS.map(({ name, ability }) => {
        return <Skill name={name} abilityAbbreviation={ability.abbreviation} />;
    });
    return(
        <Box m="lg">
            { skills }
            <Text
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center"
                fz="lg"
                fw={700}
            >
                Skills
            </Text>
        </Box>
    );
}
