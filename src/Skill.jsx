import {Checkbox, Text} from "@mantine/core";

export default function Skill(props) {
    const {
        name,
        abilityAbbreviation,
        modifier,
    } = props;

    return(
        <>
            <Checkbox label={name} />
            <Text>{modifier}</Text>
            <Text c="dimmed">{abilityAbbreviation}</Text>
        </>
    );
}
