"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  ExternalLink,
  Gift,
  HandHeart,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  TrendingUp,
  MessageCircle,
} from "lucide-react"
import FormWhatsAppInteligente from "@/components/form-whats-app-inteligente"

/**
 * LP TetelPontocom v2.3.4 (COMPLETA)
 * - Hero em camadas (mobile first) com headline real + CTA + imagem
 * - Todas as seções reinstaladas: Curadoria, Benefícios, Ecossistema, Negócios, Agentes, Desenvolvimento, Parceiros, Sobre, Contato
 * - Pixel Meta, SEO, WhatsApp flutuante e responsividade polida
 * - Formulário WhatsApp inteligente integrado
 */

export default function TetelPontocomV234() {
  const [formOpen, setFormOpen] = useState(false)
  const [formOrigem, setFormOrigem] = useState("")
  const [formWhatsApp] = useState("5582999176900")

  const openForm = (origem: string) => {
    setFormOrigem(origem)
    setFormOpen(true)
  }

  // Pixel
  useEffect(() => {
    if (!(window as any).fbq) {
      !((f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
        if (f.fbq) return
        n = f.fbq = () => {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
      ;(window as any).fbq("init", "1305167264321996")
      ;(window as any).fbq("track", "PageView")
    } else {
      ;(window as any).fbq("track", "PageView")
    }
  }, [])

  const lead = (label: string) => (window as any).fbq?.("track", "Lead", { label })
  const view = (name: string) => (window as any).fbq?.("track", "ViewContent", { content_name: name })

  return (
    <main className="min-h-screen bg-[#FFF6EF] text-[#1F1A17]">
      <FormWhatsAppInteligente
        open={formOpen}
        onClose={() => setFormOpen(false)}
        origemSecao={formOrigem}
        whatsappDestino={formWhatsApp}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#FFF6EF]/80 border-b border-[#EEDFD2] py-2.5">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Log_Tetelpontocom-WJM7NaR114OeytpOReCJqSa3ZqKd1G.png"
              alt="Logo Tetel Pontocom"
              width={40}
              height={40}
              priority
              className="rounded-md shadow-sm ring-1 ring-[#EEDFD2]/60"
            />
            <span className="font-semibold tracking-tight text-base text-[#1F1A17]">Tetel Pontocom</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#inicio" className="hover:opacity-80">
              Início
            </a>
            <a href="#categorias" className="hover:opacity-80">
              Curadoria
            </a>
            <a href="#beneficios" className="hover:opacity-80">
              Benefícios
            </a>
            <a href="#integracao" className="hover:opacity-80">
              Ecossistema
            </a>
            <a href="#negocios" className="hover:opacity-80">
              Negócios
            </a>
            <a href="#agentes" className="hover:opacity-80">
              IA & Soluções
            </a>
            <a href="#parceiros" className="hover:opacity-80">
              Parceiros
            </a>
            <a href="#sobre" className="hover:opacity-80">
              Sobre
            </a>
            <a href="#contato" className="hover:opacity-80">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO EM CAMADAS (MOBILE FIRST) */}
      <section
        id="inicio"
        className="w-full bg-[#FFF6EF] flex flex-col items-center justify-center text-center py-16 md:py-24 px-6"
      >
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            Confiança e propósito também cabem nas suas escolhas.
          </h1>
          <p className="mt-3 text-[#4B423C] text-sm md:text-base">
            Descubra produtos, serviços e parceiros recomendados de verdade.
          </p>
        </div>

        <a
          href="#categorias"
          onClick={() => lead("Hero - Explorar Agora")}
          className="inline-flex items-center gap-2 rounded-2xl bg-[#1F1A17] text-white px-6 py-3 text-sm md:text-base shadow-sm hover:opacity-90 transition"
        >
          Explorar agora <ArrowRight className="h-4 w-4" />
        </a>

        <div className="relative w-full mt-12 md:mt-16 max-w-4xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-tetelpontocom-v1-LxHYkMwMxkpOfryzpg7hKT7rM9ypCG.png"
            alt="Hero TetelPontocom - Confiança e propósito também cabem nas suas escolhas"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl object-cover shadow-lg"
            priority
          />
        </div>
      </section>

      {/* CURADORIA / DESTAQUES */}
      <section id="categorias" className="border-t border-[#EEDFD2] bg-[#FFF9F4]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Destaques</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Shopee */}
            <a
              href="https://shopee.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#EEDFD2] bg-white p-5 hover:shadow-md transition"
              onClick={() => lead("Shopee")}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">Shopee</h3>
                  <p className="mt-1 text-sm text-[#6D5F56]">Seleção útil, honesta e atualizada.</p>
                </div>
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#6D5F56]">
                <Sparkles className="h-4 w-4" />
                <span>Acesso antecipado a achados e cupons.</span>
              </div>
            </a>

            {/* Amazon */}
            <a
              href="https://amazon.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#EEDFD2] bg-white p-5 hover:shadow-md transition"
              onClick={() => lead("Amazon")}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">Amazon</h3>
                  <p className="mt-1 text-sm text-[#6D5F56]">Curadoria com propósito, utilidade e preço justo.</p>
                </div>
                <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#6D5F56]">
                <Gift className="h-4 w-4" />
                <span>Ofertas selecionadas e confiáveis.</span>
              </div>
            </a>

            {/* Parcerias Locais */}
            <a
              href="#parceiros"
              className="group rounded-2xl border border-[#EEDFD2] bg-white p-5 hover:shadow-md transition"
              onClick={() => lead("Parcerias Locais - Entrada")}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">Parcerias Locais</h3>
                  <p className="mt-1 text-sm text-[#6D5F56]">Indicações que fortalecem nossa comunidade.</p>
                </div>
                <ArrowRight className="h-4 w-4 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#6D5F56]">
                <Users className="h-4 w-4" />
                <span>Conexões próximas e com significado.</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="border-t border-[#EEDFD2]">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Acesso antecipado às indicações",
              icon: <Sparkles className="h-5 w-5" />,
              text: "Fique por dentro do que realmente vale a pena.",
            },
            {
              title: "Cupons e ofertas selecionadas",
              icon: <Gift className="h-5 w-5" />,
              text: "Benefícios reais, com utilidade no dia a dia.",
            },
            {
              title: "Indicações com propósito",
              icon: <HandHeart className="h-5 w-5" />,
              text: "Cada recomendação tem um motivo e um cuidado.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-white border border-[#EEDFD2] p-6">
              <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">{b.icon}</div>
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-[#6D5F56]">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSSISTEMA (Integração) */}
      <section id="integracao" className="border-y border-[#EEDFD2] bg-[#FFF6EF]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-center text-sm text-[#6D5F56] mb-6">
            A TetelPontocom é parte de um ecossistema que acredita em crescimento com propósito.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                nome: "Faça Caixa Agora",
                preco: "R$ 9,90",
                href: "https://facacaixaagora.tetel.online?origem=tetelpontocom",
              },
              {
                nome: "Minha IA Premium",
                preco: "R$ 27,00",
                href: "https://minhaiapremium.tetel.online?origem=tetelpontocom",
              },
              {
                nome: "Pacote Starter Tetel",
                preco: "R$ 39,90",
                href: "https://facacaixaagoraupsell.tetel.online?origem=tetelpontocom",
              },
            ].map((p) => (
              <div key={p.nome} className="rounded-2xl border border-[#EEDFD2] bg-white p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="font-semibold">{p.nome}</h3>
                  <p className="mt-1 text-sm text-[#6D5F56]">Produto do ecossistema · {p.preco}</p>
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    ;(window as any).fbq?.("track", "ViewContent", { content_name: p.nome })
                    ;(window as any).fbq?.("track", "Lead", { label: p.nome })
                  }}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F1A17] text-white px-4 py-2 text-sm hover:opacity-90 transition"
                >
                  Quero saber mais <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEGÓCIOS PRONTOS */}
      <section id="negocios" className="border-b border-[#EEDFD2] bg-[#FFF9F4]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Negócios Prontos para Começar</h2>
          <p className="text-[#6D5F56] mb-10 max-w-2xl">
            Modelos testados e prontos para você adaptar, personalizar e começar a lucrar ainda hoje — de forma simples,
            humana e com propósito.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                nome: "Bolos Caseiros Lucrativos",
                desc: "Receitas e estrutura completa para revenda e crescimento real.",
                icon: <Gift className="h-5 w-5" />,
              },
              {
                nome: "Balas de Coco Gourmet",
                desc: "Produto artesanal de alto valor e margens reais.",
                icon: <Sparkles className="h-5 w-5" />,
              },
              {
                nome: "Geladinhos Gourmet",
                desc: "Modelos prontos de geladinhos que vendem.",
                icon: <TrendingUp className="h-5 w-5" />,
              },
              {
                nome: "Iogurtes Caseiros Lucrativos",
                desc: "Guia completo de produção, precificação e venda com lucro.",
                icon: <Gift className="h-5 w-5" />,
              },
            ].map((n) => (
              <div key={n.nome} className="rounded-2xl border border-[#EEDFD2] bg-white p-6 hover:shadow-md transition">
                <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">{n.icon}</div>
                <h3 className="font-semibold">{n.nome}</h3>
                <p className="mt-1 text-sm text-[#6D5F56]">{n.desc}</p>
                <button
                  onClick={() => {
                    view(n.nome)
                    lead(n.nome)
                    openForm(`Negócios Prontos > ${n.nome}`)
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1F1A17] text-white px-4 py-2 text-sm hover:opacity-90 transition"
                >
                  Quero saber mais <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}

            {/* Card "Novos Negócios" */}
            <div className="rounded-2xl border border-[#EEDFD2] bg-white p-6 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Novos Negócios em Breve</h3>
                <p className="mt-1 text-sm text-[#6D5F56]">Cadastre-se para ser avisado dos próximos lançamentos.</p>
              </div>
              <button
                onClick={() => {
                  lead("Novos Negócios")
                  openForm("Negócios Prontos > Novos Negócios em Breve")
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1F1A17] text-white px-4 py-2 text-sm hover:opacity-90 transition"
              >
                Quero ser avisado <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AGENTES DE IA */}
      <section id="agentes" className="mx-auto max-w-6xl px-4 py-16 border-b border-[#EEDFD2]">
        <h2 className="text-2xl font-semibold mb-6 tracking-tight">Agentes de IA Tetel</h2>
        <p className="text-[#6D5F56] mb-10 max-w-2xl">
          Inteligências artificiais que ajudam empresas e empreendedores a crescer com propósito.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { nome: "IA SDR", desc: "Captação e qualificação automática de leads." },
            { nome: "IA Vendas", desc: "Atendimento comercial inteligente e humanizado." },
            { nome: "IA Suporte", desc: "Acompanhamento de clientes com empatia e agilidade." },
          ].map((agente) => (
            <div
              key={agente.nome}
              className="rounded-2xl border border-[#EEDFD2] bg-white p-6 hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{agente.nome}</h3>
              <p className="mt-1 text-sm text-[#6D5F56]">{agente.desc}</p>
              <button
                onClick={() => {
                  view(agente.nome)
                  lead(agente.nome)
                  openForm(`Agentes de IA > ${agente.nome}`)
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1F1A17] text-white px-4 py-2 text-sm hover:opacity-90 transition"
              >
                Quero saber mais <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DESENVOLVIMENTO WEB & AUTOMAÇÕES */}
      <section className="border-b border-[#EEDFD2] bg-[#FFF9F4]">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">Desenvolvimento Web & Automações</h2>
            <p className="text-[#6D5F56] mb-4">
              Soluções personalizadas criadas pela equipe TetelPontocom — websites, landing pages, automações e
              integrações para impulsionar resultados.
            </p>
            <button
              onClick={() => {
                lead("Contato Desenvolvimento")
                openForm("Desenvolvimento Web & Automações")
              }}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#1F1A17] text-white px-5 py-3 text-sm shadow-sm hover:opacity-90 transition"
            >
              Solicitar proposta <Wrench className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-3xl bg-white border border-[#EEDFD2] p-8 text-center">
            <p className="text-[#4B423C] italic">
              "Cada automação e site é pensado para gerar impacto real e simplificar processos."
            </p>
          </div>
        </div>
      </section>

      {/* PARCEIROS LOCAIS */}
      <section id="parceiros" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 tracking-tight">Parceiros Locais</h2>
        <p className="text-[#6D5F56] mb-10 max-w-2xl">
          Parceiros com propósito em Alagoas — confiança que tem endereço.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Maceió", "Rio Largo", "Santa Luzia do Norte"].map((cidade) => (
            <div key={cidade} className="rounded-2xl border border-[#EEDFD2] bg-white p-6 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{cidade}</h3>
              <p className="mt-1 text-sm text-[#6D5F56]">Empresas e profissionais parceiros nesta região.</p>
              <button
                onClick={() => {
                  view(`Parceiros - ${cidade}`)
                  lead(`Parceiros - ${cidade}`)
                  openForm(`Parceiros Locais > ${cidade}`)
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#1F1A17] text-white px-4 py-2 text-sm hover:opacity-90 transition"
              >
                Quero conhecer <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-[#EEDFD2] bg-[#FFF9F4]">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Sobre a TetelPontocom</h2>
            <p className="mt-2 text-[#4B423C]">
              Não somos loja — somos curadoria afetiva. Um lugar de confiança, utilidade e pertencimento. Aqui, cada
              indicação tem um motivo e reforça o nosso compromisso com crescimento com propósito dentro do ecossistema
              Tetel.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-[#EEDFD2] p-6">
            <ul className="space-y-3 text-sm text-[#4B423C]">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-4 w-4 mt-0.5" /> Transparência em cada recomendação.
              </li>
              <li className="flex items-start gap-3">
                <HandHeart className="h-4 w-4 mt-0.5" /> Cuidado humano e utilidade real.
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-4 w-4 mt-0.5" /> Descoberta guiada, sem pressão de compra.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTATO (WhatsApp) */}
      <section id="contato" className="border-t border-[#EEDFD2] bg-[#FFF9F4]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Fale com a TetelPontocom</h2>
          <p className="text-[#6D5F56] mb-8">
            Tem dúvidas, parcerias ou quer participar do ecossistema? Entre em contato diretamente pelo WhatsApp.
          </p>
          <button
            onClick={() => {
              lead("WhatsApp - Contato")
              openForm("Contato > Fale com a TetelPontocom")
            }}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-2xl text-base font-medium shadow-sm hover:opacity-90 transition"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </button>
        </div>
      </section>

      {/* WHATSAPP FLUTUANTE */}
      <button
        onClick={() => {
          lead("WhatsApp Flutuante")
          openForm("WhatsApp Flutuante")
        }}
        className="fixed bottom-5 right-5 z-50 bg-[#25D366]/90 hover:bg-[#25D366] text-white p-3 rounded-full shadow-lg transition"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* FOOTER */}
      <footer className="border-t border-[#EEDFD2] bg-[#FFF6EF] text-[#4B423C] text-sm text-center py-8">
        © {new Date().getFullYear()} TetelPontocom — Parte do Ecossistema Tetel.
      </footer>
    </main>
  )
}
