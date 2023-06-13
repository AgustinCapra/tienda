import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"


const menu = [
    {text: "Home", link: "/#home"},
    {text: "Productos", link: "/#productos"},
    {text: "Contacto", link: "/#contacto"},
]

export const NavBar = () => (
    <header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Gaming Vintage</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
            
        </Navbar>
    </header>
)