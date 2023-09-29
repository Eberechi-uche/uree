import "./globals.css";
import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import { Providers } from "./providers";

const roboto = Mooli({ weight: "400", subsets: ["latin"] });

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
