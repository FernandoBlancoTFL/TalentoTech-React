export function Card (props) {
  const { title, desc, btnText } = props
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button>{btnText}</button>
    </div>
  )
}
