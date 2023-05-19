"use client";

import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

function Hero() {
  const t = useTranslations("global");

  return (
    <VStack w="full" h="100vh" justify="center" align="center" spacing={4}>
      <Heading>Next 13 Intl Chakra-UI Kit</Heading>
      <Text fontSize="lg">
        {t.rich("developed", {
          developer: "HakkaOfDev",
          a: (chunks) => (
            <Link href="https://hakkaofdev.fr" color="green" isExternal>
              {chunks}
            </Link>
          ),
        })}
      </Text>
      <LocaleSwitcher />
    </VStack>
  );
}

export default Hero;
