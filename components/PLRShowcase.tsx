"use client"
import { useMetaPixel } from "@/hooks/use-meta-pixel"

type Item = {
  title: string
  subtitle: string
  href: string
  imageSrc: string
  productName: string
}

const ITEMS: Item[] = [
  {
    title: "Bolos Caseiros Lucrativos",
    subtitle: "Receitas e estrutura completa para revenda e crescimento real.",
    href: "https://boloscaseiros.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_bolos",
    imageSrc: "/images/plr-bolos-thumb.jpg",
    productName: "plr_bolos_caseiros",
  },
  {
    title: "Balas de Coco Gourmet",
    subtitle: "Produto artesanal de alto valor e margens reais.",
    href: "https://balasdecoco.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_balas",
    imageSrc: "/images/plr-balas-thumb.jpg",
    productName: "plr_balas_de_coco",
  },
  {
    title: "Geladinhos Gourmet",
    subtitle: "Modelos prontos de geladinhos que vendem.",
    href: "https://geladinhosgourmet.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_geladinhos",
    imageSrc: "/images/plr-geladinhos-thumb.jpg",
    productName: "plr_geladinhos",
  },
  {
    title: "Iogurtes Caseiros Lucrativos",
    subtitle: "Guia completo de produção, precificação e venda com lucro.",
    href: "https://iogurtescaseiros.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_iogurtes",
    imageSrc: "/images/plr-iogurtes-thumb.jpg",
    productName: "plr_iogurtes",
  },
]

export default function PLRShowcase() {
  const { track } = useMetaPixel()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 bg-[#FFF6EF] text-black">
      <h2 className="text-2xl md:text-3xl font-semibold">Negócios prontos para começar</h2>
      <p className="mt-2 text-black/70">
        Modelos testados e prontos para você adaptar, personalizar e começar a lucrar ainda hoje — de forma simples,
        humana e com propósito.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {ITEMS.map((item) => (
          <article key={item.productName} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="w-full aspect-square bg-white rounded-xl border border-black/5 p-2">
              <img
                src={item.imageSrc || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-black/60">{item.subtitle}</p>

            <a
              href={item.href}
              onClick={() => track("Lead", { product_name: item.productName, origin: "tetel.com" })}
              className="inline-block mt-5 px-4 py-3 rounded-full bg-black text-white text-sm font-semibold hover:opacity-90 transition"
            >
              Quero saber mais →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
