import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export function NavBar () {
  return (
    <Navbar expand='lg' className='bg-dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={'/about'}>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to={'/contact'}>Contacto</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
