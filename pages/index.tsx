import Layout from '@/components/Layout'; 
import Search from './components/Search';
import ProductsDisplay from './components/ProductsDisplay';

export default function Home() {
  return (
    <Layout>
      <h1 className='text-bold text-lg my-3'>Popular products</h1>
      <ProductsDisplay/>
    </Layout>
  )
}