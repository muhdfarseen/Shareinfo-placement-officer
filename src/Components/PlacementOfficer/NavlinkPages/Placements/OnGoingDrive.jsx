import React from 'react';
import {
  Card,
  Text,
  Group,
  Flex,
  Image,
  Badge,
  Title,
  Box,
  Center,
  SimpleGrid,
  Avatar,
  Stepper,
  Divider,
  Button
} from "@mantine/core";
import { IconCalendarCancel, IconCalendarDot } from '@tabler/icons-react';



export const OnGoingDrive = () => {
  return (
    <div>
      <Title order={3} mb={20}>Ongoing Drive</Title>

      <Card p={40} withBorder radius={"lg"} >

        <Flex justify={"space-between"}>
          <Flex gap={10} justify={"center"} >
            <Image radius={"lg"} w={100} h={100} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKieRktsQACAOuEO6AC4-iUBlPrP_Im2Svglh1lZHNA&s"} />
            <Flex gap={10} direction={"column"}>
              <Title order={2}>ITL Ltd.</Title>
              <Group>
                <Badge radius={"md"} size='md' variant='default' >Kannur</Badge>
                <Badge radius={"md"} size='md' variant='default'>Bangalore</Badge>
                <Badge radius={"md"} size='md' variant='default'>Hyderabad</Badge>
              </Group>
              <Group>
                <Badge radius={"md"} size='lg' variant='default'>www.imiot.co.in</Badge>
                <Badge radius={"md"} size='lg' variant='default'>contact@plaement.imiot.co.in</Badge>
                <Badge radius={"md"} size='lg' variant='default'>+91 12345 67890</Badge>
              </Group>
            </Flex>
          </Flex>

          <Group>
            <Box style={{ borderRadius: "10px" }} bg={"#B2CBF3"}>
              <Flex w={120} h={65} align={"center"} justify={"center"} direction={"column"}>
                <Text size='lg' my={0} fw={700}>120</Text>
                <Text size='xs' >Attended</Text>
              </Flex>
            </Box>
            <Box style={{ borderRadius: "10px" }} bg={"#FEF6B1"}>
              <Flex w={120} h={65} align={"center"} justify={"center"} direction={"column"}>
                <Text size='lg' my={0} fw={700}>120</Text>
                <Text size='xs' >Qualified</Text>
              </Flex>
            </Box>
            <Box style={{ borderRadius: "10px" }} bg={"#97FFB3"}>
              <Flex w={120} h={65} align={"center"} justify={"center"} direction={"column"}>
                <Text size='lg' my={0} fw={700}>120</Text>
                <Text size='xs' >Process Live</Text>
              </Flex>
            </Box>
          </Group>
        </Flex>

        <Divider my={20} />

        <Flex gap={20}>

          <Flex gap={5} direction={"column"}>
            <Text c={"blue"} size='sm' fw={700}>Job Role</Text>
            <Text c={"blue"} size='sm' fw={700}>Company Name</Text>
            <Text c={"blue"} size='sm' fw={700}>Job Level</Text>
            <Text c={"blue"} size='sm' fw={700}>Min CGPA Required</Text>
            <Text c={"blue"} size='sm' fw={700}>Number of Vacancies</Text>
            <Text c={"blue"} size='sm' fw={700}>Minimum Package</Text>
            <Text c={"blue"} size='sm' fw={700}>Preferred Skills</Text>

          </Flex>

          <Flex gap={5} direction={"column"}>
            <Text size='sm' >Associate Data Engineer Trainee</Text>
            <Text size='sm' >Imiot Technolabs LLP Ltd.</Text>
            <Text size='sm' >Associate Trainee</Text>
            <Text size='sm' >6.5</Text>
            <Text size='sm' >01</Text>
            <Text size='sm' >3.4 LPA</Text>
            <Text size='sm' >Communication, C Intermediate Coding, C++ Intermediate Coding, Java Advanced Coding</Text>
          </Flex>

        </Flex>

        <Box py={50}>
          <Stepper iconSize={32} active={2}>
            <Stepper.Step label="Aptitude/Technical" />
            <Stepper.Step label="Interview" />
            <Stepper.Step label="GD" />
            <Stepper.Step label="Final Process" />
            <Stepper.Step label="Hired" />

          </Stepper>
        </Box>

        <Title order={4} >Drive Details</Title>

        <Flex mt={10} justify={"space-between"} align={"center"}>

          <Flex gap={5} direction={"column"}>
            <Text size='sm' fw={600} >Current Status:</Text>
            <Text size='md' fw={600} c={"gray"}>Active (Hiring Pipeline)</Text>

            <Text mt={10} size='sm' fw={600}>Recruitment Staff:</Text>
            <Group>
              <Avatar src={null} alt="no image here" color="indigo" />
              <Text size='md' fw={600} c={"gray"}>Ananda Padmanabhan</Text>
            </Group>
          </Flex>

          <Flex gap={5} direction={"column"}>
            <Text size='sm' fw={600}>Current Status:</Text>
            <Text size='md' fw={600} c={"gray"}>Aptitude/Technical Round</Text>

            <Text mt={10} size='sm' fw={600}>Placement  Co-ordinator:</Text>
            <Group>
              <Avatar src={null} alt="no image here" color="indigo" />
              <Text size='md' fw={600} c={"gray"}>Dr. Subhash</Text>
            </Group>
          </Flex>

          <Flex gap={5} direction={"column"}>
            <Text size='sm' fw={600}>Process Start Date:</Text>
            <Flex gap={5} justify={"center"} align='center'>
              <IconCalendarDot  color='gray' />
              <Text size='md' fw={600} c={"gray"}>10-February-2024</Text>
            </Flex>

            <Text mt={10} size='sm' fw={600}>Process End Date:</Text>
            <Flex gap={5} justify={"center"} align='center'>
              <IconCalendarCancel  color='gray' />
              <Text size='md' fw={600} c={"gray"}>13-February-2024</Text>
            </Flex>
          </Flex>

          <Button size='lg' radius={"md"} >Update Status</Button>

        </Flex>

        <Title mt={50} order={4} >Candidates -05 Live</Title>

        <Box>

        </Box>




      </Card>

    </div>
  )
}
