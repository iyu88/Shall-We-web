import { Row, Col, Container, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import { ReactComponent as Pic404 } from "../../imgs/pic_404.svg";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function NotFound() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <MyNav></MyNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <Pic404 style={{ width: "60%" }} />
                <div className="fs-1 fw-bold text-decoration-underline mb-3">
                  존재하지 않는 페이지입니다.
                </div>
                <div className="fs-2 fw-bold mb-3">
                  홈 화면으로 돌아가기 원하신다면
                </div>
                <div className="fs-2 fw-bold mb-3">아래 버튼을 눌러주세요.</div>
                <Button href="/" variant="info" className="fs-3 mb-5">
                  홈으로 돌아가기
                </Button>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default NotFound;
