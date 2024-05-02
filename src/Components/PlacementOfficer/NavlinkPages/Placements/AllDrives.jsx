import React from 'react'
import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  Flex,
  ScrollArea,
  Image,
  Box,
  Divider,
  useMantineTheme,
  SegmentedControl,
  Title,
  Badge,
  ActionIcon
} from "@mantine/core";
import { IconChevronLeft } from '@tabler/icons-react';
import classes from "../Home.module.css";
import { useNavigate } from 'react-router-dom';


export const AllDrives = () => {

  const Navigate = useNavigate();

  const navigateback = () => {
    Navigate("/dashboard/placements")
  }

  const PlacementsData = [
    {
      "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKieRktsQACAOuEO6AC4-iUBlPrP_Im2Svglh1lZHNA&s",
      "JobRole": "Software Engineer",
      "Company": "Tech Innovations Ltd.",
      "Location": "Bangalore, India",
      "Date": "15-05-2024",
      "Package": "4.5-8.5 LPA",
      "PreferedBatch": "CSE, IT, ECE",
      "NoofApplicant": "98 Applications",
      "CGPAcuttoff": "CGPA 7.0+"
    },
    {
      "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYUV5S24Sm7DsqPgdk7eLLG_jezJFSDvyC7OmICGtlw&s",
      "JobRole": "Data Analyst",
      "Company": "Data Insights Inc.",
      "Location": "New York, USA",
      "Date": "20-06-2024",
      "Package": "$60,000 - $80,000 per annum",
      "PreferedBatch": "Statistics, Mathematics, Computer Science",
      "NoofApplicant": "120 Applications",
      "CGPAcuttoff": "CGPA 7.5+"
    },
    {
      "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3E-IW__3_vgfwsQhAoE2s3h3Uc8gtd-Qe7BblsfP8Mw&s",
      "JobRole": "UI/UX Designer",
      "Company": "Creative Solutions Ltd.",
      "Location": "London, UK",
      "Date": "10-07-2024",
      "Package": "£35,000 - £45,000 per annum",
      "PreferedBatch": "Design, Computer Science",
      "NoofApplicant": "80 Applications",
      "CGPAcuttoff": "CGPA 6.8+"
    },
    {
      "ImgUrl": "https://media.licdn.com/dms/image/C510BAQHO5lgpq-KY8w/company-logo_200_200/0/1630568855860/qburst_logo?e=2147483647&v=beta&t=v5h1vWaFvA-tZRUiDr0lmfSRUOMfKKxtdIJLOkUGUqQ",
      "JobRole": "Product Manager",
      "Company": "Innovative Ventures Inc.",
      "Location": "San Francisco, USA",
      "Date": "25-07-2024",
      "Package": "$100,000 - $120,000 per annum",
      "PreferedBatch": "Business Administration, Management",
      "NoofApplicant": "150 Applications",
      "CGPAcuttoff": "CGPA 8.0+"
    },
    {
      "ImgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s",
      "JobRole": "Software Developer",
      "Company": "CodeCrafters LLC",
      "Location": "Seattle, USA",
      "Date": "05-08-2024",
      "Package": "$70,000 - $90,000 per annum",
      "PreferedBatch": "Computer Science, IT",
      "NoofApplicant": "110 Applications",
      "CGPAcuttoff": "CGPA 7.2+"
    }
  ];

  return (
    <div>
      <Flex gap={10} mb={20} align={"center"} >
      <ActionIcon onClick={navigateback}  size="lg" radius="xl"  variant="default" aria-label="Settings">
          <IconChevronLeft style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
        <Title  order={3}>All Drives</Title>
      </Flex>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 20, sm: "20" }}
        verticalSpacing={{ base: 20, sm: "20" }}
      >

        {PlacementsData.map((element, index) => (
          <Card className={classes.hoverScale} key={index} radius={"lg"} withBorder mb={10}>
            <Group align='center'>
              <Image radius={"500"} w={70} h={70} src={element.ImgUrl} />
              <Flex direction={"column"}>
                <Title order={4}>{element.JobRole}</Title>
                <Text>{element.Company}</Text>
                <Text c={"dimmed"}>{element.Location}</Text>
              </Flex>
            </Group>
            <Group mt={10} grow>
              <Badge size='lg' radius={"sm"} variant='outline' color='red'>
                {element.Date}
              </Badge>
              <Badge size='lg' radius={"sm"} variant='outline' color='green'>
                {element.Package}
              </Badge>
              <Badge size='lg' radius={"sm"} variant='outline' color='green'>
                {element.CGPAcuttoff}
              </Badge>
            </Group>
            <Group grow mt={10}>
              <Badge size='lg' radius={"sm"} variant='default' color='gray'>
                {element.PreferedBatch}
              </Badge>
              <Badge size='lg' radius={"sm"} variant='default' color='gray'>
                {element.NoofApplicant}
              </Badge>
            </Group>
          </Card>
        ))}


      </SimpleGrid>
    </div>
  )
}
