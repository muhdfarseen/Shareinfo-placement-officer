import React from 'react'
import { Flex, Button, Text, Title } from '@mantine/core';

export const Settings = () => {
  return (
    <div>
      <Title order={3}>Settings</Title>

      <Flex h={"calc(100vh - 200px)"} direction={"column"} justify={"center"} align={"center"} gap={25}>
        <Text ta="center">      You are using ver 1.0 Public Beta of ShareInfo for Campus as a Closed Testing Partner, <br /> There is no Settings features are allowed for this mode.
        </Text>

        <Text td="underline" style={{ cursor: "pointer" }} c={"dimmed"} ta="center">
          Connect our Support team for any Assistance
        </Text>
        <Button color='red' radius={"md"} >Sign Out</Button>
      </Flex>

    </div>
  )
}
