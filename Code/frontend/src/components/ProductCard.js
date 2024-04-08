import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = (props) => {
    return (
        <Card style={{ width: '18rem', margin: 0 }}>
            <Card.Img variant="top" src={window.location.origin + props.image} />
            <Card.Body className="d-flex flex-row justify-content-between">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ 'line-height': '1', 'text-align': 'right', 'padding-left': '20px' }}>
                    <p style={{ color: 'red', 'font-weight': '700', margin: 0 }}>${props.price}</p>
                    <small style={{ color: 'rgba(0, 0, 0, 0.5)', 'font-size': '0.8em', 'white-space': 'nowrap' }}>was ${props.priceBefore}</small>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;