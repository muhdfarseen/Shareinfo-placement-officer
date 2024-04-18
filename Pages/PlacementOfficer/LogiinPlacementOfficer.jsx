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
import { GoogleButton } from "../../Components/PlacementOfficer/GoogleButton";

export const LogiinPlacementOfficer = () => {
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
            <GoogleButton radius="xl">Sign in with Google</GoogleButton>

            <Group grow justify="space-between">
              <Divider label="or sign in with email" labelPosition="center" />
            </Group>

            <Input.Wrapper label="Username or Email">
              <Input radius={"xl"} />
            </Input.Wrapper>
            <PasswordInput radius={"xl"} label="Password" />
            <Button fullWidth radius={"xl"}>
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
