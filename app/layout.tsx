import { ReactNode } from "react";
import { cn, tacticSans } from "@/app/_common/utils";

import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@/app/_assets/styles/nprogress.css";
import "@/app/_assets/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(tacticSans.variable)}>
        <main className={"max-w-[1836px] mx-auto"}>{children}</main>
      </body>
    </html>
  );
}
