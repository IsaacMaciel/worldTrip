import { Flex, Image, Button, Box, Link } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

interface HeaderProps {
  isGoHome?: boolean;
}

export const Header = ({ isGoHome = false }: HeaderProps) => {
  return isGoHome ? (
    <Flex as="header" width="100vw" h={100} align="center">
      <Link marginLeft="80px" href="/">
        <a>
          <Button bg="none">
            <Image src="/images/vectorback.svg" w="30px" h="30px" />
          </Button>
        </a>
      </Link>
      <Flex justify="center" width="100%" marginRight="80px">
        <Image src="/images/logo.svg" alt="Logo" />
      </Flex>
    </Flex>
  ) : (
    <Flex as="header" width="100vw" h={100} align="center" justify="center">
      <Image src="/images/logo.svg" alt="Logo" />
    </Flex>
  );
};
