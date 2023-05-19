import {Text, TextInput} from "@mantine/core";

export default function Ability() {
    return (
        <>
            <Text
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 40 }}
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center"
                fz="xl"
                fw={700}
            >
                Strength
            </Text>
            <TextInput
                wrapperProps={{ title: 'Strength Score' }}
            />
            <TextInput
                wrapperProps={{ title: 'Strength Modifier' }}
            />
        </>
    );
}
