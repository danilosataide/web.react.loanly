import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';

import "./styles.css";
 

function ModalSelectionEquipment() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button className='AddEquipment' variant="primary" size="sm" onClick={handleShow}>
                <MdAdd size="1em" color="#000"/> 
                {' '}Escolher equipamento
            </Button> */}
            
            <small><Alert.Link onClick={handleShow} className='alertModal' href="#">Escolher equipamento</Alert.Link></small>

            <Modal
                show={show}
                size="lg"
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Equipamentos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form className='formModalEquip'>
                            <Form.Group className="mb-2" controlId="formModalSelectionEquip">
                                <Form.Label>Escolha um equipamento que deseja adicionar ao orçamento</Form.Label>
                                <Form.Select autoFocus>
                                    <option disabled value={0} selected>Selecione uma opção</option>
                                    <option value={0}>Escavadeiras</option>
                                    <option value={0}>Retroescavadeiras</option>
                                    <option value={0}>Pá Carregadeiras</option>
                                    <option value={0}>Rolos Compactadores</option>
                                    <option value={0}>Tratores de esteira</option>
                                    <option value={0}>Tratores de roda</option>
                                    <option value={0}>Motoniveladoras</option>
                                    <option value={0}>Manipuladores Telescópicos</option>
                                    <option value={0}>Perfuratriz</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formModalSelectionModel">
                                <Form.Label>Escolha o modelo</Form.Label>
                                <Form.Select>
                                    <option disabled value={0} selected>Selecione uma opção</option>
                                    <option value={0}>Escavadeiras</option>
                                    <option value={0}>Retroescavadeiras</option>
                                    <option value={0}>Pá Carregadeiras</option>
                                    <option value={0}>Rolos Compactadores</option>
                                    <option value={0}>Tratores de esteira</option>
                                    <option value={0}>Tratores de roda</option>
                                    <option value={0}>Motoniveladoras</option>
                                    <option value={0}>Manipuladores Telescópicos</option>
                                    <option value={0}>Perfuratriz</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary">Selecionar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
  }
  
  export default ModalSelectionEquipment;