import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form } from 'react-bootstrap';
import users from '../userData/users.json';

function LoginScreen() {
    const [step, setStep] = useState(1);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userExists, setUserExists] = useState(true);

    const handleNext = () => {
        if (step === 1 && username) {
            const user = users.find(user => user.email === username);
            if (user) {
                setStep(2);
                setUserExists(true);
            } else {
                setUserExists(false);
            }
        }
    };

    const handleLogin = () => {
        if (step === 2 && password) {
            const user = users.find(user => user.email === username && user.password === password);
            if (user) {
                console.log('User logged in');
                window.location.href = '/home';
            } else {
                alert('Password incorrect');
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="mb-4">Login</Card.Title>
                    {step === 1 && (
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            {!userExists && <p className="text-danger">User does not exist</p>}
                            <Button className="mt-3" variant="primary" onClick={handleNext}>Next</Button>
                        </Form.Group>
                    )}
                    {step === 2 && (
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button className="mt-3" variant="primary" onClick={handleLogin}>Login</Button>
                        </Form.Group>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default LoginScreen;