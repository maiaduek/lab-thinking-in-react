import React from 'react'

function ProductRow(props) {
  return (
  props.products.map((product, i) => {
    return (
      <tr key={i}>
        <td style={{color: product.inStock? '' : 'red'}}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  })
  )
}

export default ProductRow
