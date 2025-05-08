import { ListProducts } from '../components/ListProducts'
import { ShoppingCart } from '../components/ShoppingCart'
import { useState } from 'react'

export function Main () {
  const [shoppingCart, setShoppingCart] = useState([])

  const handleClick = (product) => {
    setShoppingCart([...shoppingCart, product])
  }

  const emptyCart = () => {
    setShoppingCart([])
  }

  return (
    <main className='flex-grow-1 bg-secondary text-white'>
      <section className='d-flex justify-content-center w-50 mx-auto p-2 mt-3 mb-3'>
        <ShoppingCart cartItems={shoppingCart} emptyShoppingCart={emptyCart} />
        <ListProducts handleClick={handleClick} />
      </section>
    </main>
  )
}
