import React from "react";
import { Card, Container, Row, Col, Stack, Button } from "react-bootstrap";

import CardItem from "../CardItem";

function Dashboard() {
    return (
        <Container fluid="md" className="Dashboard">
            
            <Row xs={1} md={4} className="justify-content-md-center g-4">
            {Array.from({ length: 7 }).map((_, idx) => (
                <Col>
                    <CardItem />
                </Col>
            ))}
            </Row>
            {/* <Stack gap={4}>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} />
                        <Card.Body className="text-center">
                            <Card.Title className="text-center" >Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Stack> */}
        </Container>
    )
}

export default Dashboard;