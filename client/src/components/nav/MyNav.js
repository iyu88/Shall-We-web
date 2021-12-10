// import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNav() {
  return (
    <>
      <Navbar variant="light" className="my-bg-primary">
        <Container>
          <Navbar.Brand href="/">Shall WE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contests">공모전</Nav.Link>
            <Nav.Link href="/teammates">팀원 찾기</Nav.Link>
            <Nav.Link href="/reviews">후기 게시판</Nav.Link>
            <Nav.Link href="/personals">계정 관리</Nav.Link>
            <Nav.Link href="/signIn">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
