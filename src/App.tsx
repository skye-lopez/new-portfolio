import * as React from 'react'
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react'
import theme from './styles/theme';
import Terminal from './components/Terminal';

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Flex
                width="100vw"
                height="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Terminal />
            </Flex>
        </ChakraProvider>
    );
}
