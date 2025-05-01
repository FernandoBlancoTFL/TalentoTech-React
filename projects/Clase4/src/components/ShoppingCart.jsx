import { useState } from 'react'
import { Button, Offcanvas, ListGroup, Badge } from 'react-bootstrap'

export function ShoppingCart ({ cartItems, emptyShoppingCart }) {
  const [show, setShow] = useState(false)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant='success'
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
                  <ListGroup.Item key={index} className='d-flex align-items-center'>
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                    />
                    <div>
                      <strong>{item.title}</strong> — ${item.price}
                    </div>
                  </ListGroup.Item>
                )
                )}
                <h5 className='mx-auto mt-3'>Total: $ {totalPrice}</h5>
                <Button variant='danger' className='w-50 mx-auto mt-2' onClick={emptyShoppingCart}>Vaciar carrito</Button>
              </ListGroup>
              )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
