export function OrderedList (prop) {
  const { products } = prop
  return (
    <ol>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ol>
  )
}
