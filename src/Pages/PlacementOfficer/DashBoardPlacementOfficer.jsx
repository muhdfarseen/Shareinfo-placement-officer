import React from "react";
import { Navbar } from "../../Components/PlacementOfficer/Navbar";
import { Header } from "../../Components/PlacementOfficer/Header";
import { Box, Flex } from "@mantine/core";

export const DashBoardPlacementOfficer = () => {
  return (
    <div>
    <Header />
    <Flex w={"100vw"}>
      <Navbar />
      <Box p={20}>
        asdasd
      </Box>
    </Flex>
  </div>
  );
};
