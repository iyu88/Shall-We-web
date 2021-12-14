import "./MyNav.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function MyNav() {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    let isLogout = window.confirm("로그아웃하시겠습니까?");
    if (isLogout) {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    }
  };

  return (
    <>
      <Navbar variant="light" className="my-bg-primary">
        <Container>
          <Nav className="me-auto" id="my_nav">
            <Link to="/">Shall WE</Link>
            <Link to="/contests">공모전</Link>
            <Link to="/teammates">팀원 찾기</Link>
            <Link to="/reviews">후기 게시판</Link>
            {!user ? (
              <Link to="/signIn">로그인</Link>
            ) : (
              <>
                <Link to={`/personals/${user._id}`}>계정 관리</Link>
                <div className="logout_btn" onClick={handleLogout}>
                  로그아웃
                </div>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
