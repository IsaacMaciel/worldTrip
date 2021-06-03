import {
  Image,
  Flex,
  Text,
  VStack,
  Box,
  HStack,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { BannerContinent } from "../../components/pageSlug/BannerContinent";
import { CityCard } from "../../components/pageSlug/CityCard";
import { InformationContinent } from "../../components/pageSlug/InformationContinent";

type Details = {
  banner: string;
  description: string;
  countriesNumber: number;
  languages: number;
  city100: number;
};

type City = {
  city: string;
  country: string;
  countryFlag: string;
  cityImage: string;
};

type ContinentInfo = {
  continentName: string;
  details: Details;
  topCities: City[];
};

interface ContinentProps {
  continent: ContinentInfo;
}

const Continent = ({ continent }: ContinentProps) => {
  return (
    <VStack spacing={["20px","80px"]}>
      <BannerContinent
        continentName={continent.continentName}
        continentImage={continent.details.banner}
      />

      <Flex
        maxWidth="1160px"
        justifyContent="space-between"
        alignItems="center"  
      >
        <HStack flexDir={["column","row"]} spacing={["0px","70px"]}>
          <Text color="text.headingText" marginBottom={["20px","initial"]} flex="1" w="100%" px={["20px","initial"]} fontSize={["14px","24px"]}>
            {continent.details.description}
          </Text>
          <InformationContinent
            numberCountries={continent.details.countriesNumber}
            numberLanguages={continent.details.languages}
            numberCity100={continent.details.city100}
          />
        </HStack>
      </Flex>

      <Box maxW="1160px" w="100%">
        <Text marginBottom={["20px","40px"]} px={["20px",'initial']} fontSize={["24px","36px"]} color="text.headingText">
          Cidades +100
        </Text>
        <SimpleGrid w="100%" minChildWidth="256px"  spacing={["20px","40px"]} paddingBottom="30px">
          {continent.topCities.map((city,index) => (
            <CityCard
              key={index + 1}
              cityImage={city.cityImage}
              cityName={city.city}
              countryName={city.country}
              countryFlag={city.countryFlag}
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "america" } },
      { params: { slug: "europa" } },
      { params: { slug: "asia" } },
      { params: { slug: "africa" } },
      { params: { slug: "antartida" } },
      { params: { slug: "oceania" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const api = await fetch(`http://localhost:3000/api/continents/${slug}`)
    .then((resp) => resp.json())
    .then((resp) => resp);
  return {
    props: {
      continent: api,
    },
  };
};
