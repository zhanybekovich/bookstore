import CategoryCard from '@/components/CategoryCard'
import HomepageHeroBlock from '@/components/HomepageHeroBlock'
import ProductCard from '@/components/ProductCard'
import { getCategories, getHomeProducts, getStoreInfo } from '@/lib/apiServices'
import Image from 'next/image'

import { getVeryLightColor } from '@/lib/utils'

import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

export default async function HomePage() {
  const store = await getStoreInfo()
  const products = await getHomeProducts()
  const categories = await getCategories()
  const categoriesCount = categories.length
  const categoriesToShow = 4
  const leftCategoriesCount = categoriesCount - categoriesToShow

  return (
    <div>
      <HomepageHeroBlock store={store} />
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl md:text-4xl text-indigo-600 mb-4 md:mb-8">
            We Recomend
          </h2>
          <Link href="/shop" className="text-indigo-600 flex items-center gap-2">
            View All
            <FaArrowRightLong />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl md:text-4xl text-indigo-600 mb-4 md:mb-8">
            Discover Book Categories
          </h2>
          <Link href="/categories" className="text-indigo-600 flex items-center gap-2">
            View All
            <FaArrowRightLong />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8">
          {categories.slice(0, categoriesToShow).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
          <div
            className="border rounded-sm flex flex-col items-center justify-center p-4 text-indigo-600"
            style={{ backgroundColor: getVeryLightColor() }}
          >
            <Link className="flex flex-col items-center justify-center" href={'/categories'}>
              <span className="font-bold text-3xl">+</span> {leftCategoriesCount} more categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
