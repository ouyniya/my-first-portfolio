import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "NYS's Portfolio | Developer, Designer, Debugger",
  description:
    "Hi, I'm NYS — a creative developer who turns ideas into interactive experiences. Explore my projects, workflow, and a few bugs I’ve made friends with.",
  keywords: [
    "NYS",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Creative Developer",
    "JavaScript",
    "React",
    "Next.js",
    "UX/UI",
  ],
  openGraph: {
    // This helps improve link previews when shared on social media.
    title: "NYS's Portfolio",
    description:
      "Creative frontend development portfolio of NYS. Come for the code, stay for the personality.",
    url: "https://nysdev.com",
    siteName: "NYS's Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "NYS Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} antialiased bg-primary text-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
