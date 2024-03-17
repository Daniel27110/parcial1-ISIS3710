import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function CardList2() {
    const [cards, setCards] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Daniel27110/parcial1-ISIS3710/main/src/UserPracticeData/photos.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let newCards = data.map(item => ({ ...item }));
                setCards(newCards);
            });
    }, []);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Daniel27110/parcial1-ISIS3710/main/src/UserPracticeData/users.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let newUsers = data.map(item => ({ ...item }));
                setUsers(newUsers);
            });
    }, []);



    return (



        <Container className="justify-content-center align-items-center vh-100">


            <div style={{ height: '20px' }}></div>

            {users.map((user, index) => (
                <Row>

                    <Col xs={6} md={4}>
                        <Link to={`/forum`} style={{ color: 'black', textDecoration: 'none' }}>

                            <Image style={{ width: '18rem', margin: 'auto' }} src={user.photo} roundedCircle />
                        </Link>
                    </Col>

                    <Col xs={6} md={4}>

                        <h1> {user.username} </h1>

                        <Row className="">

                            <div style={{ height: '20px' }}></div>


                            <strong> {user.firstname} {user.lastname} </strong>

                            <div style={{ height: '10px' }}></div>

                            <p> {user.description}</p>
                            <a href={user.url} target="_blank" rel="noopener noreferrer"> {user.url} </a>

                            <div style={{ height: '20px' }}></div>


                            <strong> {user.posts} Posts {user.followers} followers  {user.following} following</strong>

                        </Row>
                    </Col>



                </Row>

            ))}


            <div style={{ height: '30px' }}></div>
            <Row>
                {cards.map((card, index) => (
                    <Col md={4} key={card.id} className="mb-3">
                        <Card style={{ width: '18rem', margin: 'auto' }}>
                            <Link to={`/card/${card.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                {/* <Card.Img variant="top" src={"https://easydrawingguides.com/wp-content/uploads/2022/04/how-to-draw-a-simple-house-featured-image-1200.png"} /> */}
                                <Card.Img variant="top" src={card.photo} style={{ width: '100%', height: '15vw' }} />
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

export default CardList2;