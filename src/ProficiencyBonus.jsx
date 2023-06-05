import {Text, TextInput, Grid} from "@mantine/core";

export default function ProficiencyBonus() {
    return (
        <>
            <Grid>
                <Grid.Col span={2}>
                    <TextInput
                        wrapperProps={{ title: 'Proficiency Bonus' }}
                    />
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text>Proficiency Bonus</Text>
                </Grid.Col>
            </Grid>
        </>
    );
}
