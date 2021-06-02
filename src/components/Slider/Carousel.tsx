import { Flex, Image, Text, Box, Link } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

type Items = {
  continentName: string;
  continentDescription: string;
  continentFile: string;
};

interface CaroulselProps {
  items: Items[];
}

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export const Carousel = ({ items }: CaroulselProps) => {
  return (
    <Flex w="100%" maxWidth="1240px" height="450px" paddingBottom="40px">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {items.map((continent, index) => {
          return continent.continentName !== "Europa" ? (
            <SwiperSlide key={index + 1} style={{ width: "1240px" }}>
              <Image
                objectFit="cover"
                position="absolute"
                zIndex="-1"
                w="100%"
                h="100%"
                src={continent.continentFile}
              />
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                margin="0 auto"
                height="100%"
              >
                <Text fontWeight="bold" fontSize="48px" color="white">
                  {continent.continentName} <br />
                </Text>
                <Text fontWeight="bold" fontSize="24px" color="white">
                  {continent.continentDescription}
                </Text>
              </Flex>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index + 1} style={{ width: "1240px" }}>
              <Link href="/continents/europa" passhref>
                <a style={{ textDecoration: "none" }}>
                  <Image
                    objectFit="cover"
                    position="absolute"
                    zIndex="-1"
                    w="100%"
                    h="100%"
                    src={continent.continentFile}
                  />
                  <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                    margin="0 auto"
                    height="100%"
                  >
                    <Text
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                      fontWeight="bold"
                      fontSize="48px"
                      color="white"
                    >
                      {continent.continentName} <br />
                    </Text>
                    <Text
                      textDecoration="none"
                      fontWeight="bold"
                      fontSize="24px"
                      color="white"
                    >
                      {continent.continentDescription}
                    </Text>
                  </Flex>
                </a>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};
