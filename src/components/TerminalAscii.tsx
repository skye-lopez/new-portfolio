import {
    Flex,
    Text,
} from '@chakra-ui/react';
import AsciiGenerator from './AsciiGenerator';

// TODO: Decide colors
export default function TerminalAscii() {
    return (
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
