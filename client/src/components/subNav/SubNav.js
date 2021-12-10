// import { Link } from "react-router-dom";
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
          <Nav className="me-auto">
            {subMenu?.map((el, i) => {
              return (
                <Nav.Link
                  href={`${el.link}`}
                  key={`${i}`}
                >{`${el.title}`}</Nav.Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default SubNav;
