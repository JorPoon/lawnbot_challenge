import React from 'react'
import { Box, Flex, Text, Button, Stack, PseudoBox } from "@chakra-ui/core"
import MenuItems from './MenuItem'

export default function Navbar() {
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={2}
            p={4}
            bg={"green.500"}
            color="white"
        >
        <Flex align="center">
            <Text fontSize="4xl" color="blue.600">
              LawnBot
            </Text>
        </Flex>
        {/* <Box
          display={{ base: show ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        > */}
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="/">Home</MenuItems>
          <MenuItems to="/about">About Us</MenuItems>
          <MenuItems to="/pricing">Pricing </MenuItems>
          <MenuItems to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color="black"
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Create Account
            </Button>
          </MenuItems>
        </Flex>
      {/* </Box>   */}
    </Flex>
    )
}