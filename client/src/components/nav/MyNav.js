import "./MyNav.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNav() {
  return (
    <>
      <Navbar variant="light" className="my-bg-primary">
        <Container>
          <Nav className="me-auto" id="my_nav">
            <Link to="/">Shall WE</Link>
            <Link to="/contests">공모전</Link>
            <Link to="/teammates">팀원 찾기</Link>
            <Link to="/reviews">후기 게시판</Link>
            <Link to="/personals">계정 관리</Link>
            <Link to="/signIn">로그인</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
