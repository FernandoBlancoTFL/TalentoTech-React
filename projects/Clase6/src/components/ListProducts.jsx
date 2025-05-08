import { Products } from './Products'
import { useState } from 'react'

export function ListProducts ({ handleClick }) {
  const [clickedIds, setClickedIds] = useState([])

  const handleIds = (productId) => {
    setClickedIds([...clickedIds, productId])
  }

  return (
    <Products handleClick={handleClick} handleIds={handleIds} clickedIds={clickedIds}/>
  )
}
