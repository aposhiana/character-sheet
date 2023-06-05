import {Text, TextInput, Grid} from "@mantine/core";

export default function Inspiration() {
    return (
        <>
            <Grid>
                <Grid.Col span={2}>
                    <TextInput
                        wrapperProps={{ title: 'Inspiration' }}
                    />
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text>Inspiration</Text>
                </Grid.Col>
            </Grid>
        </>
    );
}
