import "./SubNav.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function SubNav({ subMenu }) {
  return (
    <>
      <Navbar variant="light" className="my-bg-secondary">
        <Container>
          <Nav className="m-auto" id="sub_nav">
            {subMenu?.map((el, i) => {
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

export default SubNav;
