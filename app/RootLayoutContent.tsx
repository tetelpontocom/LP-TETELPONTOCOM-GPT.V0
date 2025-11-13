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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.15 },
    )

    document
      .querySelectorAll(".reveal, .fade-section, .slide-section, section, .card")
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // — Verifica se o Meta Pixel está ativo
    if (!(window as any).fbq) {
      console.warn("⚠️ Meta Pixel não detectado. Verifique a inicialização.")
      return
    }

    const fbq = (window as any).fbq

    // 1️⃣ Page View — sempre ao carregar a LP
    fbq("track", "PageView")
    console.log("✅ PCJ MetaLayer: PageView registrado")

    // 2️⃣ Clicks & Leads — rastreia botões e CTAs
    const leadElements = document.querySelectorAll('a[href*="tetel"], a[href*="whatsapp"], button, .cta-button, .btn')

    leadElements.forEach((el) => {
      el.addEventListener("click", () => {
        const label = el.getAttribute("aria-label") || el.textContent?.trim() || "Lead-Desconhecido"
        fbq("trackCustom", "LeadClick", { label })
        console.log(`🎯 Lead registrado: ${label}`)
      })
    })

    // 3️⃣ Scroll Depth — intenção de engajamento
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent > 25 && !(window as any)._25Sent) {
        fbq("trackCustom", "Scroll25")
        ;(window as any)._25Sent = true
        console.log("📊 Scroll 25% registrado")
      }
      if (scrollPercent > 50 && !(window as any)._50Sent) {
        fbq("trackCustom", "Scroll50")
        ;(window as any)._50Sent = true
        console.log("📊 Scroll 50% registrado")
      }
      if (scrollPercent > 90 && !(window as any)._90Sent) {
        fbq("trackCustom", "Scroll90")
        ;(window as any)._90Sent = true
        console.log("📊 Scroll 90% registrado")
      }
    }

    window.addEventListener("scroll", handleScroll)

    // 4️⃣ WhatsApp Flutuante — interação direta
    const whatsappBtn = document.querySelector("button[aria-label='Falar no WhatsApp']")
    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", () => {
        fbq("trackCustom", "WhatsAppClick")
        console.log("💬 Evento WhatsApp registrado")
      })
    }

    // 5️⃣ Tempo de Sessão (Engajamento)
    const start = Date.now()
    const engagementTimer = setInterval(() => {
      const seconds = Math.floor((Date.now() - start) / 1000)
      if (seconds % 30 === 0) {
        fbq("trackCustom", "TempoNaPagina", { segundos: seconds })
        console.log(`🕒 Engajamento: ${seconds}s`)
      }
    }, 5000)

    // 🔚 Limpeza
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(engagementTimer)
    }
  }, [])

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
