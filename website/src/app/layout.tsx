import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The AI Desk | AI tools, explained for faculty",
  description:
    "Practical one-pagers on AI tools that actually matter for teaching, research, and academic workflows. No jargon, no hype. Just what you need to know.",
  openGraph: {
    title: "The AI Desk | AI tools, explained for faculty",
    description:
      "Practical one-pagers on AI tools that actually matter for teaching, research, and academic workflows.",
    url: "https://www.aiyellowpage.online",
    siteName: "The AI Desk",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
