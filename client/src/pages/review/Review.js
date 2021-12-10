import { Container, Row, Col, Badge, Image } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";

function Review() {
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
              <Col>
                <div className="my-bg-primary p-4">
                  <Row className="my-bg-secondary p-3">
                    <div className="d-flex justify-content-between">
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
                      <Badge
                        variant="primary"
                        pill
                        className="my-auto"
                        style={{ width: "5em" }}
                      >
                        1498
                      </Badge>
                    </div>
                  </Row>
                  <Row className="my-bg-light px-4 py-2">
                    <div className="d-flex justify-content-between">
                      <div>작성자 아이디</div>
                      <div>작성시간</div>
                    </div>
                  </Row>
                  <Row className="my-bg-secondary p-3">
                    <h1 className="my-auto">
                      <Badge
                        bg="secondary"
                        className="d-inline-flex align-items-center"
                      >
                        <Image
                          alt="이미지"
                          style={{
                            width: "6rem",
                            height: "6rem",
                            objectFit: "cover",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsw_w-gtGKZC1K88cRRJ_vreVGB6EZsl79lCJEkjVUD4gHWBv77uySCZYJ5wZimTmYFCI&usqp=CAU"
                          roundedCircle
                        />
                        <div>아이디 혹은 공모전 이름</div>
                      </Badge>
                    </h1>
                  </Row>
                  <Row className="my-bg-secondary p-3">
                    <div>활동 내용</div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Row>
                  <Row className="my-bg-secondary p-3">
                    <div>소감</div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Review;
