"use client"

import type React from "react"
import { useEffect, useState } from "react"

function usePCJOrigin() {
  const [isFromTetelEcosystem, setIsFromTetelEcosystem] = useState(false)

  useEffect(() => {
    const referrer = document.referrer
    const tetelDomains = ["tetel.com.br", "fivecom.com.br", "tetelpontocom.com"]
    const isTetelOrigin = tetelDomains.some((domain) => referrer.includes(domain))
    setIsFromTetelEcosystem(isTetelOrigin)
  }, [])

  return isFromTetelEcosystem
}

export default function RootLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isFromTetelEcosystem = usePCJOrigin()

  return (
    <>
      {isFromTetelEcosystem && (
        <header className="w-full bg-zinc-900 text-white py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <img src="/images/logo1-tetelpontocom.png" alt="TetelPontocom" className="h-10 w-10 rounded-full" />
            <h1 className="text-lg font-semibold">TetelPontocom</h1>
          </div>
        </header>
      )}
      {children}
    </>
  )
}
