import React from 'react'
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
  Button,
  ActionIcon,
  Accordion, rem,
  Input,
  FileInput,
  Textarea
} from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { IconChevronLeft } from '@tabler/icons-react';
import { IconPhoto, IconPrinter, IconCameraSelfie, IconCircleDashedCheck } from '@tabler/icons-react';
import { FormInputLabel } from '../../ui/FormInputLabel';


export const AddNewDrives = () => {

  const Navigate = useNavigate();

  const navigateback = () => {
    Navigate("/dashboard/placements")
  }


  return (
    <div>

      <Flex gap={10} mb={20} align={"center"} justify={"space-between"} >
        <Group>
          <ActionIcon onClick={navigateback} size="lg" radius="xl" variant="default" aria-label="Settings">
            <IconChevronLeft style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
          <Title order={3}>Add New Drive</Title>
        </Group>
        <Button radius={"md"} leftSection={<IconCircleDashedCheck size={20} />}>
          Submit
        </Button>
      </Flex>

      <Card withBorder radius={"lg"} >

        <Title order={6} mb={20} >Company Details</Title>

        <Flex gap={20}>
          <FormInputLabel >Company Name</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Domain</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />
        </Flex>

        <Flex mt={20} gap={10}>
          <FormInputLabel >Company Type</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Company Website</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Company Logo</FormInputLabel>
          <FileInput style={{ flex: 1 }} placeholder="Upload here" />
        </Flex>

      </Card>

      <Card mt={20} withBorder radius={"lg"} >

        <Title order={6} mb={20} >Job Role Details</Title>

        <Flex gap={20}>
          <FormInputLabel >Role Name / Job Title</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel >Salary Package</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />
        </Flex>

        <Flex mt={20} gap={20}>
          <FormInputLabel >Job Level</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>No. of Vacancies</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>No. of Process</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />
        </Flex>

        <Flex mt={20} gap={10}>
          <FormInputLabel >Locations</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Working Mode</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Training Mode</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />
        </Flex>

        <Flex mt={20} gap={10}>
          <FormInputLabel >Job Description</FormInputLabel>
          <Textarea style={{ flex: 1 }} autosize minRows={1} placeholder='Enter here' />

          <FormInputLabel >Perks & Benefits</FormInputLabel>
          <Textarea style={{ flex: 1 }} autosize minRows={1} placeholder='Enter here' />
        </Flex>

      </Card>

      <Card mt={20} withBorder radius={"lg"} >

        <Title order={6} mb={20} >Qualifications/Eligibility Criterion</Title>

        <Flex gap={10}>
          <FormInputLabel >Minimum CGPA</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Back paper's</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Max' />

          <FormInputLabel>Academic Year</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='From' />
          <Input style={{ flex: 1 }} placeholder='To' />
        </Flex>

        <Flex mt={20} gap={10}>
          <FormInputLabel >Required Qualities</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Preferred Languages</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />

          <FormInputLabel>Preferred Skills</FormInputLabel>
          <Input style={{ flex: 1 }} placeholder='Enter here' />
          
        </Flex>

      </Card>




    </div>
  )
}
