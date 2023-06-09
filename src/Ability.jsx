import {Text, TextInput} from "@mantine/core";

// The modifier is derived from (ability - 10)/2
export default function Ability({ name }) {
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
            <span aria-label={`${name} Modifier`}>-</span>
        </>
    );
}
