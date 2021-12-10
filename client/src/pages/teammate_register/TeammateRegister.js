import {
  Row,
  Col,
  Container,
  Image,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";

function TeammateRegister() {
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
                  <FloatingLabel
                    controlId="contest_title"
                    label="닉네임"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Normal text" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="contest_title"
                    label="이메일"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Normal text" />
                  </FloatingLabel>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>프로필 사진</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <FloatingLabel
                    controlId="contest_title"
                    label="직업"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Normal text" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="포지션"
                    className="mb-3"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>
                        현재 포지션 혹은 희망 포지션을 선택하세요.
                      </option>
                      <option value="1">개발자</option>
                      <option value="2">디자이너</option>
                      <option value="3">기획자</option>
                      <option value="4">작가</option>
                      <option value="5">일러스트레이터</option>
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="contest_title"
                    label="대표 기술 역량"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Normal text" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="자기소개"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "120px" }}
                    />
                  </FloatingLabel>
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

export default TeammateRegister;
