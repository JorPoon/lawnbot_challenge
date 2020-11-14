import React from 'react';
import NavBar from '../header/NavBar'
import { Flex } from "@chakra-ui/core"


export default function HomeView() {
    return (
    <Flex
      direction="column"
      align="center"
      maxW="100%"
      m="0 auto"
    >
        <NavBar/>       
    </Flex>
    )
}