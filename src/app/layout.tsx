import type { Metadata } from "next";
import localFont from "next/font/local";
import "../scss/main.scss";

const azoSans = localFont({
  src: [
    {
      path: "./fonts/azo-sans/azo-sans-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/azo-sans/azo-sans-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/azo-sans/azo-sans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/azo-sans/azo-sans-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-azo-sans",
});

export const metadata: Metadata = {
  title: "Tokners landing page",
  description:
    "This is the landing page for Tokners, a platform for tokenized networks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={azoSans.variable}>
      <body>{children}</body>
    </html>
  );
}
