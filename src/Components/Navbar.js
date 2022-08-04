import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./Frame.png";
import "./Navbar.css";
function NavScrollExample() {
  return (
    <>
      <div className="main">
        <Navbar className="bg" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="Text" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <div className="heading">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>
                  <NavDropdown title="Services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">
                      Graphic Designing
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      UI/UX Designing
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      HTML/CSS
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav>
              <span className="searchbar">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                  <Button variant="outline-success">Search</Button>
                </Form>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavScrollExample;
