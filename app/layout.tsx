import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roshan Dangol – Full-Stack Web & Backend Developer",
  metadataBase: new URL("https://roshandangol.netlify.app"),
  description:
    "I’m Roshan Dangol, highly passionate full-stack and backend developer from Lalitpur, Nepal. Skilled in Node.js, Express, React, TypeScript, PostgreSQL, MongoDB and more.",
  keywords: [
    "Roshan Dangol",
    "backend developer",
    "full-stack developer",
    "fullstack developer",
    "developer Nepal",
    "Nepali developer",
    "web developer Nepal",
    "web developer",
    "backend developer Nepal",
    "full-stack developer Nepal",
    "fullstack developer Nepal",
    "MERN Stack developer Nepal",
    "MERN",
    "Node.js developer Nepal",
    "React developer Nepal",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Roshan Dangol" }],
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: "https://roshandangol.netlify.app",
    title: "Roshan Dangol – Full-Stack Web & Backend Developer",
    description:
      "I build scalable backend systems and full-stack applications using modern web technologies.",
    images: [
      {
        url: "/graduation.jpg", // Replace with your image
        width: 1200,
        height: 630,
        alt: "Roshan Dangol Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roshan Dangol – Full-Stack Web & Backend Developer",
    description:
      "Backend & Full-Stack Developer skilled in modern web technologies.",
    images: ["/graduation.jpg"], // Replace with your image
  },

  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
