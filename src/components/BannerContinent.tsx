import {Flex,Image,Text} from "@chakra-ui/react"

interface BannerContinentProps {
  continentName: string
  continentImage: string
}

export const BannerContinent = ({continentImage,continentName}: BannerContinentProps) => {
    return (
        <Flex height="500px" width="100%">
        <Image
          position="absolute"
          zIndex="-1"
          objectFit="cover"
          height="500px"
          width="100%"
          src={continentImage}
          alt="Continente Europeu"
        />
        <Text
          fontSize="48px"
          marginTop="auto"
          marginBottom="50px"
          marginLeft="100px"
          fontWeight="semibold"
          color="white"
        >
          {continentName}
        </Text>
      </Flex>
    )
}