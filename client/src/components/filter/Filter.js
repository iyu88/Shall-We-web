import "./Filter.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Filter({ filter }) {
  return (
    <>
      <Navbar variant="light" className="my-bg-light">
        <Container>
          <Nav className="me-auto" id="filter_nav">
            {filter?.map((el, i) => {
              return (
                <Link to={`${el.link}`} key={`${i}`}>{`${el.title}`}</Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Filter;
