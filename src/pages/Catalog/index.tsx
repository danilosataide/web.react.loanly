import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";

import CardItem from "../../components/CardEquipment";

import "./styles.css";

function Catalog() {
    return (
        <Container fluid="md" className="">
            <Row>
                <Col>
                    <h1 className="heading">Categoria</h1>
                    <h5 className="lead">Para locação</h5>
                </Col>
            </Row>
            
            <Row xs={2} md={2} lg={4} className="justify-content-md-center g-4">
            {Array.from({ length: 7 }).map((_, idx) => (
                <Col>
                    <CardItem />
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default Catalog;