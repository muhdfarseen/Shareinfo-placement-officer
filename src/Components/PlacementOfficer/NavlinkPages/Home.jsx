import React from "react";
import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
  Title,
} from "@mantine/core";
import {
  IconHome2,
  IconUsers,
  IconBriefcase,
  IconFingerprint,
  IconCalendarStats,
  IconChecklist,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import classes from "./Home.module.css";
import { useNavigate } from 'react-router-dom';


const mockdata = [
  { title: "Candidates", icon: IconUsers, color: "indigo", linkto: "candidates" },
  { title: "Placements", icon: IconBriefcase, color: "blue", linkto: "placements"  },
  { title: "Announcements", icon: IconCalendarStats, color: "green", linkto: "announcements"  },
  { title: "Trainings", icon: IconChecklist, color: "teal", linkto: "trainings"  },
  { title: "Settings", icon: IconSettings, color: "cyan", linkto: "settings"  },
];

export const Home = () => {
  const theme = useMantineTheme();

  const Navigate = useNavigate();

  const HandleNavigation = (linkto) => {
    Navigate(`/dashboard/${linkto}`);
  };

  const items = mockdata.map((item) => (
    <UnstyledButton
      onClick={() => HandleNavigation(item.linkto)} 
      key={item.title}
      className={classes.item}
    >
      <item.icon color={theme.colors[item.color][6]} size="2rem" />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
        
        mt="md"
      >
        {items}
      </SimpleGrid>
    </>
  );
};
