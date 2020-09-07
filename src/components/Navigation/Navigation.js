import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar  bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">Protom Alo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/Bangladesh">Bangladesh</Nav.Link>
                    <Nav.Link href="/International">International</Nav.Link>
                    <Nav.Link href="/Sports">Sports</Nav.Link>
                    <Nav.Link href="/Opinion">Opinion</Nav.Link>
                    <Nav.Link href="/Business">Business</Nav.Link>
                    <Nav.Link href="/Youth">Youth</Nav.Link>
                    <Nav.Link href="/Entertainment">Entertainment</Nav.Link>
                    <Nav.Link href="/Lifestyle">Lifestyle</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button  bg="light" variant="dark">Search</Button>
                    </Form>
                </Navbar.Collapse>







                </Navbar>
        </div>
    );
};

export default Navigation;