import React from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../hooks/useAuthContext';
import logo from '../../logo.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/hammer_logo1-removebg(with name).png"

import Login from '../../pages/Login';

import Equipment from '../../pages/Equipment';
import { IoFileTrayFull, IoDocumentTextOutline } from "react-icons/io5";

import "./styles.css";

function ContainerNavbar() {
  const { user, isLogged, logOut } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    logOut();
    navigate('/');
  }

  return (
    <Navbar className='Navbar' collapseOnSelect fixed="top" expand="lg" bg="faded" variant="dark">
      <Container>
        <Navbar.Brand><h1>LOANLY</h1></Navbar.Brand>
        {/* <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='fw-bold active' href="home">Home</Nav.Link>
            <NavDropdown className='fw-bold' title="Máquinas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Escavadeiras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Retroescavadeiras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pá Carregadeiras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rolos Compactadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tratores de esteira</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tratores de roda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Motoniveladoras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Manipuladores Telescópicos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Perfuratriz</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">
                Separated link
            </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='navl fw-bold' href="tender">
                <IoDocumentTextOutline className="m-1" size="1rem" color="#fff"/>Orçamento
            </Nav.Link>
            <Nav.Link className='navl fw-bold' href="myPage">
                <IoFileTrayFull className="m-1" size="1rem" color="#fff"/>Minhas locações
            </Nav.Link>
            { !isLogged ?
              <Nav.Link className='navl fw-bold' eventKey={3} href="/">
                Login
              </Nav.Link>
              : <Nav.Link className='navl fw-bold' eventKey={3} onClick={ logout }>
                { user?.name }
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContainerNavbar;
