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
    return (
        <Flex
            flexDirection="column"
        >
            <Flex
                maxHeight="100px"
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
                >
                    <TypeAnimation
                        sequence={[
                            1000,
                            'Welcome to my portfolio...',
                        ]}
                        wrapper="span"
                        cursor={true}
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
