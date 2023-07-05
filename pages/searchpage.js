import Layout from '@/components/Layout'; 
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/animations.module.css'
import { useEffect, useState } from 'react';
import Head from 'next/head';

const queryClient = new QueryClient()

export default function searchpage() {
    return (
      <QueryClientProvider client={queryClient}>
        <PageData />
      </QueryClientProvider>
    )
  }

  export function PageData(){

    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(()=>{
        setSearchKeyword(localStorage.getItem('searchKeyword'));
      },[])
    

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



   const cards =  data  .filter((items)=>{
    return searchKeyword.toLowerCase() === ' ' ? items : items.title.toLowerCase().includes(searchKeyword);
   })
   .map((items)=>{
        return (
            <Link key={items.id} href={`/${items.id}`}>
            <div  className="flex flex-col md:flex-row items-center shadow-xl rounded mb-5 w-full h-full gap-5">
                    <img className="object-contain w-[200px] h-[200px]" src={items.image} height={200} width={200}/>
                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <h2 className="font-semibold line-clamp-2 w-[80%]">{items.title}</h2>
                        <div className="flex gap-3 items-center">
                            <span className="font-semibold">{items.rating.rate}</span>
                            <div className="flex gap-1">
                                <Image src ={items.rating.rate <1 ? '/images/star-empty.svg': '/images/star-filled.svg' } height={16} width={16}/>
                                <Image src ={items.rating.rate <2 ? '/images/star-empty.svg': '/images/star-filled.svg' } height={16} width={16}/>
                                <Image src ={items.rating.rate <3 ? '/images/star-empty.svg': '/images/star-filled.svg' } height={16} width={16}/>
                                <Image src ={items.rating.rate <4 ? '/images/star-empty.svg': '/images/star-filled.svg' } height={16} width={16}/>
                                <Image src ={items.rating.rate <5 ? '/images/star-empty.svg': '/images/star-filled.svg' } height={16} width={16}/>
                            </div>
                            <span className="font-semibold">{items.rating.count} <span className="font-normal text-xs">people rated!</span></span>
                        </div>
                        <div className="w-24 text-center">
                            <p className={`border-2 px-2 py-1 rounded-lg text-[#f85606]`}>${items.price}</p>
                        </div>
                    </div>
            </div>
            </Link>
        )
    })
    return (
        <Layout>
         <Head>
            <title>Search Results</title>
         </Head>
        <h1 className='text-bold text-lg my-3'>Search Results</h1>
        <div className="grid grid-cols-1 gap-5 mt-5">
             {cards}
        </div>

        </Layout>
    )
}
