import { OrderedList } from './components/OrderedList'
import { Card } from './components/Card'
import { Button } from './components/Button'
import './css/App.css'

export function App () {
  const products = ['apples', 'pear', 'oranges', 'bananas']

  return (
    <div id='card-cont'>
      <div id='card-cont-list'>
        <h3>Ejercicio 1</h3>
        <OrderedList products={products} />
      </div>
      <div id='card-cont-customCard'>
        <h3>Ejercicio 2</h3>
        <Card title='Oferta especial ' desc='20% de descuento en todos los productos' btnText='Ver más' />
      </div>
      <div id='card-cont-btn'>
        <h3>Ejercicio 3</h3>
        <div id='card-cont-btn-btns'>
          <Button btnText='Enviar alerta 🔔' btnBackgroundColor='blue' btnColor='white' btnAction='alert' />
          <Button btnText='Modo Oscuro 🌛' btnBackgroundColor='black' btnColor='white' btnAction='darkTheme' />
          <Button btnText='Modo Claro 🌞' btnBackgroundColor='lightblue' btnColor='black' btnAction='lightTheme' />
        </div>
      </div>
    </div>
  )
}
