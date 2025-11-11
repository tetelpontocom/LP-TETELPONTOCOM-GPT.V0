"use client"

import { useState } from "react"
import Image from "next/image"
import { useMetaPixel } from "@/hooks/use-meta-pixel"

export default function TetelPontocomV252() {
  const { track } = useMetaPixel()

  const [formOpen, setFormOpen] = useState(false)
  const [formOrigem, setFormOrigem] = useState("")
  const [formWhatsApp] = useState("5582999176900")

  const openForm = (origem: string) => {
    setFormOrigem(origem)
    setFormOpen(true)
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-black/10 py-2.5">
        <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/images/logo1-tetelpontocom.png"
              alt="Logo Tetel Pontocom"
              width={40}
              height={40}
              priority
              className="rounded-md shadow-sm ring-1 ring-black/10"
            />
            <span className="font-semibold tracking-tight text-base text-black">Tetel Pontocom</span>
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

      {/* HERO HARMONIZADO */}
      <section className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Tecnologia com Humanidade,
            <br />
            para transformar ideias em impacto real.
          </h1>
          <p className="mt-4 text-lg text-black/70 max-w-xl">
            A <strong>TetelPontocom</strong> é parte do{" "}
            <a href="https://tetelonline.tetel.online" className="underline hover:opacity-80">
              Ecossistema Tetel
            </a>{" "}
            — uma rede que conecta inteligência artificial, propósito e resultado. Aqui, você encontra soluções
            práticas, humanas e prontas para crescer.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://facacaixaagora.tetel.online/?origem=tetelpontocom"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
              onClick={() => track("Lead")}
            >
              Faça Caixa Agora
            </a>
            <a
              href="https://minhaia.tetel.online/?origem=tetelpontocom"
              className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:opacity-80 transition"
            >
              Minha IA Premium
            </a>
          </div>
          <p className="text-sm text-black/60 mt-3">Produtos verificados • Pagamento seguro • Acesso imediato</p>
        </div>

        {/* Lado direito — imagem institucional */}
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/images/hero-tetelpontocom-v1.jpg"
            alt="Confiança e propósito também cabem nas suas escolhas"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Produtos Principais */}
      <section className="mx-auto max-w-6xl px-4 py-16 bg-[#FAFAFA] rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Soluções que se conectam ao seu propósito</h2>
        <p className="mt-2 text-center text-black/70">
          Cada produto é um passo dentro do Ecossistema Tetel — feito para gerar resultado com humanidade.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "Faça Caixa Agora",
              description: "O guia prático para gerar renda e acelerar resultados — ideal para começar.",
              link: "https://facacaixaagora.tetel.online/?origem=tetelpontocom",
            },
            {
              title: "Minha IA Premium",
              description:
                "Crie agentes inteligentes que trabalham por você — organize, acompanhe e venda com automação.",
              link: "https://minhaia.tetel.online/?origem=tetelpontocom",
            },
            {
              title: "Pacote Starter Tetel",
              description: "Combina o Faça Caixa Agora e a Minha IA em uma oferta especial de pós-compra.",
              link: "https://starter.tetel.online/?origem=tetelpontocom",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.link}
              onClick={() => track("Lead")}
              className="block rounded-2xl border border-black/10 bg-white p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-black/60">{item.description}</p>
              <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Acessar página →
              </button>
            </a>
          ))}
        </div>
      </section>

      {/* CURADORIA / DESTAQUES */}
      <section id="categorias" className="mt-24 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Destaques</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Shopee */}
            <a
              href="https://shopee.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-black/10 bg-[#FFF8F4] p-6 hover:shadow-md transition"
              onClick={() => track("Lead", { origem: "Shopee" })}
            >
              <h3 className="text-lg font-semibold">Shopee</h3>
              <p className="mt-2 text-sm text-black/60">
                Seleção útil, honesta e atualizada. Acesso antecipado a achados e cupons.
              </p>
            </a>

            {/* Amazon */}
            <a
              href="https://www.amazon.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-black/10 bg-[#FFF8F4] p-6 hover:shadow-md transition"
              onClick={() => track("Lead", { origem: "Amazon" })}
            >
              <h3 className="text-lg font-semibold">Amazon</h3>
              <p className="mt-2 text-sm text-black/60">Curadoria com propósito, utilidade e preço justo.</p>
            </a>

            {/* Parcerias Locais */}
            <a
              href="#parceiros"
              className="group rounded-2xl border border-black/10 bg-[#FFF8F4] p-6 hover:shadow-md transition"
              onClick={() => track("Lead", { origem: "Parcerias Locais - Entrada" })}
            >
              <h3 className="text-lg font-semibold">Parcerias Locais</h3>
              <p className="mt-2 text-sm text-black/60">Indicações que fortalecem nossa comunidade.</p>
            </a>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="mt-24 py-10">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Acesso antecipado às indicações",
              icon: <span className="h-5 w-5">Sparkles</span>, // Placeholder for icon
              text: "Fique por dentro do que realmente vale a pena.",
            },
            {
              title: "Cupons e ofertas selecionadas",
              icon: <span className="h-5 w-5">Gift</span>, // Placeholder for icon
              text: "Benefícios reais, com utilidade no dia a dia.",
            },
            {
              title: "Indicações com propósito",
              icon: <span className="h-5 w-5">HandHeart</span>, // Placeholder for icon
              text: "Cada recomendação tem um motivo e um cuidado.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-white border border-black/10 p-6">
              <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">{b.icon}</div>
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-black/60">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSSISTEMA (Integração) */}
      <section className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 bg-[#FFF6EF] rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Produtos do Ecossistema Tetel</h2>
        <p className="mt-2 text-center text-black/70">
          Soluções práticas, validadas e seguras — parte do Ecossistema Tetel.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              nome: "Faça Caixa Agora",
              preco: "R$ 9,90",
              href: "https://facacaixaagora.tetel.online/?origem=tetelpontocom",
            },
            {
              nome: "Minha IA Premium",
              preco: "R$ 27,00",
              href: "https://minhaiapremium.tetel.online/?origem=tetelpontocom",
            },
            {
              nome: "Pacote Starter Tetel",
              preco: "R$ 39,90",
              href: "https://starter.tetel.online/?origem=tetelpontocom",
            },
          ].map((p) => (
            <div
              key={p.nome}
              className="rounded-2xl border border-black/10 bg-white p-6 flex flex-col hover:shadow-md transition"
            >
              <div className="flex-1">
                <h3 className="font-semibold">{p.nome}</h3>
                <p className="mt-1 text-sm text-black/60">Produto do ecossistema · {p.preco}</p>
              </div>
              <a
                href={p.href}
                onClick={() => track("Lead", { origem: `Produtos do Ecossistema - ${p.nome}` })}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition"
              >
                Quero saber mais <span className="h-4 w-4">ArrowRight</span> {/* Placeholder for icon */}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* NEGÓCIOS PRONTOS */}
      <section id="negocios" className="mt-24 py-24 bg-[#FFF8F4] rounded-3xl">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold text-center">Negócios Prontos para Começar</h2>
          <p className="mt-3 text-center text-black/70">
            Modelos testados e prontos para você adaptar, personalizar e começar a lucrar ainda hoje — de forma simples,
            humana e com propósito.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Bolos Caseiros Lucrativos",
                image: "/images/plr-bolos-thumb.jpg",
                link: "https://boloscaseiros.tetel.online?utm_source=tetel.com",
              },
              {
                title: "Balas de Coco Gourmet",
                image: "/images/plr-balas-thumb.jpg",
                link: "https://balasdecoco.tetel.online?utm_source=tetel.com",
              },
              {
                title: "Geladinhos Gourmet",
                image: "/images/plr-geladinhos-thumb.jpg",
                link: "https://geladinhos.tetel.online?utm_source=tetel.com",
              },
              {
                title: "Iogurtes Caseiros Lucrativos",
                image: "/images/plr-iogurtes-thumb.jpg",
                link: "https://iogurtescaseiros.tetel.online?utm_source=tetel.com",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                onClick={() => track("Lead", { origem: `PLR - ${item.title}` })}
                className="block rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-md transition"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-56 object-contain bg-white rounded-t-2xl"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Quero saber mais →
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTES DE IA */}
      <section id="agentes" className="mt-24 py-16 border-b border-black/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold mb-6 tracking-tight">Agentes de IA Tetel</h2>
          <p className="text-black/60 mb-10 max-w-2xl">
            Inteligências artificiais que ajudam empresas e empreendedores a crescer com propósito.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { nome: "IA SDR", desc: "Captação e qualificação automática de leads." },
              { nome: "IA Vendas", desc: "Atendimento comercial inteligente e humanizado." },
              { nome: "IA Suporte", desc: "Acompanhamento de clientes com empatia e agilidade." },
            ].map((agente) => (
              <div
                key={agente.nome}
                className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-md transition"
              >
                <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">
                  <span className="h-5 w-5">Sparkles</span> {/* Placeholder for icon */}
                </div>
                <h3 className="font-semibold">{agente.nome}</h3>
                <p className="mt-1 text-sm text-black/60">{agente.desc}</p>
                <button
                  onClick={() => {
                    track("Lead", { origem: `Agentes de IA > ${agente.nome}` })
                    openForm(`Agentes de IA > ${agente.nome}`)
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition"
                >
                  Quero saber mais <span className="h-4 w-4">ArrowRight</span> {/* Placeholder for icon */}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESENVOLVIMENTO WEB & AUTOMAÇÕES */}
      <section className="mt-24 py-16 border-b border-black/10 bg-[#FFF9F4]">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">Desenvolvimento Web & Automações</h2>
            <p className="text-black/60 mb-4">
              Soluções personalizadas criadas pela equipe TetelPontocom — websites, landing pages, automações e
              integrações para impulsionar resultados.
            </p>
            <button
              onClick={() => {
                track("Lead", { origem: "Contato Desenvolvimento" })
                openForm("Desenvolvimento Web & Automações")
              }}
              className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-5 py-3 text-sm shadow-sm hover:opacity-90 transition"
            >
              Solicitar proposta <span className="h-4 w-4">Wrench</span> {/* Placeholder for icon */}
            </button>
          </div>
          <div className="rounded-3xl bg-white border border-black/10 p-8 text-center">
            <p className="text-black/60 italic">
              "Cada automação e site é pensado para gerar impacto real e simplificar processos."
            </p>
          </div>
        </div>
      </section>

      {/* PARCEIROS LOCAIS */}
      <section id="parceiros" className="mt-24 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold mb-6 tracking-tight">Parceiros Locais</h2>
          <p className="text-black/60 mb-10 max-w-2xl">
            Parceiros com propósito em Alagoas — confiança que tem endereço.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {["Maceió", "Rio Largo", "Santa Luzia do Norte"].map((cidade) => (
              <div key={cidade} className="rounded-2xl border border-black/10 bg-white p-6 hover:shadow-md transition">
                <div className="h-10 w-10 rounded-xl bg-[#FFE7D6] grid place-items-center mb-3">
                  <span className="h-5 w-5">Users</span> {/* Placeholder for icon */}
                </div>
                <h3 className="font-semibold">{cidade}</h3>
                <p className="mt-1 text-sm text-black/60">Empresas e profissionais parceiros nesta região.</p>
                <button
                  onClick={() => {
                    track("Lead", { origem: `Parceiros - ${cidade}` })
                    openForm(`Parceiros Locais > ${cidade}`)
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90 transition"
                >
                  Quero conhecer <span className="h-4 w-4">ArrowRight</span> {/* Placeholder for icon */}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mt-24 py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Sobre a TetelPontocom</h2>
            <p className="mt-2 text-black/60">
              Não somos loja — somos curadoria afetiva. Um lugar de confiança, utilidade e pertencimento. Aqui, cada
              indicação tem um motivo e reforça o nosso compromisso com crescimento com propósito dentro do ecossistema
              Tetel.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-black/10 p-6">
            <ul className="space-y-3 text-sm text-black/60">
              <li className="flex items-start gap-3">
                <span className="h-4 w-4 mt-0.5">ShieldCheck</span> {/* Placeholder for icon */} Transparência em cada
                recomendação.
              </li>
              <li className="flex items-start gap-3">
                <span className="h-4 w-4 mt-0.5">HandHeart</span> {/* Placeholder for icon */} Cuidado humano e
                utilidade real.
              </li>
              <li className="flex items-start gap-3">
                <span className="h-4 w-4 mt-0.5">Sparkles</span> {/* Placeholder for icon */} Descoberta guiada, sem
                pressão de compra.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTATO (WhatsApp) */}
      <section id="contato" className="mt-24 py-16 bg-[#FFF9F4] text-center">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Fale com a TetelPontocom</h2>
          <p className="text-black/60 mb-8">
            Tem dúvidas, parcerias ou quer participar do ecossistema? Entre em contato diretamente pelo WhatsApp.
          </p>
          <button
            onClick={() => {
              track("Lead", { origem: "WhatsApp - Contato" })
              openForm("Contato > Fale com a TetelPontocom")
            }}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-2xl text-base font-medium shadow-sm hover:opacity-90 transition"
          >
            <span className="h-5 w-5">MessageCircle</span> {/* Placeholder for icon */} Falar no WhatsApp
          </button>
        </div>
      </section>

      {/* WHATSAPP FLUTUANTE */}
      <button
        onClick={() => {
          track("Lead", { origem: "WhatsApp Flutuante" })
          openForm("WhatsApp Flutuante")
        }}
        className="fixed bottom-5 right-5 z-50 bg-[#25D366]/90 hover:bg-[#25D366] text-white p-3 rounded-full shadow-lg transition"
        aria-label="Falar no WhatsApp"
      >
        <span className="h-6 w-6">MessageCircle</span> {/* Placeholder for icon */}
      </button>

      {/* FOOTER */}
      <footer className="mt-24 py-10 text-center text-black/60 text-sm border-t border-black/10">
        A <strong>TetelPontocom</strong> é parte do Ecossistema Tetel — acreditamos em crescimento com propósito e
        autenticidade.
        <br />© 2025 TetelPontocom. Todos os direitos reservados.
      </footer>
    </main>
  )
}
