import {
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Terminal() {
    const _terminalBackgroundColor = useColorModeValue("whitesmoke", "#242424");
    return (
        <Flex
            background={_terminalBackgroundColor}
            height="80vh"
            borderRadius="0px 0px 15px 15px"
        >
        </Flex>
    );
}
