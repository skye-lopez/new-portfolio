import {
    Flex,
    useColorModeValue,
    Text,
    Input,
    keyframes,
    Stack,
    Link,
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

    const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
    // TODO : whenever we update this we have to set it to nothing and then set it again.
    const [terminalState, setTerminalState] = useState<string>("");

    function openLink(url: string) {
        window.open(url, "_blank");
    }

    // TODO: setTimout gaurentees a proper re-render of the Ascii
    // but this should really be less hacky...
    function handleGithubAction() {
        setTimeout(() => {
            setTerminalOutput(() => ["GITHUB.COM/", "SKYE-LOPEZ"]);
            setTerminalState(() => "github");
            openLink("https://www.github.com/skye-lopez");
        }, 100);
    }

    function handleResumeAction() {
        setTimeout(() => {
            setTerminalOutput(() => ["RESUME"]);
        }, 100);
    }

    function handleProjectsAction() {
        setTimeout(() => {
            setTerminalOutput(() => ["PROJECTS"]);
        }, 100);
    }

    function handleCalendarAction() {
        setTimeout(() => {
            setTerminalOutput(() => ["CALENDAR"]);
        }, 100);
    }

    function handleEmailAction() {
        setTimeout(() => {
            setTerminalOutput(() => ["EMAIL"]);
        }, 100);
    }

    function handleError() {
        setTimeout(() => {
            setTerminalOutput(() => ["ERROR"]);
            setTerminalState("error");
        }, 100)
    }

    const { text, action, setAction }= UseKeyPress();
    useEffect(() => {
        if (action) {
            setTerminalOutput(() => []);
            setTerminalState(() => "");
            const actions: any = {
                "github": handleGithubAction,
                "resume": handleResumeAction,
                "projects": handleProjectsAction,
                "calendar": handleCalendarAction,
                "email": handleEmailAction,
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
            handleError();
            setAction(() => false);
        }
    }, [action]);

    return (
        <Flex
            background={_terminalBackgroundColor}
            borderRadius="0px 0px 15px 15px"
            padding="2%"
            height="auto"
            flexDirection="column"
        >
            {/* ASCII */}
            <TerminalAscii />
            {/* Terminal Output from commands */}
            {/* ASCII OUTPUT */}
            <Flex
                wrap="wrap"
                flexDirection="row"
            >
                { terminalOutput?.length > 0 ? 
                    terminalOutput?.map((w) => (<Ascii 
                        text={w}
                        size="7px"
                    />))
                    : null
                }
            </Flex>
            {/* COMPONENT OUTPUT */}
            {
                terminalState === "github" ?
                (<Flex as="u">
                    <Link 
                        as="b" 
                        cursor="pointer"
                        color="orange"
                        onClick={() => openLink("https://www.github.com/skye-lopez")}
                    >
                        github.com/skye-lopez (click me)
                    </Link>
                </Flex>)
                : terminalState === "error" ?
                (<Text>
                    Not a valid command - see commands above.
                </Text>)
                : null
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
