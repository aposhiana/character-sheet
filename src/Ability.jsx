import {Text, TextInput} from "@mantine/core";

export default function Ability({ name='Strength' }) {
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
                {name}
            </Text>
            <TextInput
                wrapperProps={{ title: `${name} Score` }}
            />
            <TextInput
                wrapperProps={{ title: `${name} Modifier` }}
            />
        </>
    );
}
