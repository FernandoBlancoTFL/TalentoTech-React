import { useState } from 'react'
import { Button, Offcanvas, ListGroup, Badge } from 'react-bootstrap'

export function ShoppingCart ({ cartItems, emptyShoppingCart }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant='dark'
        onClick={handleShow}
        className='position-fixed top-0 end-0 m-3'
      >
        🛒
        {cartItems.length > 0 && (
          <Badge bg='danger' pill className='ms-2'>
            {cartItems.length}
          </Badge>
        )}
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end' backdrop>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0
            ? (
              <p>No hay productos en el carrito.</p>
              )
            : (
              <ListGroup variant='flush'>
                {cartItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <strong>{item.title}</strong> — ${item.price}
                  </ListGroup.Item>
                ))}
                <Button variant='danger' className='w-50 mx-auto mt-2' onClick={emptyShoppingCart}>Vaciar carrito</Button>
              </ListGroup>
              )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
