import {Flex,Image,Text} from "@chakra-ui/react"

interface BannerContinentProps {
  continentName: string
  continentImage: string
}

export const BannerContinent = ({continentImage,continentName}: BannerContinentProps) => {
    return (
        <Flex height={["150px","500px"]} width="100%">
        <Image
          position="absolute"
          zIndex="-1"
          objectFit="cover"
          height={["150px","500px"]}
          width="100%"
          src={continentImage}
          alt="Continente Europeu"
        />
        <Text
          fontSize={["28px","48px"]}
          marginTop="auto"
          marginBottom={["auto","50px"]}
          marginLeft="100px"
          fontWeight="semibold"
          color="white"
        >
          {continentName}
        </Text>
      </Flex>
    )
}