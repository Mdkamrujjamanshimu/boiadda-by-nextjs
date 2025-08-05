import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boiadda",
  description: "cloned by html, css, next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
