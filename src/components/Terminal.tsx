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
import TerminalAscii, { Ascii, } from "./TerminalAscii";
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

    const [terminalOutput, setTerminalOutput] = useState<string>("");
    // TODO : whenever we update this we have to set it to nothing and then set it again.


    function handleGithubAction() {
        setTerminalOutput(() => "GITHUB.COM/SKYE-LOPEZ");
        console.log("THIS WAS CALLED");
    }

    function handleResumeAction() {
    }

    function handleProjectsAction() {
    }

    function handleCalendarAction() {
    }

    const { text, action, setAction }= UseKeyPress();
    useEffect(() => {
        if (action) {
            const actions: any = {
                "github": handleGithubAction,
                "resume": handleResumeAction,
                "projects": handleProjectsAction,
                "calendar": handleCalendarAction,
            };
            if (actions[text]) {
                actions[text]();
                return setAction(() => false);
            }
            // Do some "magic"; try to find an action.
            for (const key in actions) {
                if (text.includes(key)) {
                    actions[key]();
                    return setAction(() => false);
                }
            }
            // Not a valid command event
            setAction(() => false);
        }
    }, [action]);

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
            { terminalOutput?.length > 0 ? 
                (<Ascii 
                    text={terminalOutput}
                    size="7px"
                />) :
                null
            }
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
