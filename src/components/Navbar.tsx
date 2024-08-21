import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="40px" padding="5px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
