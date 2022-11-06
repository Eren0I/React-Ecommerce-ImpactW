import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {useState} from "react"

function Navnew() {

    const [showCart, setShowCart] = useState(false)

    function toggle(){
        setShowCart(prevShowCart=> !prevShowCart)
    }
    const popover = (
        <Popover id="popover-basic">
          <Popover.Body>
            Your <strong>Cart</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
      );
      
      const Example = () => (
        <OverlayTrigger trigger="click" placement="down" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
      );
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbr" href="#home">ImpactW</Navbar.Brand>
        <Button onClick={toggle} className='shopCart' variant="success">
      Cart <Badge bg="success">9</Badge>
    </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#sponsor">Sponsor</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navnew;