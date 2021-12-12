import "./SubNav.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect } from "react";

function SubNav({ subMenu }) {
  // useEffect(() => {
  //   console.log(subMenu);
  // }, [subMenu]);
  return (
    <>
      <Navbar variant="light" className="my-bg-secondary">
        <Container>
          <Nav className="me-auto" id="sub_nav">
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
