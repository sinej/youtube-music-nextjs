import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ThemeProvider} from "@/providers/themeProvider";
import {sleep} from "@/lib/utils";
import Sidebar from "@/components/side/sidebar";
import PlayerWrapper from "@/components/elements/player/playerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Music",
  description: "Youtube Music Next App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()


  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>

          <Sidebar>
            {children}
          </Sidebar>
          <PlayerWrapper />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
