import {Checkbox, Text, Box} from "@mantine/core";

export default function SavingThrows() {
    return (
        <Box m="lg">
            <Checkbox label={'Strength'} />
            <Checkbox label={'Dexterity '} />
            <Checkbox label={'Constitution'} />
            <Checkbox label={'Intelligence'} />
            <Checkbox label={'Wisdom'} />
            <Checkbox label={'Charisma'} />
            <Text
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center"
                fz="lg"
                fw={700}
            >
                Saving Throws
            </Text>
        </Box>
    );
}
