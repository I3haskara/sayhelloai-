import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const clashLike = Space_Grotesk({
  variable: "--font-clash",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const satoshiLike = Manrope({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sayhelloai.in"),
  title: {
    default: "SayHelloAI | Cinematic AI Creative Agency",
    template: "%s | SayHelloAI",
  },
  description:
    "SayHelloAI is a premium AI creative studio building cinematic advertising, game cinematics, concept art, and high-end digital experiences.",
  openGraph: {
    title: "SayHelloAI | Cinematic AI Creative Agency",
    description:
      "We build the future of creative media with AI through cinematic storytelling, virtual production, and premium visual systems.",
    url: "https://www.sayhelloai.in",
    siteName: "SayHelloAI",
    images: [
      {
        url: "/images/office.jpeg",
        width: 1200,
        height: 630,
        alt: "SayHelloAI Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SayHelloAI | Cinematic AI Creative Agency",
    description:
      "Premium AI studio for creative campaigns, game cinematics, and concept art.",
    images: ["/images/office.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${clashLike.variable} ${satoshiLike.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
