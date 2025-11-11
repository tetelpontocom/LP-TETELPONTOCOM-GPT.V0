import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import RootLayoutContent from "./RootLayoutContent"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TetelPontocom — Curadoria, Propósito e Confiança Digital",
  description:
    "A TetelPontocom é curadoria afetiva e digital. Conecte-se a produtos, serviços e parceiros com propósito, confiança e utilidade real.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TetelPontocom — Curadoria com Propósito",
    description: "Parte do Ecossistema Tetel. Indicações que fazem sentido — confiança e utilidade nas suas escolhas.",
    images: [
      {
        url: "/images/og-tetel-logo.png",
        width: 1200,
        height: 630,
        alt: "TetelPontocom - Curadoria com Propósito",
      },
    ],
  },
  themeColor: "#FFF6EF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  )
}
