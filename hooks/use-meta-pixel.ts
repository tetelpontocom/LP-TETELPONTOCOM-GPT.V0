"use client"
import { useEffect } from "react"

/**
 * Patch v2.5.3-B — MetaPixel Reset Safe Mode (for V0 Free)
 * Corrige runtime 'arguments is not defined'
 * Força reconstrução do fbq e elimina resquícios do pixel antigo.
 */

export function useMetaPixel() {
  const track = (event: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        ;(window as any).fbq("track", event, params || {})
      } catch (err) {
        console.warn("Pixel track error:", err)
      }
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    // 🔒 Força limpeza de qualquer versão antiga
    if ((window as any).fbq) delete (window as any).fbq

    const script = document.createElement("script")
    script.async = true
    script.src = "https://connect.facebook.net/en_US/fbevents.js"
    document.head.appendChild(script)

    // 🔧 Versão compatível (sem 'arguments')
    const fbq = (...args: any[]) => {
      const n = (window as any).fbq
      if (n.callMethod) n.callMethod(...args)
      else n.queue.push(args)
    }
    ;(window as any).fbq = Object.assign(fbq, {
      queue: [],
      loaded: true,
      version: "2.0",
      push: function (...args: any[]) {
        this.queue.push(args)
      },
      callMethod: undefined,
    })
    ;(window as any).fbq("init", "1305167264321996")
    ;(window as any).fbq("track", "PageView")

    console.log("✅ Meta Pixel inicializado com segurança (v2.5.3-B)")
  }, [])

  return { track }
}
