import { Row, Col, Container, Image, Form, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";

function Teammate() {
  const teammates_subMenu = [
    {
      title: "팀원 목록",
      link: "/teammates",
    },
    {
      title: "내 정보 등록",
      link: "/teammates/register",
    },
  ];
  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={teammates_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Form>
              <Row>
                <Col>
                  <Image
                    alt="포스터 이미지"
                    style={{ width: "24rem" }}
                    src="https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1031316_16021305794383917.jpg"
                  />
                </Col>
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formPlaintextEmail"
                  >
                    <Form.Label column sm="2">
                      닉네임
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
                      이메일
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
                      직업
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
                      포지션
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
                      대표 기술 역량
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
                    <Form.Label sm="2">자기소개</Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue="10" />
                    </Col>
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button type="submit" className="mb-2">
                      취소하기
                    </Button>
                    <Button type="submit" className="mb-2">
                      등록하기
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Teammate;
