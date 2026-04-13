import { Category } from '@/payload-types'
import { getVeryLightColor } from '../lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  return (
    <div
      key={category.id}
      className="border rounded-sm px-4 py-8"
      style={{ backgroundColor: getVeryLightColor() }}
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="w-20 h-20 object-contain relative">
          {typeof category.image !== 'number' && category.image?.url && (
            <Link href={'#'}>
              <Image
                src={category.image.url}
                alt={category.name ?? 'Category image'}
                fill
                className="object-contain"
              />
            </Link>
          )}
        </div>
        <h3 className="font-semibold text-indigo-600 text-center text-xl">
          <Link href={'#'}>{category.name}</Link>
        </h3>
      </div>
    </div>
  )
}
