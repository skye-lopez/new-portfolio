import { extendTheme } from '@chakra-ui/react';
import '@fontsource/monaspace-neon';

const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            'html, body': {
                color: props.colorMode === 'dark' ? 'white' : 'black',
                background: props.colorMode === 'dark' ? 'black' : 'white',
            }
        }),
    },
    fonts: {
        heading: `'Monaspace Neon', monospace`,
        body: `'Monosapce Neon', monospace`, 
    }
});

export default theme;
