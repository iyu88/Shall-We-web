import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import Filter from "../../components/filter/Filter";

function Reviews() {
  const reviews_subMenu = [
    {
      title: "후기 게시판",
      link: "/reviews",
    },
    {
      title: "후기 작성",
      link: "/reviews/register",
    },
  ];

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={reviews_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Filter></Filter>
              <ListGroup as="ul">
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex">
                    <h5 className="my-auto">
                      <Badge
                        variant="primary"
                        bg="secondary"
                        style={{ width: "5em" }}
                      >
                        공모전
                      </Badge>
                    </h5>
                    <div className="ms-3 my-auto">
                      <div className="fw-bold">
                        리뷰 제목이 이렇게 길어지면 어떻게 되는지 볼까요
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "8em", marginRight: "2em" }}>
                      작성자 닉네임
                    </div>
                    <Badge
                      variant="primary"
                      pill
                      className="my-auto"
                      style={{ width: "5em" }}
                    >
                      14
                    </Badge>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex">
                    <h5 className="my-auto">
                      <Badge
                        variant="primary"
                        bg="secondary"
                        style={{ width: "5em" }}
                      >
                        공모전
                      </Badge>
                    </h5>
                    <div className="ms-3 my-auto">
                      <div className="fw-bold">
                        리뷰 제목이 이렇게 길어지면 어떻게 되는지 볼까요
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "8em", marginRight: "2em" }}>
                      작성자 닉네임
                    </div>
                    <Badge
                      variant="primary"
                      pill
                      className="my-auto"
                      style={{ width: "5em" }}
                    >
                      1498
                    </Badge>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex">
                    <h5 className="my-auto">
                      <Badge
                        variant="primary"
                        bg="info"
                        style={{ width: "5em" }}
                      >
                        팀원
                      </Badge>
                    </h5>
                    <div className="ms-3 my-auto">
                      <div className="fw-bold">
                        리뷰 제목이 이렇게 길어지면 어떻게 되는지 볼까요
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: "8em", marginRight: "2em" }}>
                      작성자 닉네임
                    </div>
                    <Badge
                      variant="primary"
                      pill
                      className="my-auto"
                      style={{ width: "5em" }}
                    >
                      149
                    </Badge>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Reviews;
