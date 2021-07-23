import { Nav, Navbar, Container} from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg="warning" expand="lg" >
      <Container>
        <LinkContainer to="/" exact><Navbar.Brand >Weather API</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/" exact><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/records" ><Nav.Link >Records</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
