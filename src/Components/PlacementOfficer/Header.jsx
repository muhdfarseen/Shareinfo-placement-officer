import React, { useState } from "react";
import {
  Avatar,
  Group,
  Text,
  Image,
} from "@mantine/core";
import ShareInfoLogo from "../../../public/SIfav.png";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

export const Header = () => {

  const navigate = useNavigate();
  const handlelogout = () => {
    navigate("/");
  };

  return (
    <div className={classes.header}>
      <Image src={ShareInfoLogo} h={40} />
      <Group gap={7}>
        <Text fw={500} size="sm" lh={1} mr={3}>
          {user.name}
        </Text>
        <Avatar src={user.image} alt={user.name} radius="xl" size={30} />
      </Group>
    </div>
  );
};
