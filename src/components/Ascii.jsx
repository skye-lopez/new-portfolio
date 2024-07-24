import { useAsciiText, smallSlant, slant } from 'react-ascii-text';

export function _SmallAscii(props) {
    const smallTextRef = useAsciiText({
        font: smallSlant,
        fadeInOnly: true,
        animationLoop: false,
        animationDirection: "down",
        animationSpeed: 75,
        animationCharacters: "▒░█",
        text: props.text,
    });

    return (<pre ref={smallTextRef}></pre>);
}

export function _Ascii(props) {
    const textRef = useAsciiText({
        font: slant,
        fadeInOnly: true,
        animationLoop: false,
        animationDirection: "down",
        animationSpeed: 75,
        animationCharacters: "▒░█",
        text: props.text,
    });

    return (<pre ref={textRef}></pre>);
}
