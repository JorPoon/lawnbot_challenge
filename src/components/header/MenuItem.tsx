import React from 'react'
import { Link } from "react-router-dom"
import { Box, Flex, Text, Button, Stack, PseudoBox } from "@chakra-ui/core"

interface MenuItemProps {
    children: any,
    isLast?: any,
    to: string
}


export default function MenuItems(props: MenuItemProps) {
    const { children, isLast, to = "/", ...rest } = props
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        <Link to={to}>{children}</Link>
      </Text>
    )
  }
  