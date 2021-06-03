import { Box, Image, Flex, Text, Avatar } from "@chakra-ui/react";

interface CityCardProps {
  cityName: string;
  cityImage: string;
  countryName: string;
  countryFlag: string;
}

export const CityCard = ({
  cityName,
  countryFlag,
  countryName,
  cityImage,
}: CityCardProps) => {
  return (
    <Box border="1px" borderColor="orange" width="256px" margin={["0 auto","initial"]} height="279px">
      <Image
        objectFit="cover"
        marginBottom="20px"
        width="256px"
        height="173px"
        src={cityImage}
      />
      <Flex justifyContent="space-between" alignItems="center" px="20px">
        <Box>
          <Text fontSize="20px" fontWeight="semibold" marginBottom="10px">
            {cityName}
          </Text>
          <Text fontSize="16px" color="gray.500">
            {countryName}
          </Text>
        </Box>
        <Box>
          <Avatar src={countryFlag} width="30px" height="30px" />
        </Box>
      </Flex>
    </Box>
  );
};
