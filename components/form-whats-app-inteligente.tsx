"use client"

import { useEffect, useMemo, useState } from "react"
import { X, MessageCircle, AlertCircle } from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void
  origemSecao: string // Ex: "Ecossistema > Pacote Starter Tetel"
  whatsappDestino: string // Ex: "5582999176900"
}

export default function FormWhatsAppInteligente({ open, onClose, origemSecao, whatsappDestino }: Props) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [whats, setWhats] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [erro, setErro] = useState<string | null>(null)

  // Pega ?origem=... da URL atual (ex.: tetelpontocom)
  const origemURL = useMemo(() => {
    if (typeof window === "undefined") return null
    const p = new URLSearchParams(window.location.search)
    return p.get("origem")
  }, [])

  useEffect(() => {
    if (!open) {
      // limpa quando fechar
      setNome("")
      setEmail("")
      setWhats("")
      setMensagem("")
      setErro(null)
    }
  }, [open])

  const montarMensagem = () => {
    const linhas: string[] = []
    linhas.push("Olá 👋, vim pelo site TetelPontocom.")
    if (origemSecao) linhas.push(`Origem: ${origemSecao}`)
    if (origemURL) linhas.push(`Origem técnica: ${origemURL}`)
    if (nome) linhas.push(`Nome: ${nome}`)
    if (email) linhas.push(`E-mail: ${email}`)
    if (whats) linhas.push(`WhatsApp: ${whats}`)
    if (mensagem) linhas.push(`Mensagem: ${mensagem}`)
    return linhas.join("\n")
  }

  const enviar = () => {
    // Validação: precisa de pelo menos UM canal de retorno (whats OU email)
    if (!whats && !email) {
      setErro("Informe pelo menos WhatsApp ou e-mail para podermos retornar.")
      return
    }
    setErro(null)

    // Evento Lead
    try {
      ;(window as any).fbq?.("track", "Lead", { label: "WhatsApp - Form Submit", origemSecao, origemURL })
    } catch {}

    const texto = encodeURIComponent(montarMensagem())
    const url = `https://wa.me/${whatsappDestino}?text=${texto}`

    window.open(url, "_blank", "noopener,noreferrer")
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-6">
      <div className="w-[95%] sm:max-w-lg rounded-2xl bg-white p-4 sm:p-6 shadow-xl border border-[#EEDFD2] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base sm:text-lg font-semibold">Fale com a TetelPontocom</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-black/5">
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#6D5F56] mb-4 leading-relaxed">
          Preencha rapidinho e enviaremos sua mensagem no WhatsApp com o contexto certo.
        </p>

        <div className="grid gap-2 sm:gap-3">
          <div>
            <label className="text-xs sm:text-sm">Nome (opcional)</label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full rounded-xl border border-[#EEDFD2] px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#EEDFD2]"
              placeholder="Seu nome"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
            <div>
              <label className="text-xs sm:text-sm">WhatsApp (recomendado)</label>
              <input
                value={whats}
                onChange={(e) => setWhats(e.target.value)}
                className="mt-1 w-full rounded-xl border border-[#EEDFD2] px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#EEDFD2]"
                placeholder="(82) 9 9999-9999"
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm">E-mail (opcional)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-[#EEDFD2] px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#EEDFD2]"
                placeholder="voce@exemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs sm:text-sm">Mensagem (opcional)</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded-xl border border-[#EEDFD2] px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#EEDFD2]"
              placeholder="Conte rapidamente sua dúvida, proposta ou interesse."
            />
          </div>

          {erro && (
            <div className="flex items-center gap-2 text-[#8a3a00] bg-[#FFF3E8] border border-[#FFD7BA] rounded-xl px-3 py-2 text-xs sm:text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{erro}</span>
            </div>
          )}

          <button
            onClick={enviar}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F1A17] text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar via WhatsApp
          </button>

          <p className="text-[10px] sm:text-[11px] text-[#6D5F56] mt-2 text-center">
            Ao enviar, abriremos seu WhatsApp com uma mensagem já pronta. Você poderá editar antes de enviar.
          </p>
        </div>
      </div>
    </div>
  )
}
