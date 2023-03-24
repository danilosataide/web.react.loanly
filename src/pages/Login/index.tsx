import React from 'react';
import logo from '../../logo.svg';
import './styles.css';


import { Form,  Button } from 'react-bootstrap';

function Login() {
  return (
    <Form className='formLogin'>
      <h2>
        Faça seu login!
      </h2>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Informe seu e-mail" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Informe sua senha" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  );
}

export default Login;
