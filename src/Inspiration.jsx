import {Text, TextInput, Flex} from "@mantine/core";

export default function Inspiration() {
    return (
        <>
            <Flex
                gap="md"
                align="center"
                direction="row"
            >
                <TextInput
                    wrapperProps={{ title: 'Inspiration' }}
                />
                <Text>Inspiration</Text>
            </Flex>
        </>
    );
}
