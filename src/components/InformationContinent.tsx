import {Flex,Box,Text} from "@chakra-ui/react"

interface InformationContinentProps {
    numberCountries: number
    numberLanguages: number
    numberCity100: number
}

export const InformationContinent = ({numberCity100,numberCountries,numberLanguages}: InformationContinentProps) => {
    return (
        <Flex flex="1" justifyContent="space-between" alignItems="center">
            <Box>
              <Text
                textAlign="center"
                fontSize="48px"
                color="orange"
                fontWeight="bold"
              >
                {numberCountries}
              </Text>
              <Text fontSize="28px">países</Text>
            </Box>

            <Box>
              <Text
                textAlign="center"
                fontSize="48px"
                color="orange"
                fontWeight="bold"
              >
                {numberLanguages}
              </Text>
              <Text fontSize="28px">línguas</Text>
            </Box>

            <Box>
              <Text
                textAlign="center"
                fontSize="48px"
                color="orange"
                fontWeight="bold"
              >
                {numberCity100}
              </Text>
              <Text fontSize="28px">cidades +100</Text>
            </Box>
          </Flex>
    )
}