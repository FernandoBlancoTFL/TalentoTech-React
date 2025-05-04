import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react"

const PRODUCTS_URL = 'https://dummyjson.com/products/category/smartphones'

function ListOfProducts({ products, handleClick, handleIds, clickedIds }){
    return (
        <Row xs={1} md={3} className='g-4'>
            {
            products.slice(0, 9).map(product => (
                <Col key={product.id} className='h-10'>
                <Card className='h-10'>
                    <Card.Img className='p-2' variant='top' src={product.images[0]} style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Body className='bg-dark text-white rounded-bottom'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.brand}</Card.Text>
                    <Card.Text className='text-success'>$ {product.price}</Card.Text>
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
            ))
            }
        </Row>
    )
}

function NoProductsResult(){
    const [message, setMessage] = useState('Cargando productos...')
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setMessage('Error al cargar productos, inténtalo más tarde')
      }, 3000)
  
      return () => clearTimeout(timer)
    }, [])
  
    return <h3>{message}</h3>
}

export function Products({ handleClick, handleIds, clickedIds}){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(PRODUCTS_URL)
          .then(res => res.json())
          .then(response => {
            setProducts(response.products)
            setLoading(false)
          })
          .catch(error => 
            console.error('Error al obtener los productos:', error)
          )
      }, [])

    return (
        loading
            ? <NoProductsResult />
            : <ListOfProducts products={products} handleClick={handleClick} handleIds={handleIds} clickedIds={clickedIds}/>
    )

}