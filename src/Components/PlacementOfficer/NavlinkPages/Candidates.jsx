import React from 'react'
import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
  rem,
  Badge,
  Title,
  Flex,

} from "@mantine/core";

import { IconBuilding } from "@tabler/icons-react"

const DeptData = [
  {
    DeptName: "Computer Science",
    NoOfStudents: "120",

  }
]

export const Candidates = () => {
  return (
    <div>
      <Title order={3}>Candidates</Title>

      <Flex gap={10} mt={20} >

        {
          DeptData.map((item, index) => (
            <Card key={index} withBorder radius={"lg"} h={180} w={180}>
              <Flex gap={10} direction={"column"} justify={"center"} align={"center"}>
                <IconBuilding /> {item.DeptName}
              </Flex>


            </Card>
          ))
        }


      </Flex>
    </div>
  )
}
