import { Flex, Image, HStack, Box, Text } from "@chakra-ui/react";

interface BannerProps {
  showImage?: boolean;
}

export const Banner = ({ showImage = true }: BannerProps) => (
  <Flex width="100%" height={[163,335]}>
    <Image
      height={[163,335]}
      zIndex="-1"
      position="absolute"
      width="100%"
      src="/images/background.jpg"
      alt="Background "
    />
    <Flex px={["25","50"]} paddingTop={['20px',"92px"]} w="100%" justify="center">
      <HStack spacing="205px">
        <Box>
          <Text color="white" fontSize={["20px", "36px"]} marginBottom="20px">
            5 Continentes,
            <br /> infinitas possibilidades.
          </Text>
          <Text color="white" fontSize={["14px", "20px"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Box>
        {showImage && <Image src="/images/airplane.svg" alt="Airplane" />}
      </HStack>
    </Flex>
  </Flex>
);
