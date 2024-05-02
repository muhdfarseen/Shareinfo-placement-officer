import React from 'react'
import {
  Flex,
  Modal,
  Button,
  TextInput,
  Box,
  Pill,
  Select,
  rem,
  Avatar,
  Badge,
  Title,
  Card,
  Image,
  Group,
  ActionIcon,
  NumberInput,
  FileInput,
  Divider,
  Textarea,
  ScrollArea,
  Text
} from '@mantine/core';
import { IconCloudUpload } from '@tabler/icons-react';

const RecentAnnouncementsData = [
  {
    ImgUrl: "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1137%2F040bddbf-b336-43f3-a414-2f1592fb446d.png",
    Title: "Last Date to Apply; ITL at CE Thalassery",
    Date: "04 Oct. 2023 | 15:40",
    Desc: "Calling all aspiring tech wizards! Don't miss your chance to launch your career at ITL Ltd., a leading force in the software industry. Known for [mention key company values or achievements], they're visiting your campus on [Date] for an exciting placement drive, seeking talented individuals like you for roles in [list of departments or job titles]."
  },
  {
    ImgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hsOjGWneIMFgj7HsPGn_UkRQnD7JMhXTF-iBkO51IA&s",
    Title: "Last Date to Apply; ITL at CE Thalassery",
    Date: "04 Oct. 2023 | 15:40",
    Desc: "Calling all aspiring tech wizards! Don't miss your chance to launch your career at ITL Ltd., a leading force in the software industry. Known for [mention key company values or achievements], they're visiting your campus on [Date] for an exciting placement drive, seeking talented individuals like you for roles in [list of departments or job titles]."
  },
  {
    ImgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xTpxBcEMDQNpDr1klsQGehgQYHW5FHuF0EgdfSXO-A&s",
    Title: "Last Date to Apply; ITL at CE Thalassery",
    Date: "04 Oct. 2023 | 15:40",
    Desc: "Calling all aspiring tech wizards! Don't miss your chance to launch your career at ITL Ltd., a leading force in the software industry. Known for [mention key company values or achievements], they're visiting your campus on [Date] for an exciting placement drive, seeking talented individuals like you for roles in [list of departments or job titles]."
  },
]


export const Announcements = () => {
  return (
    <div>

      <Title order={3}>Announcements</Title>
      <Divider my="md" />

      <Flex gap={40}>
        <Flex w={"60%"} direction={"column"} gap={20}>
          <Title order={5}>Create An Announcement</Title>
          <TextInput
            label="Announcement Title"
            placeholder="Enter the announcement title here!"
          />
          <Textarea
            label="Description (Optional)"
            placeholder="Enter the announcement description here!"
            autosize
            minRows={5}
          />
          <Flex gap={20} align={'flex-end'}>
            <FileInput
              w={"90%"}
              leftSection={<IconCloudUpload style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
              label="Supportive Icon (optional)"
              placeholder="Upload a supportive Icon here !"
              leftSectionPointerEvents="none"
            />
            <Button fullWidth>
              Publish Announcement
            </Button>
          </Flex>
        </Flex>


        <Flex w={"40%"} direction={"column"} >
          <Title order={5}>Recent Announcements</Title>
          <ScrollArea h={"70vh"} pr={20} pb={20}>
            {RecentAnnouncementsData.map((announcement, index) => (
              <Card key={index} radius={"lg"} withBorder mt={20} mb={10}>
                <Group align='center'>
                  <Image radius={"500"} w={70} h={70} src={announcement.ImgUrl} />
                  <Flex direction={"column"}>
                    <Title order={5}>{announcement.Title}</Title>
                    <Text>{announcement.Date}</Text>
                  </Flex>
                </Group>
                <Text mt={10} c={"dimmed"}>{announcement.Desc}</Text>
              </Card>
            ))}
          </ScrollArea>
        </Flex>

      </Flex>




    </div>
  )
}
