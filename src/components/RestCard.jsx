import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:'none'}}>
    <Card style={{ width: '100%' }}>
      <Card.Img height={'350px'} variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title className='text-warning text-center p-2'>{restaurant.name}</Card.Title>
        <hr />
        <Row>
            <Col className='ms-3 p-3'>
            <Card.Text>
                <p style={{fontSize:'20px'}}>{restaurant.neighborhood}</p>
                </Card.Text>
                </Col>

                <Col  className='p-3'>
                <Card.Text>
                    <p style={{fontSize:'20px'}}>Cuisine:  {restaurant.cuisine_type}</p>
                </Card.Text>
                </Col>

        </Row>  
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestCard
