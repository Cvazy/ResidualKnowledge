import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ReactNode } from "react";
import { SITE_NAME } from "@/constants";
import { Providers } from "@/app/providers";
import { Header, Sidebar } from "@/components";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME} `,
  },
  description: "Проект для отслеживания остаточных знаний студентов",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div
            className={
              "flex flex-col items-center min-h-dvh w-full h-max relative"
            }
          >
            <Header />

            <div className={"flex flex-grow w-full"}>
              <div
                className={
                  "grid-cols-[1.2fr_6fr] w-full h-full xl:grid-cols-[1.1fr_6fr]"
                }
              >
                <Sidebar />

                <main className={"w-full h-full"}>{children}</main>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
