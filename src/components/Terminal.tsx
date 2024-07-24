import {
    Flex,
    useColorModeValue,
    Text,
    Input,
    keyframes,
    Stack,
} from "@chakra-ui/react";
import { 
    useState, 
    useEffect, 
    useRef 
} from "react";
import TerminalAscii from "./TerminalAscii";
import UseKeyPress from "./UseKeyPress";


export default function Terminal() {
    const _terminalBackgroundColor = useColorModeValue("whitesmoke", "#242424");
    const cursor = keyframes`
        0%, 100% {
            background-color: transparent;
        }
        50% {
            background-color: red;
        }
    `;
    const cursorAnimation = `${cursor} 1s infinite`;
    const [userInput, setUserInput] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const { text, action, setAction }= UseKeyPress();

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
            {/* "Command Line" */}
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="start"
                cursor="pointer"
            >
                <Text
                    as="b"
                    marginRight="10px"
                >
                    {"user@you~>"}
                </Text>
                <Text
                    color={text?.length > 0 ? "inherit" : "gray"}
                >
                    {text?.length > 0 ? text : "Begin typing..."}
                </Text>
                <Flex 
                    animation={cursorAnimation} 
                    w="5px"
                    h="20px"
                />
            </Flex>
        </Flex>
    );
}
