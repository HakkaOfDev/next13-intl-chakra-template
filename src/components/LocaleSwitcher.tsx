"use client";

import { languages } from "@/app/internationalization/settings";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";

function LocaleSwitcher({ ...props }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectLang(lang: string) {
    router.replace(`/${lang}${pathname}`);
  }

  return (
    <Box>
      <Menu placement="top">
        <MenuButton as={Button} {...props}>
          {locale?.toUpperCase()}
        </MenuButton>
        <MenuList minW="fit-content">
          {languages.map((lang) => (
            <MenuItem
              key={lang}
              isDisabled={locale === lang ? true : false}
              onClick={() => onSelectLang(lang)}
            >
              {lang.toUpperCase()}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default LocaleSwitcher;
