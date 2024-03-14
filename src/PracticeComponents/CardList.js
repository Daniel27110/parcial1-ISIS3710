import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CardList() {
    const [cards, setCards] = useState([
        { id: 1, title: 'House 1', description: 'This is house 1', image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'House 2', description: 'This is house 2', image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'House 3', description: 'This is house 3', image: 'https://via.placeholder.com/150' },
        { id: 4, title: 'House 4', description: 'This is house 4', image: 'https://via.placeholder.com/150' },
        { id: 5, title: 'House 5', description: 'This is house 5', image: 'https://via.placeholder.com/150' },
    ]);

    const handleLikeMultiple = (id) => {
        const newCards = cards.map(card => {
            if (card.id === id) {
                card.liked = !card.liked;
                card.likeCount = card.likeCount ? card.likeCount + 1 : 1;
            }
            return card;
        });
        setCards(newCards);
    }

    return (
        <Container className="justify-content-center align-items-center vh-100">
            <div style={{ height: '20px' }}></div>
            <Row>
                {cards.map((card, index) => (
                    <Col md={4} key={card.id} className="mb-3">
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                            <Link to={`/card/${card.id}`}>

                                <Card.Img variant="top" src={card.image} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text style={{ color: 'black', textDecoration: 'none' }}>{card.description}</Card.Text>
                                </Card.Body>
                            </Link>

                            <Card.Footer>
                                <Button variant="primary" onClick={() => handleLikeMultiple(card.id)}>
                                    {card.liked ? 'Like ' : 'Like '}
                                    <span className="ml-2">{card.likeCount && card.likeCount}</span>
                                </Button>
                            </Card.Footer>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardList;