import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export function ListProducts ({ products, handleClick }) {
  const [clickedIds, setClickedIds] = useState([])

  const handleIds = (productId) => {
    setClickedIds([...clickedIds, productId])
  }

  return (
    <Row xs={1} md={3} className='g-4'>
      {products.map(product => (
        <Col key={product.id} className='h-10'>
          <Card className='h-10'>
            <Card.Img className='p-2' variant='top' src={product.images[0]} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.brand}</Card.Text>
              <Card.Text>$ {product.price}</Card.Text>
              <Button
                variant='primary'
                disabled={clickedIds.includes(product.id)}
                onClick={() => {
                  handleIds(product.id)
                  handleClick(product)
                }}
              >{clickedIds.includes(product.id) ? 'Agregado 🛒' : 'Agregar al carrito 🛒'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
