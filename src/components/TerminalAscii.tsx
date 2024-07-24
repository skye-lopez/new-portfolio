import {
    Flex,
    Text,
} from '@chakra-ui/react';
import {
    useState,
    useEffect,
} from 'react';
import AsciiGenerator from './AsciiGenerator';
import { TypeAnimation } from 'react-type-animation';

// TODO: Decide colors
export default function TerminalAscii() {
    const [outPut, setOutput] = useState<string>("");
    return (
        <Flex
            flexDirection="column"
        >
            <Flex
                maxHeight="200px"
                wrap="wrap"
            >
                <Flex>
                    <Character 
                        color="blue"
                        character="A"
                    />
                    <Character 
                        color="blue"
                        character="R"
                    />
                    <Character 
                        color="blue"
                        character="I"
                    />
                    <Character 
                        color="blue"
                        character="A"
                    />
                </Flex>

                <Flex>
                    <Character 
                        color="orange"
                        character="L"
                    />
                    <Character 
                        color="orange"
                        character="O"
                    />
                    <Character 
                        color="orange"
                        character="P"
                    />
                    <Character 
                        color="orange"
                        character="E"
                    />
                    <Character 
                        color="orange"
                        character="Z"
                    />
                </Flex>
            </Flex>
                <Flex
                    maxHeight="300px"
                >
                    <TypeAnimation
                        cursor={false}
                        style={{ whiteSpace: 'pre-line' }}
                        speed={90}
                        sequence={[
                            1000,
                            `925-997-0953 | aria.lopez.dev@gmail.com | SF Bay Area \n Welcome to my portfolio! Type a command from the list below. \n >> resume (get my current resume) \n >> github (open my github) \n >> projects (see a list of my latest projects).`,
                        ]}
                        wrapper="p"
                    />
                </Flex>
                <Flex
                    height="100px"
                    direction="column"
                >
                    <Character 
                        color="red"
                        character={"---------------------"}
                    />
                </Flex>
        </Flex>
    );
}

interface CharacterProps {
    color: string
    character: string
}

function Character({ color, character }: CharacterProps) {
    return (
        <Text
            as="b"
            fontSize="10px"
            color={color}
        >
            <AsciiGenerator text={character} />
        </Text>
    );
}
