import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardDetail() {
    const { id } = useParams();
    const [cards, setCards] = useState([
        { id: 1, title: 'House 1', description: 'This is the detail of house 1', image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'House 2', description: 'This is the detail of house 2', image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'House 3', description: 'This is the detail of house 3', image: 'https://via.placeholder.com/150' },
        { id: 4, title: 'House 4', description: 'This is the detail of house 4', image: 'https://via.placeholder.com/150' },
        { id: 5, title: 'House 5', description: 'This is the detail of house 5', image: 'https://via.placeholder.com/150' },]);
    const [card, setCard] = useState(null);

    useEffect(() => {
        const selectedCard = cards.find(card => parseInt(card.id) === parseInt(id));
        setCard(selectedCard);
    }, [id, cards]);

    if (!card) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '36rem', margin: 'auto' }}>
                <Row noGutters>
                    <Col md={6}>
                        <Card.Img variant="top" src={card.image} />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.description}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default CardDetail;