import {
    Flex,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import TerminalAscii from './TerminalAscii';

export default function Terminal() {
    const _terminalBackgroundColor = useColorModeValue("whitesmoke", "#242424");

    return (
        <Flex
            background={_terminalBackgroundColor}
            height="80vh"
            borderRadius="0px 0px 15px 15px"
            padding="1%"
            flexDirection="column"
        >
            {/* ASCII */}
            <TerminalAscii />
        </Flex>
    );
}
