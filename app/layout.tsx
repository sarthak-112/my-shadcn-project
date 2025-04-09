import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HustleHub",
  description:
    "Hustle symbolizes hard work, determination, and the drive to succeed. Hub represents a central place where people connect, collaborate, and find solutions. Together, HustleHub conveys the idea of a go-to platform that empowers entrepreneurs, influencers, and businesses by providing essential online skills and services to accelerate their success. These services include: Graphic designing, Influencer marketing, Copywriting, Website designing ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
