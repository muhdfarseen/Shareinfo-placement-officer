import React, { useState } from 'react';
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
  Button,
  Title,
  Flex,
  Input,
  Box

} from "@mantine/core";



import { IconBuilding, IconUsers, IconSquareRoundedPlus } from "@tabler/icons-react"
import classes from "./Home.module.css";
import { FormInputLabel } from '../ui/FormInputLabel';
import { CandidatesTable } from './Candidates/CandidatesTable';


const DeptData = [
  { DeptName: "Computer Science", NoOfStudents: "110" },
  { DeptName: "Electronics & Communication", NoOfStudents: "220" },
  { DeptName: "Information Technology", NoOfStudents: "290" },
  { DeptName: "Electronics & Electrical", NoOfStudents: "180" },
  { DeptName: "Mechanical Engineering", NoOfStudents: "150" },
  { DeptName: "Civil Engineering", NoOfStudents: "220" },
];

export const Candidates = () => {
  const [activeDept, setActiveDept] = useState("Computer Science");

  const handleCardClick = (deptName) => {
    setActiveDept(deptName);
  };

  return (
    <div>
      <Flex justify={"space-between"}>
        <Title pl={10} order={3}>Candidates</Title>
        <Button radius={"md"} leftSection={<IconSquareRoundedPlus size={20} />}>
          Add New Candidate
        </Button>

      </Flex>

      <Flex gap={20} justify={"space-between"}>

        <Flex wrap={"wrap"} pl={10} direction={"column"} gap={15} mt={20}>
          {DeptData.map((item, index) => (
            <Card
              key={index}
              className={`${classes.hoverScale} ${item.DeptName === activeDept ? classes.activeCard : ""}`}
              radius={"lg"}
              bg={` ${item.DeptName === activeDept ? "white" : "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"}`}
              onClick={() => handleCardClick(item.DeptName)}
            >
              <Flex gap={10} direction={"row"} justify={"space-between"} align={"center"} >
                <Badge leftSection={<IconBuilding size={16} />} variant="transparent" color="gray" size="md">{item.DeptName}</Badge>
                <Badge
                  size="lg"
                  radius={"md"}
                  leftSection={<IconUsers size={16} />}
                  color="#B2CBF3"
                  autoContrast
                  variant="default"
                  bg={` ${item.DeptName === activeDept ? "white" : "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"}`}
                >
                  {item.NoOfStudents}
                </Badge>
              </Flex>

            </Card>
          ))}
        </Flex>

        <Box style={{ flex: 1 }}>

          {activeDept && (
            <Card mt={20} withBorder radius={"lg"}>
            
                <Title order={5} mb={20}>{activeDept}</Title>
                <CandidatesTable/>
             
            </Card>
          )}
        </Box>

      </Flex>

    </div>
  );
};
