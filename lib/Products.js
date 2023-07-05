export async function allProducts(){
  const products = await fetch('https://fakestoreapi.com/products');
  return products.json();
}

export async function productPaths(){
  const data = await allProducts();
  
  return data.map((items)=>{
    const id = items.id.toString();
      return {
          params: {
              id: id,
          }
      }
  })
}

export async function productDetails(id){
  const products = await fetch(`https://fakestoreapi.com/products/${id}`);
  return products.json();


}