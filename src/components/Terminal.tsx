import axios from "axios";
import {
    Flex,
    useColorModeValue,
    Text,
    Input,
    keyframes,
    Stack,
    Link,
    Icon,
    Image,
} from "@chakra-ui/react";
import {
    PhoneIcon,
    EmailIcon,
} from "@chakra-ui/icons";
import {
    FaDiscord,
} from "react-icons/fa";
import {
    useState,
    useEffect,
    useRef
} from "react";
import TerminalAscii, { Ascii, } from "./TerminalAscii";
import UseKeyPress from "./UseKeyPress";
import IconWithTip from "./IconWithTip";


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
    const inputRef = useRef<HTMLInputElement>(null);

    const highlightColor = useColorModeValue("orange.100", "blue")

    const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
    const [terminalState, setTerminalState] = useState<string>("");
    const [foxImg, setFoxImg] = useState("");

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
            setTerminalState("resume");
        }, 100);
    }

    function handleProjectsAction() {
        setTimeout(() => {
            setTerminalOutput(() => ["PROJECTS"]);
            setTerminalState("projects");
        }, 100);
    }

    function handleContactAction() {
        setTimeout(() => {
            setTerminalOutput(() => ["CONTACT"]);
            setTerminalState("contact");
        }, 100);
    }

    function handleError() {
        setTimeout(() => {
            setTerminalOutput(() => ["ERROR"]);
            setTerminalState("error");
        }, 100)
    }

    async function getFoxImg() {
        const { image } = (await axios.get("https://randomfox.ca/floof/")).data;
        setFoxImg(image);
    }

    async function handleFoxAction() {
        console.log("hey")
        await getFoxImg();
        setTimeout(() => {
            setTerminalOutput(() => ["FOX"]);
            setTerminalState("fox");
        }, 100);
    }

    const { text, action, setAction, resetText } = UseKeyPress();
    useEffect(() => {
        if (foxImg.length === 0) {
            getFoxImg();
        }
        if (action) {
            setTerminalOutput(() => []);
            setTerminalState(() => "");
            resetText();
            const actions: any = {
                "github": handleGithubAction,
                "resume": handleResumeAction,
                "projects": handleProjectsAction,
                "contact": handleContactAction,
                "fox": handleFoxAction,
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
                {terminalOutput?.length > 0 ?
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
                        : terminalState === "projects" ?
                            (<Flex
                                direction="column"
                            >
                                <Text>
                                    // NOTE: This section is a work in progess.
                                </Text>

                                <Flex
                                    marginTop="10px"
                                >
                                    <Link
                                        as="b"
                                        onClick={() => openLink("https://www.tftstats.xyz")}
                                        background={highlightColor}
                                    >
                                        ~&#62; tftstats.xyz - Data analysis + simple UI on the Riot Games TFT Api
                                    </Link>
                                </Flex>
                            </Flex>)
                            : terminalState === "contact" ?
                                (<Flex
                                    flexDirection="column"
                                >
                                    {/* PHONE */}
                                    <Flex
                                        alignItems="center"
                                    >
                                        <PhoneIcon marginRight="5px" />
                                        <Text>925-997-0953</Text>
                                    </Flex>
                                    {/* EMAIL */}
                                    <Flex
                                        alignItems="center"
                                    >
                                        <EmailIcon marginRight="5px" />
                                        <Text>aria.lopez.dev@gmail.com</Text>
                                    </Flex>
                                    {/* DISCORD */}
                                    <Flex
                                        alignItems="center"
                                    >
                                        <Icon as={FaDiscord} marginRight="5px" />
                                        <Text>aria._._.</Text>
                                    </Flex>
                                </Flex>)
                                : terminalState === "resume" ?
                                    (<Flex
                                        flexDirection="column"
                                    >
                                        {/* Download Link */}
                                        <Flex
                                            as="u"
                                        >
                                            <Link
                                                color="orange"
                                                as="b"
                                                onClick={() => openLink("https://docs.google.com/document/d/1PnnBEnK2FfEIlpB4hfuFvJxvzzv6Qlz6tV6k5Dt_gsg/edit?usp=sharing")}
                                            >
                                                Full resume with details (click me)
                                            </Link>
                                        </Flex>
                                        {/* TECH ICONS */}
                                        <Flex
                                            flexDirection="column"
                                            marginTop="10px"
                                        >
                                            <Text
                                                as="b"
                                            >
                                                Technologies:
                                            </Text>
                                            <Flex
                                                flexDirection="row"
                                                wrap="wrap"
                                            >
                                                <IconWithTip icon="vim" />
                                                <IconWithTip icon="postgresql" />
                                                <IconWithTip icon="javascript" />
                                                <IconWithTip icon="typescript" />
                                                <IconWithTip icon="node" />
                                                <IconWithTip icon="react" />
                                                <IconWithTip icon="vue" />
                                                <IconWithTip icon="python" />
                                                <IconWithTip icon="go" />
                                                <IconWithTip icon="git" />
                                                <IconWithTip icon="docker" />
                                                <IconWithTip icon="aws" />
                                                <IconWithTip icon="gitlab CI/CD" />
                                            </Flex>
                                        </Flex>
                                        {/* Experience Overview */}
                                        <Flex
                                            flexDirection="column"
                                            marginTop="10px"
                                        >
                                            <Text
                                                as="b"
                                                marginBottom="10px"
                                            >
                                                Positions:
                                            </Text>

                                            <Text>
                                                Pando - FullStack Engineer (Backend)
                                            </Text>

                                            <Text>
                                                Galvanize - Software Engineering Mentor
                                            </Text>

                                            <Text
                                                as="b"
                                                margin="10px 0px"
                                            >
                                                Education:
                                            </Text>

                                            <Text>
                                                Hack Reactor (Bootcamp)
                                            </Text>
                                        </Flex>
                                    </Flex>)
                                    : terminalState === "fox" ?
                                        (<Flex>
                                            <Image
                                                src={foxImg}
                                                width="500px"
                                            />
                                        </Flex>)
                                        : null
            }

            {/* "Command Line" */}
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="start"
                cursor="pointer"
                marginTop="10px"
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
