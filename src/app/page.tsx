import { Product } from '@/components/Product'
import { products_data } from '@/utils/mocks'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col gap-8'>
        <h1 className='text-3xl'>E-Commerce Cart System</h1>
        <div className='grid grid-cols-3 gap-4 '>
          {
            products_data.map((data) => {
              return (
                  <Product key={data.id} product={data}/>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
