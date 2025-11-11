"use client"
import ProductCard from "@/components/ProductCard"
import { useMetaPixel } from "@/components/useMetaPixel"

export default function PLRSection() {
  const { track } = useMetaPixel()

  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">PLRs que geram resultado</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <ProductCard
            title="Bolos Caseiros Lucrativos"
            href="https://boloscaseiros.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_bolos"
            imageSrc="/images/plr-bolos-thumb.jpg"
            productName="plr_bolos_caseiros"
            cta="Quero saber mais"
            onClick={() => {
              track("Lead", { label: "PLR Bolos Caseiros" })
            }}
          />

          <ProductCard
            title="Balas de Coco Gourmet"
            href="https://balasdecoco.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_balas"
            imageSrc="/images/plr-balas-thumb.jpg"
            productName="plr_balas_de_coco"
            cta="Quero saber mais"
            onClick={() => {
              track("Lead", { label: "PLR Balas de Coco" })
            }}
          />

          <ProductCard
            title="Geladinhos Gourmet"
            href="https://geladinhosgourmet.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_geladinhos"
            imageSrc="/images/plr-geladinhos-thumb.jpg"
            productName="plr_geladinhos"
            cta="Quero saber mais"
            onClick={() => {
              track("Lead", { label: "PLR Geladinhos" })
            }}
          />

          <ProductCard
            title="Iogurtes Caseiros Lucrativos"
            href="https://iogurtescaseiros.tetel.online?utm_source=tetel.com&utm_medium=hub&utm_campaign=plr_iogurtes"
            imageSrc="/images/plr-iogurtes-thumb.jpg"
            productName="plr_iogurtes"
            cta="Quero saber mais"
            onClick={() => {
              track("Lead", { label: "PLR Iogurtes" })
            }}
          />
        </div>
      </div>
    </section>
  )
}
