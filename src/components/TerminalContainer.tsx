import {
    Flex,
    Text,
} from '@chakra-ui/react';
import { FaFolderOpen } from 'react-icons/fa';
import ColorModeSwitcher from '../ColorModeSwitcher';
import Terminal from './Terminal';

// TODO: Cool 3js background effect
export default function TerminalContainer() {
    return (
        <Flex
            flexDirection="column"
            borderRadius="10px"
            width="90%"
            maxWidth="1000px"
        >
{/* Header Bar */}
            <Flex
                background="#f5f1f0"
                color="black"
                alignItems="center"
                borderRadius="15px 15px 0px 0px"
                padding="3px 10px"
                justifyContent="space-between"
                wrap="wrap"
            >
                {/* Buttons */}
                <Flex>
                    <Flex 
                        h="15px" 
                        w="15px" 
                        borderRadius="50%" 
                        background="red"
                        margin="0px 3px"
                    />
                    <Flex 
                        h="15px" 
                        w="15px" 
                        borderRadius="50%" 
                        background="orange"
                        margin="0px 3px"
                    />
                    <Flex 
                        h="15px" 
                        w="15px" 
                        borderRadius="50%" 
                        background="green"
                        margin="0px 3px"
                    />
                </Flex>

                {/* Terminal Name */}
                <Flex
                    justifyContent="center"
                    alignItems="center"
                >
                    <FaFolderOpen/>
                    <Text
                        marginLeft="10px"
                    >
                        @Aria-Lopez-Fullstack-Eng ~zsh
                    </Text>
                </Flex>

                {/* Empty Spacer */}
                <Flex>
                    <ColorModeSwitcher />
                </Flex>
            </Flex>
 {/* Terminal */}
            <Terminal />
        </Flex>
    );
}
