import { languages } from "@/app/internationalization/settings";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: languages,
  defaultLocale: "en",
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
