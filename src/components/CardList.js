import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CardList() {

    const [photos, setPhotos] = useState([{ image: 'https://picsum.photos/350' }, { image: 'https://picsum.photos/350' }, { image: 'https://picsum.photos/350' }, { image: 'https://picsum.photos/350' }, { image: 'https://picsum.photos/350' }, { image: 'https://picsum.photos/350' }, { image: 'https://picsum.photos/350' }, { image: 'https://picsum.photos/350' }])


    const [cards, setCards] = useState([
        { id: 1, username: 'House 1', firstname: 'This is house 1', lastname: 'This is house 1', desc: 'asdads', image: 'https://via.placeholder.com/150' },
    ]);


    return (





        <Container className="justify-content-center align-items-center vh-100">
            <div style={{ height: '20px' }}></div>

            <Row>




            </Row>

            <div style={{ height: '20px' }}></div>



            <Row>
                {photos.map((card, index) => (
                    <Col md={4} key={card.id} className="mb-3">
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                            <Link to={`/card/${card.image}`}>

                                <Card.Img variant="top" src={'https://picsum.photos/350'} />
                            </Link>

                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardList;