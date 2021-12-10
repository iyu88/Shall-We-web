import { Row, Col, Container, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <MyNav></MyNav>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Col>
                <div>이러쿵~ 공모전에 Shall WE</div>
              </Col>
              <Col>
                <div>dddd</div>
              </Col>
            </Row>
            <Row>
              <div>
                저러쿵 공모전 바로 가볼까용
                <Button href="/contests" variant="info">
                  공모전 정보 보러가기
                </Button>
              </div>
            </Row>
            <Row>
              <div>
                아이쿵~ 팀원을 찾고 싶으신가용 바로가기
                <Button href="teammates" variant="info">
                  팀원 찾으러 가기
                </Button>
              </div>
            </Row>
            <Row>
              <div>
                어이쿵~ 후기에서 유용한 정보도 찾아보세용
                <Button href="reviews" variant="info">
                  후기 게시판 바로가기
                </Button>
              </div>
            </Row>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Home;
