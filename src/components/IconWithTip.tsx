import {
    Flex,
    Text,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";
import { 
    DiPostgresql,
    DiJsBadge,
    DiReact,
    DiPython,
    DiGo,
    DiVim,
    DiGit,
} from "react-icons/di";

import {
    FaDocker,
    FaVuejs,
    FaAws,
    FaNodeJs,
    FaGitlab,
} from "react-icons/fa";

import {
    SiTypescript,
} from "react-icons/si";

import { useState } from "react";

interface IconWithTipProps {
    icon: 'postgresql' | 'javascript' | 'react' | 'python' | 'go' | 'vim' | 'git' | 'docker' | 'typescript' | 'vue' | 'aws' | 'node' | 'gitlab CI/CD'
}

export default function IconWithTip({ icon } : IconWithTipProps) {
    const _iconMap : any = {
        postgresql: DiPostgresql,
        javascript: DiJsBadge,
        react: DiReact,
        python: DiPython,
        go: DiGo,
        vim: DiVim,
        git: DiGit,
        docker: FaDocker,
        typescript: SiTypescript,
        vue: FaVuejs,
        aws: FaAws,
        node: FaNodeJs,
        "gitlab CI/CD": FaGitlab,
    };

    const _backgroundColor = useColorModeValue("white", "black");

    const [selected, setSelected] = useState(false);
    function toggle() {
        setSelected((o) => o === false ? true : false);
    }

    return (
        <Flex
            onMouseEnter={toggle}
            onMouseLeave={toggle}
            position="relative"
            margin="1px 3px"
            background={_backgroundColor}
        >
            <Icon 
                as={_iconMap[icon]} 
                boxSize={7}
            />
            {
                selected ?
                (<Flex
                    background={_backgroundColor}
                    alignItems="center"
                    justifyContent="center"
                    padding="5px"
                    borderRadius="10px"
                    position="absolute"
                    top="40px"
                 >
                    <Text>{icon}</Text>
                </Flex>)
                : null
            }
        </Flex>
    );
}
