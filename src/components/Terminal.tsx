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

    const keys = UseKeyPress();

    function focusInput() {
        if (inputRef?.current) {
            inputRef.current.focus();
        }
    }

    useEffect(() => {
        focusInput();
    }, [])

    function handleInput(e: any) {
        setUserInput(() => e.target.value)
    }

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
                onClick={() => focusInput()}
            >
                <Text
                    as="b"
                    marginRight="10px"
                >
                    {"user@you~>"}
                </Text>
                <Text>
                    {keys}
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
