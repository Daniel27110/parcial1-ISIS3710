import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardDetail() {
    const { id } = useParams();
    const [cards, setCards] = useState([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Daniel27110/parcial1-ISIS3710/main/src/UserPracticeData/photos.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let newCards = data.map(item => ({ ...item }));
                setCards(newCards);

            });
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '36rem', margin: 'auto' }}>
                <Row noGutters>
                    <Col md={6}>
                        <Card.Img variant="top" src="https://picsum.photos/350" />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Title>Foto numero {id}</Card.Title>

                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default CardDetail;