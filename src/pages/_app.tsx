import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import {useRouter} from 'next/router'

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/slider.scss";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Header isGoHome={ router.asPath !== "/"} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
