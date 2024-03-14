import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForumComponent = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username + ' ' + age + ' ' + date + ' ' + gender);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="nombre completo" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="desc" className="mb-3">
                    <Form.Label>Descripción del perfil</Form.Label>
                    <Form.Control type="text" placeholder="descripcion del perfil" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="url" className="mb-3">
                    <Form.Label>URL pagina personal</Form.Label>
                    <Form.Control type="text" placeholder="URL pagina personal" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </Form.Group>


                <Link to={`/`} style={{ color: 'black', textDecoration: 'none' }}>
                    <Button variant="primary" type="submit">
                        Guardar cambios
                    </Button>
                </Link>
            </Form>
        </Container>
    );
};

export default ForumComponent;