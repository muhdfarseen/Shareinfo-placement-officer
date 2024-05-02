import React from "react";
import {
  Box,
  Input,
  Image,
  Group,
  Flex,
  Title,
  Divider,
  Text,
  PasswordInput,
  Button,
} from "@mantine/core";
import PlacementOfficerLoginImage from "../../Images/PlacementOfficerLogin.png";
import { useNavigate } from "react-router-dom";

export const LoginPlacementOfficer = () => {

  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/dashboard")
  }


  return (
    <div>
      <Flex h={"100vh"} justify={"center"} align={"center"}>
        <Image
          h={"100vh"}
          w={{ xs: "0%", sm: "30%" }}
          src={PlacementOfficerLoginImage}
          alt="Image"
        />
        <Flex w={"70%"} justify={"center"} align={"center"} p={"lg"}>
          <Flex direction={"column"} w={{ xs: "300", sm: "450" }} gap={20}>
            <Title order={2}>Sign in to shareinfo</Title>
           

            

            <Input.Wrapper label="Username or Email">
              <Input radius={"xl"} />
            </Input.Wrapper>
            <PasswordInput radius={"xl"} label="Password" />
            <Button fullWidth radius={"xl"} onClick={handlelogin}>
              Log in
            </Button>
            <Group gap={5}>
              <Text size="sm">Don’t have an Account ?</Text>
              <Text size="sm" td="underline" fw={"700"}>
                Talk to us !
              </Text>
            </Group>

            <Text size="xs" c={"dimmed"}>
              This site is protected by reCAPTCHA and the ShareInfo for CAMPUS
              Privacy Policy and Terms of Service apply.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};
