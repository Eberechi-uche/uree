import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import { Providers } from "./providers";

const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uree",
  description: "your on page assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
