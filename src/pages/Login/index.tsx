import React, { ReactElement, useState } from 'react';
import { Form,  Button } from 'react-bootstrap';
import { useAuthContext } from '../../hooks/useAuthContext';
import './styles.css';

export default function Login(): ReactElement {

  const { signIn } = useAuthContext();
  const [form, setForm] = useState<{ email: string, password: string }>({
    email: '',
    password: '',
  });

  return (
    <Form className='formLogin'>
      <h2>
        Faça seu Login!
      </h2>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          onChange={ event => setForm({ ...form, email: event?.target?.value }) }
          type="email"
          placeholder="Informe seu e-mail" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          onChange={ event => setForm({ ...form, password: event?.target?.value }) }
          autoFocus
          type="password"
          placeholder="Informe sua senha" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mostrar senha" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button onClick={ async () => await signIn(form.email, form.password) } variant="primary">
          Login
        </Button>
      </div>
    </Form>
  );
}
