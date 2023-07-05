import Layout from '@/components/Layout'; 
import ProductsDisplay from './components/ProductsDisplay';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import Head from 'next/head';

export default function Home() {

  const [searchVal, setSearchVal] = useState("");
  function handleSearchChange(event){
      setSearchVal(event.target.value);
  }
  
  useEffect(()=>{
    localStorage.setItem('searchKeyword',searchVal)
  },[searchVal])

  return (
    <Layout>
      <Head>
        <title>OnlineStore</title>
      </Head>
          <form className="w-full flex flex-wrap gap-3 mt-3" action={'/searchpage'}>
                <input type="text"  value={searchVal} placeholder="Search Products..." onChange={handleSearchChange} className={` border-black border-[1px] px-3 rounded md:w-[80%]`}/>
                <button className="rounded border-2 border-black hover:bg-[#f85606] hover:text-white transition-all duration-300 px-4 py-1">Search</button>
        </form>
      <h1 className='text-bold text-lg my-3'>Popular products</h1>
      <ProductsDisplay/>
    </Layout>
  )
}