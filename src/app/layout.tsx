import Sidebar from "@/components/sidebar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Seguros Bolívar",
  description: "Seguros Bolívar",
  icons: {
    icon: "../favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body className="relative scrollbar-none bg-background">
        <div className="absolute w-screen h-screen">
          <div className="flex flex-col w-full h-full">
            <Header />
            <div className="flex flex-row w-full h-full  overflow-hidden ">
              <Sidebar />
              <main className="px-4 pt-2">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
