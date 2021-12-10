import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";

function ReviewRegister() {
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
                <div className="p-4 my-bg-primary">
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                      분류
                    </Form.Label>
                    <Col sm={10} className="my-auto">
                      <Form.Check
                        inline
                        label="공모전 후기"
                        name="group1"
                        type="radio"
                        id={`inline-radio-1`}
                      />
                      <Form.Check
                        inline
                        label="팀원 후기"
                        name="group1"
                        type="radio"
                        id={`inline-radio-2`}
                      />
                    </Col>
                  </Form.Group>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="대상 선택"
                    className="mb-3"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>작성할 후기에 대한 대상을 선택해주세요.</option>
                      <option value="1">팀원1</option>
                      <option value="2">팀원2</option>
                      <option value="3">팀원3</option>
                      <option value="4">공모전1</option>
                      <option value="5">공모전2</option>
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="활동 내용"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "120px" }}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="소감"
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

export default ReviewRegister;
