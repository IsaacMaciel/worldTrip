import { Flex, Image, Button, Box, Link, useBreakpointValue } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

interface HeaderProps {
  isGoHome?: boolean;
}

export const Header = ({ isGoHome = false }: HeaderProps) => {

  return isGoHome ? (
    <Flex as="header" width="100vw" h={[50,100]} align="center">
      <Link marginLeft={["10px","80px"]} href="/">
        <a>
          <Button bg="none">
            <Image src="/images/vectorback.svg" w={["16px","30px"]} h={["16px","30px"]}  />
          </Button>
        </a>
      </Link>
      <Flex justify="center" width="100%" marginRight={["10px","80px"]}>
        <Image src="/images/logo.svg"  w={['81px','initial']}  alt="Logo" />
      </Flex>
    </Flex>
  ) : (
    <Flex as="header" width="100vw" h={[50,100]} align="center" justify="center">
      <Image src="/images/logo.svg" w={['81px','initial']} alt="Logo" />
    </Flex>
  );
};
