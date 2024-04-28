import type {Metadata} from "next";
import {Inter} from "next/font/google";
import '@mantine/core/styles.css';
import "./globals.css";
import {ColorSchemeScript, createTheme, MantineProvider} from "@mantine/core";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "NurseSync",
  description: "Solution de facturation pour les garderies scolaires",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <head>
        <ColorSchemeScript/>
      </head>
      <body className={inter.className}>
      <MantineProvider theme={createTheme({
        defaultRadius: "md",
        primaryColor: "dark",
      })}>
        {children}
      </MantineProvider>
      </body>
      </html>
  )
      ;
}
