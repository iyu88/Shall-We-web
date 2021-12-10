import { Row, Col, Container, Image, Form, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";

function Contest() {
  const contests_subMenu = [
    {
      title: "공모전 목록",
      link: "/contests",
    },
    {
      title: "공모전 등록",
      link: "/contests/register",
    },
  ];
  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={contests_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Form>
              <Row>
                <Col>
                  <Image
                    alt="포스터 이미지"
                    style={{ width: "32rem" }}
                    src="data:image/jpeg;base64,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"
                  />
                </Col>
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="2">
                      글 제목
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue="email@example.com"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="2">
                      공모전 제목
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue="email@example.com"
                      />
                    </Col>
                  </Form.Group>
                  <Row>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="2">
                        종료날짜
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="2021년 12월 15일"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="2">
                        필요인원 수
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="10" />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="2">
                          작성자
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control plaintext readOnly defaultValue="10" />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextEmail"
                      >
                        <Form.Label column sm="2">
                          조회수
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control plaintext readOnly defaultValue="10" />
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label sm="2">내용</Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue="10" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label sm="2">요구사항</Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue="10" />
                </Col>
              </Form.Group>
            </Form>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button type="submit" className="mb-2">
                  참여 요청하기
                </Button>
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

export default Contest;
