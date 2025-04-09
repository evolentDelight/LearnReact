import { useState } from 'react'
import './App.css'

let nextId = 3;

const initialProducts = [
  {
    id: 0,
    title: "Product0",
    price: "$12.99"
  },
  {
    id: 1,
    title: "Product1",
    price: "$35.99"
  },
  {
    id: 2,
    title: "Product2",
    price: "$50.00"
  }
]
function App() {
  const [products, setProducts] = useState(initialProducts)

  const handleAddProduct = () =>{
    setProducts(
      [
        ...products,
        {
          id: nextId,
          title: "Another New Product",
          price: "$200.00"
        }
      ]
    )
    nextId++;
  }

  return (
    <div className="list-container">
      <button onClick={handleAddProduct}>Add Product</button>
      {products.map(item =>
        <p id={item.id}>{item.title} ({item.price})</p>
      )}
    </div>
  )
}

export default App
