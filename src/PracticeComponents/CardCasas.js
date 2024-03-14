import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CardList2() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json')
            .then(response => response.json())
            .then(data => {
                let newCards = data.map(item => ({ ...item, liked: false, likeCount: 0 }));
                newCards = setImages(newCards);
                setCards(newCards);
            });
    }, []);


    function setImages(cards) {
        // if a card has the word "Casa" in its name, it will have a house image, otherwise it will have a placeholder image

        const casaImage = "https://easydrawingguides.com/wp-content/uploads/2022/04/how-to-draw-a-simple-house-featured-image-1200.png";
        const placeholderImage = "https://img.freepik.com/premium-vector/cityscape-vector-icon-illustration-beautiful-town-buildings-landmarks-icon-concept_138676-429.jpg";

        const newCards = cards.map(card => {
            if (card.name.includes("Casa")) {
                card.image = casaImage;
            } else {
                card.image = placeholderImage;
            }
            return card;
        }
        );

        return newCards;
    }


    return (
        <Container className="justify-content-center align-items-center vh-100">
            <div style={{ height: '20px' }}></div>
            <Row>
                {cards.map((card, index) => (
                    <Col md={4} key={card.id} className="mb-3">
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                            <Link to={`/card/${card.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                {/* <Card.Img variant="top" src={"https://easydrawingguides.com/wp-content/uploads/2022/04/how-to-draw-a-simple-house-featured-image-1200.png"} /> */}
                                <Card.Img variant="top" src={card.image} style={{ width: '100%', height: '15vw' }} />
                                < Card.Body >
                                    <Card.Title style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>{card.name}</Card.Title>
                                    <Card.Text style={{ color: 'black', textDecoration: 'none' }}>{card.address}</Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

export default CardList2;