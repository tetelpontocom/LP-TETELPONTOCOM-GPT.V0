"use client"
import { useMetaPixel } from "@/hooks/use-meta-pixel"

type Props = {
  title: string
  priceLabel?: string
  href: string
  imageSrc?: string
  productName: string
  cta?: string
}

export default function ProductCard({
  title,
  priceLabel,
  href,
  imageSrc,
  productName,
  cta = "Quero saber mais",
}: Props) {
  const { track } = useMetaPixel()

  const onClick = () => {
    track("Lead", { product_name: productName, origin: "tetel.com" })
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white text-black p-5 shadow-sm">
      {imageSrc && (
        <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-36 object-cover rounded-xl mb-4" />
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      {priceLabel && <p className="mt-1 text-sm text-black/60">Produto do ecossistema · {priceLabel}</p>}
      <a
        href={href}
        onClick={onClick}
        className="inline-block mt-5 px-4 py-3 rounded-full bg-black text-white text-sm font-semibold hover:opacity-90 transition"
      >
        {cta} →
      </a>
    </div>
  )
}
