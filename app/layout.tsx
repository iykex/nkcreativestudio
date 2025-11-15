import type React from "react"
import type { Metadata } from "next"
import { Lato, Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "sonner"

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
})

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-roboto-slab",
})

export const metadata: Metadata = {
  title: "AP Creative - Design Studio | Graphic Design & Branding",
  description:
    "Professional creative design studio offering graphic design, branding services, etc. Transform your brand vision into reality.",
  keywords: "graphic design, branding, packaging, logo design, flyers, posters",
  generator: "iykex",
  authors: [{ name: "AP Creative Studio" }],
  openGraph: {
    type: "website",
    url: "https://www.apcreativestudio.net",
    title: "AP Creative - Design Studio",
    description:
      "Professional creative design studio offering graphic design, branding, and packaging services.",
    images: [
      {
        url: "https://www.apcreativestudio.net/snapshot.png",
        width: 1200,
        height: 630,
        alt: "AP Creative Studio Website Snapshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AP Creative - Design Studio | Graphic Design & Branding",
    description:
      "Professional creative design studio offering graphic design, branding, and packaging services.",
    images: ["https://www.apcreativestudio.net/snapshot.png"],
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${lato.variable} ${roboto_slab.variable} font-sans antialiased overflow-x-hidden body-padding`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
