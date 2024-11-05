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
            <div className={"flex flex-grow w-full"}>
              <div
                className={
                  "grid grid-cols-[1.5fr_6fr] xl:grid-cols-[1.7fr_6fr] w-full"
                }
              >
                <Sidebar />

                <div className={"w-full h-full"}>
                  <div
                    className={
                      "flex flex-col items-center gap-6 w-full h-full sm:gap-7 md:gap-9 lg:gap-11 xl:gap-[51px]"
                    }
                  >
                    <Header />

                    <main className={"w-full h-full"}>
                      <div className={"bg-white w-full h-full"}>
                        <div
                          className={
                            "flex justify-center w-full h-full px-5 py-10 md:py-[51px]"
                          }
                        >
                          <div className={"max-w-[1144px] w-full"}>
                            {children}
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
