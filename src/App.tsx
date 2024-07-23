import * as React from 'react'
import {
  ChakraProvider,
} from '@chakra-ui/react'
import theme from './styles/theme';

export default function App() {
    return (
        <ChakraProvider theme={theme}>
        </ChakraProvider>
    );
}
