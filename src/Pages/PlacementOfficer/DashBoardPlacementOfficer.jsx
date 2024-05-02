import React from "react";
import { Navbar } from "../../Components/PlacementOfficer/Navbar";
import { Header } from "../../Components/PlacementOfficer/Header";
import { Box, Flex, ScrollArea } from "@mantine/core";
import { Home } from "../../Components/PlacementOfficer/NavlinkPages/Home";
import { Outlet } from "react-router-dom";

export const DashBoardPlacementOfficer = () => {
  return (
    <div>
      <Header />
      <Flex w={"100vw"}>
        <Navbar />
        <Box
          p={20}
          w="100%"
          bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6))"
        >
          <ScrollArea scrollbarSize={4} h="calc(100vh - 100px" >
            <Outlet/>
          </ScrollArea>
        </Box>
      </Flex>
    </div>
  );
};
