import type { Metadata } from "next";
import "./globals.css";
import { leagueSpartan } from "./ui/fonts/fonts";

export const metadata: Metadata = {
  title: "Room homepage ",
  description: "Frotnendmentor challagenge by Wizzaisha, using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased text-base`}>
        {children}
      </body>
    </html>
  );
}
