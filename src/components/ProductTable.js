import React from 'react'
import ProductRow from './ProductRow'

function  ProductTable(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <ProductRow products={props.products}/>
        </tbody>
      </table>  
    </div>
  )
}

export default ProductTable
