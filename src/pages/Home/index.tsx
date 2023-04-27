import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Button } from 'react-bootstrap';
import Imagem from '../../assets/slide_construcao_1b.jpg'
import ContainerNavbar from '../../components/ContainerNavbar';

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  
    return (
      <>
        <ContainerNavbar/>
        <Container>
          <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Selecione sua linha de produtos</h1>
              <p className="col-md-8 fs-4">texto de apresentação.</p>
              <Button href="catalog" className="btn btn-primary btn-lg" type="button">Escolha o equipamento</Button>
            </div>
          </div>
          {/* <div className="d-flex flex-column flex-md-row align-items-left pb-3 mb-4 border-bottom">
           <a href="/" className="d-flex align-items-left link-body-emphasis text-decoration-none">
           <span className="fs-4"><h1 className='h1-tender'>Categoria</h1><strong>Para locação</strong></span>
           </a>
           </div> */}

        </Container>
      </>
    );
  }
  
  export default Home;
