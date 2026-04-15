'use client'

import { Product } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/useCartStore'
import { toast } from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

type Props = {
  product: Product
}

type Author = {
  id: number
  fullName: string
}
export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem)

  const handleAddToCart = () => {
    console.log('adding')
    addItem({
      id: String(product.id),
      title: product.name,
      price: product.salePrice || product.price,
    })

    toast.success('Added to cart')
  }
  return (
    <div
      key={product.id}
      className="w-full border p-4 rounded-lg min-h-[340px] flex flex-col justify-between"
    >
      <div className="relative w-full h-40 mb-4">
        {typeof product.mainPhoto !== 'number' && product.mainPhoto?.url && (
          <Link href={'#'}>
            <Image src={product.mainPhoto.url} alt={product.name} fill className="object-contain" />
          </Link>
        )}
      </div>
      <div>
        <h3 className="font-semibold mb-2 line-clamp-2">
          <Link href={'#'}>{product.name}</Link>
        </h3>
        <div className="mb-3">
          {product.authors?.map((author) => {
            if (typeof author === 'number') return null

            return (
              <span key={author.id} className="text-gray-400 text-sm">
                {author.fullName}
              </span>
            )
          })}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          {product.salePrice ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">
                ${formatPrice(product.price)}
              </span>
              <span className="font-semibold text-red-600 text-lg">
                ${formatPrice(product.salePrice)}
              </span>
            </div>
          ) : (
            <span className="font-semibold text-indigo-700 text-lg">
              ${formatPrice(product.price)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-white text-sm cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  )
}
