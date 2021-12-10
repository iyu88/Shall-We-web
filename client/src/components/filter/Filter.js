// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Filter() {
  return (
    <>
      <Navbar variant="light" className="my-bg-light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href={`/`} key={`1`}>{`Filter 자리`}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Filter;
