import { useAsciiText, slant, smallSlant } from 'react-ascii-text';
import { Flex } from '@chakra-ui/react';

export default function Ascii(props) {
    const fonts = { "smallSlant": smallSlant, "slant": slant };
    const text = useAsciiText({
        font: fonts[props?.font],
        fadeInOnly: true,
        animationLoop: false,
        animationDirection: "down",
        animationSpeed: 75,
        animationCharacters: "▒░█",
        text: props.text,
    });

    return (<pre ref={text}></pre>);
}
