import React from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const ProductsPage = () => {
  const [products, setProducts] = React.useState(jsonData)
  const [searchProduct, setSearchProduct] = React.useState(products)

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar products={products} setProducts={setProducts} setSearchProduct={setSearchProduct}/>
      <ProductTable products={searchProduct} />
    </div>
  )
}

export default ProductsPage