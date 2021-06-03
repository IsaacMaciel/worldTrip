import {
  Image,
  Box,
  Text,
  Flex,
  HStack,
  VStack,
  Divider,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../components/mainPage/Banner";
import { Carousel } from "../components/Slider/Carousel";

type Continent = {
  continentName: string;
  continentDescription: string;
  continentFile: string;
};

interface HomeProps {
  apiResponse: Continent[];
}

export default function Home({ apiResponse }: HomeProps) {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  console.log(isMobile);

  return (
    <VStack spacing="80px">
      <Banner showImage={!isMobile} />
      <Flex
        maxWidth="1160px"
        width="100%"
        margin="0 auto"
        alignItems="center"
        justifyContent="space-between"
      >
        {!isMobile ? (
          <>
            <Image src="/images/nightlife.svg" />
            <Image src="/images/beach.svg" />
            <Image src="/images/modern.svg" />
            <Image src="/images/classic.svg" />
            <Image src="/images/more.svg" />
          </>
        ) : (
          <Flex
            w="100%"
            flexDirection="column"
            paddingX="20px"
            // margin="0 auto"
            alignItems="center"
          >
            <Grid templateColumns="repeat(2,1fr)" gap="40px">
              <Box>
                <Image src="/images/nightlifeMobile.svg" />
                <Image src="/images/beachMobile.svg" />
              </Box >
              <Box>
                <Image src="/images/modernMobile.svg" />
                <Image src="/images/classicMobile.svg" />
              </Box>
            </Grid>
              <Image marginTop="10px" src="/images/moreMobile.svg" />
          </Flex>
        )}
      </Flex>
      <Box>
        <VStack spacing="52px">
          <Box
            maxWidth="90px"
            width="100%"
            margin="0 auto"
            borderTop="2px solid black"
          />
          <Text
            color="text.headingText"
            fontSize={["20px", "36px"]}
            textAlign="center"
          >
            {" "}
            Vamos nessa? <br /> Então escolha seu continente
          </Text>
        </VStack>
      </Box>
      <Carousel items={apiResponse} />
    </VStack>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const api = await fetch("http://localhost:3000/api/continents")
    .then((resp) => resp.json())
    .then((resp) => resp);
  return {
    props: {
      apiResponse: api,
    },
    revalidate: 60 * 60 * 24, // 24hrs
  };
};
