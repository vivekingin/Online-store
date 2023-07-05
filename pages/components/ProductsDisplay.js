import Link from "next/link"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Image from "next/image"
import styles from '@/styles/animations.module.css'

const queryClient = new QueryClient()

export default function Products() {
    return (
      <QueryClientProvider client={queryClient}>
        <FetchData />
      </QueryClientProvider>
    )
  }

export function FetchData({products}){
    const { isLoading, error, data } = useQuery('fakestoreData', () =>
    fetch('https://fakestoreapi.com/products').then(res =>
      res.json()
    )
    )
  if (isLoading) return (
<div className="absolute top-0 left-0 h-screen w-screen bg-[#f85606]">\
    <Image className={`${styles.bounce} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`} src='/images/logo-icon.svg' height={144} width={144}/>
</div>
  )

  if (error) return 'An error has occurred: ' + error.message

   const cards =  data.map((items)=>{
        return (
            <Link key={items.id} href={`/${items.id}`}>
            <div  className="grid place-items-center shadow-xl rounded bg-white mb-5 w-full h-full">
                    <img className="object-contain w-[200px] h-[200px]" src={items.image} height={200} width={200}/>
                    <h2 className="font-semibold text-center line-clamp-2 w-[80%]">{items.title}</h2>
                    <div className="flex justify-center gap-5 w-4/5 py-2">
                        <p className={`border-2 px-2 py-1 rounded-lg text-[#f85606]`}>${items.price}</p>
                    </div>
            </div>
            </Link>
        )
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
             {cards}
        </div>
    )
}