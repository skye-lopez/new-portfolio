import { useAsciiText, slant } from 'react-ascii-text';
import { Flex } from '@chakra-ui/react';

export default function Ascii(props) {
    const text = useAsciiText({
        font: slant,
        fadeInOnly: true,
        animationLoop: false,
        animationDirection: "down",
        animationSpeed: 75,
        animationCharacters: "▒░█",
        text: props.text,
    });

    return (<pre ref={text}></pre>);
}
