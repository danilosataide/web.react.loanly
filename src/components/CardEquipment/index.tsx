import { Card, Button } from "react-bootstrap";
import CarouselImages from "../CarouselImages";
import { FaWeightHanging } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";

import "./styles.css";
 

function CardEquipment() {
    return (
      <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src={Logo} /> */}
          <CarouselImages />
          <Card.Body className="text-center">
              <Card.Title className="text-center">JCB 116D</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">description</Card.Subtitle>
              <Card.Text>
              <FaWeightHanging size="1.5em" color="#00C89B"/> 3.450 Kg  
              <ImPower size="1.5em" color="#00C89B"/> 115 Hp
              </Card.Text>
              <Button href="equipment" variant="faded" size="sm" className="buttonViewEquip">
                Ver equipamento
                <BsArrowRight size="1em" color="#000"/> 
              </Button>
              <div className="d-grid gap-2">
                <Button href="tender" variant="faded" size="lg" className="buttonAddBudget">
                  Fechar orçamento
                </Button>
              </div>
          </Card.Body>
      </Card>
    );
  }
  
  export default CardEquipment;