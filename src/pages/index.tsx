import { Image, Box, Text, Flex, HStack, VStack, Divider } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Carousel } from "../components/Slider/Carousel";

type Continent = {
  continentName: string
  continentDescription: string
  continentFile: string
}

interface HomeProps {
  apiResponse: Continent[]
}

export default function Home({apiResponse}:HomeProps) {
  return (
    

    <VStack spacing="80px">
      <Flex width="100%" height={335}>
        <Image
          height={335}
          zIndex="-1"
          position="absolute"
          width="100%"
          src="/images/background.jpg"
          alt="Background "
        />
        <Flex px="50" paddingTop="92px" w="100%" justify="center">
          <HStack spacing="205px">
            <Box>
              <Text color="white" fontSize="36px" marginBottom="20px">
                5 Continentes,
                <br /> infinitas possibilidades.
              </Text>
              <Text color="white" fontSize="20px">
                Chegou a hora de tirar do papel a viagem que você  sempre
                sonhou.{" "}
              </Text>
            </Box>
            <Image src="/images/airplane.svg" alt="Airplane" />
          </HStack>
        </Flex>
      </Flex>
      <Flex width="1160px" margin="0 auto" alignItems="center" justifyContent="space-between">
        <Image src="/images/nightlife.svg" />
        <Image src="/images/beach.svg" />
        <Image src="/images/modern.svg" />
        <Image src="/images/classic.svg" />
        <Image src="/images/more.svg" />
      </Flex>

      <Box>
        <VStack spacing="52px">
          <Box width="90px" margin="0 auto" borderTop="2px solid black" />
          <Text color="text.headingText" fontSize="36px" textAlign="center"> Vamos nessa? <br/> Então escolha seu continente</Text>
        </VStack>
      </Box>
      <Carousel items={apiResponse} />
    </VStack>
 
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const api =  await fetch('http://localhost:3000/api/continents').then( resp => resp.json()).then(resp => resp)
  return {
    props: {
      apiResponse: api
    },
    revalidate: 60 * 60 * 24 // 24hrs
  }
}
