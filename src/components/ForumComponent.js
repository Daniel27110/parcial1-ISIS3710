import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


const ForumComponent = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Daniel27110/parcial1-ISIS3710/main/src/UserPracticeData/users.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let newUsers = data.map(item => ({ ...item }));
                setUsers(newUsers);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username + ' ' + age + ' ' + date + ' ' + gender);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            {users.map((user, index) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user.photo} /> {/* Replace with your image URL */}
                    < Card.Body >
                        <Form onSubmit={handleSubmit}>

                            <Form.Group controlId="username" className="mb-3">
                                <Form.Label> <FormattedMessage id="Username" /></Form.Label>
                                <FormattedMessage id="Username">
                                    {(msg) => (
                                        <Form.Control type="text" placeholder={msg} value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    )}
                                </FormattedMessage>
                            </Form.Group>

                            <Form.Group controlId="name" className="mb-3">
                                <Form.Label> <FormattedMessage id="Name" /></Form.Label>
                                <FormattedMessage id="Name">
                                    {(msg) => (
                                        <Form.Control type="text" placeholder={msg} value={age} onChange={(e) => setAge(e.target.value)} required />
                                    )}
                                </FormattedMessage>
                            </Form.Group>

                            <Form.Group controlId="desc" className="mb-3">
                                <Form.Label> <FormattedMessage id="Description" /></Form.Label>
                                <FormattedMessage id="Description">
                                    {(msg) => (
                                        <Form.Control type="text" placeholder={msg} value={gender} onChange={(e) => setGender(e.target.value)} required />
                                    )}
                                </FormattedMessage>
                            </Form.Group>
                            <Form.Group controlId="url" className="mb-3">
                                <Form.Label>
                                    <FormattedMessage id="Personal website" />
                                </Form.Label>
                                <FormattedMessage id="Personal website">
                                    {(msg) => (
                                        <Form.Control type="text" placeholder={msg} value={date} onChange={(e) => setDate(e.target.value)} required />
                                    )}
                                </FormattedMessage>
                            </Form.Group>


                            <Link to={`/`} style={{ color: 'black', textDecoration: 'none' }}>
                                <Button variant="primary" type="submit">
                                    <FormattedMessage id="Save changes" />
                                </Button>
                            </Link>
                        </Form>
                    </Card.Body>
                </Card>
            ))}
        </Container >
    );
};

export default ForumComponent;