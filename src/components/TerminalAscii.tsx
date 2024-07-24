import {
    Flex,
    Text,
} from "@chakra-ui/react";

import { _Ascii, _SmallAscii } from "./Ascii.jsx";
import { TypeAnimation } from "react-type-animation";

export default function TerminalAscii() {
    return (
        <Flex 
            flexDirection="column"
        >
        {/* ASCII TITLE */}
            <Flex
                maxHeight="200px"
                wrap="wrap"
            >
                <Flex>
                    <Ascii 
                        text="ARIA" 
                        size="10px"
                    />
                </Flex>

                <Flex>
                    <Ascii 
                        text="LOPEZ"
                        size="10px"
                    />
                </Flex>
            </Flex>
            {/* TYPE INTRO */}
            <Flex
                maxHeight="300px"
            >
                <TypeAnimation
                    cursor={false}
                    style={{ whiteSpace: 'pre-line' }}
                    speed={90}
                    sequence={[
                        1000,
                        `Welcome to my portfolio! Type a command from the list below: \n >> resume (get my current resume) \n >> github (open my github) \n >> projects (see a list of my latest projects) \n >> contact (get in touch) \n >> animal (get a cute animal picture)`,
                    ]}
                    wrapper="p"
                />
            </Flex>

            {/* Output Seperator */}
            <Flex
                height="70px"
            >
                <Ascii 
                    text="------------"
                    size="7px"
                />
            </Flex>
        </Flex>
    );
}

interface AsciiProps {
    text: string 
    size: string
}

export function Ascii({ text, size }: AsciiProps) {
    return (
        <Text
            fontSize={size}
        >
            <_Ascii 
                text={text}
            />
        </Text>
    );
}
