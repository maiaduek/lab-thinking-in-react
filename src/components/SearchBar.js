import React from 'react'

function SearchBar(props) {
  const [searchFood, setSearchFood] = React.useState('')
  const [checked, setChecked] = React.useState(false)
  
  React.useEffect(()=> {
    let newArr = props.products.filter(product => {
      return product.name.toLowerCase().includes(searchFood.toLowerCase())
    })

    if (checked) {
      newArr = newArr.filter(product => {
        return product.inStock
      })
    }
    props.setSearchProduct(newArr)
  }, [searchFood, checked])

  return (
    <div>
      <h3>Search:</h3>
      <input value={searchFood} onChange={e => setSearchFood(e.target.value)} style={{width: '300px'}}/>
      <br></br>
      <input type="checkbox" name="checked" onChange={() => setChecked(!checked)}/>
      <label htmlFor="checked">Only show products in stock</label>
    </div>
  )
}

export default SearchBar
