import type React from "react"
import type { Metadata } from "next"
import { DM_Sans} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["sans-serif"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Don Gitonga's Ethical Journey",
  description: "A personal reflection on 12 weeks of exploring moral philosophy and ethical decision-making",
  twitter: {
    card: "summary_large_image",
    title: "Don Gitonga's Ethical Journey",
    description: "A personal reflection on 12 weeks of exploring moral philosophy and ethical decision-making"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Don's ethical Journey" />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
