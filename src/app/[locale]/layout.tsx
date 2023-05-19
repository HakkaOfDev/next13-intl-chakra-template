import { languages } from "@/app/internationalization/settings";
import { APP_DESCRIPTION, APP_NAME } from "@/constants";
import { Providers } from "@/providers/Providers";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

type RootProps = {
  children: ReactNode;
  params: { locale?: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: RootProps) {
  let messages;
  try {
    messages = (await import(`../internationalization/locales/${locale}.ts`))
      .default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
