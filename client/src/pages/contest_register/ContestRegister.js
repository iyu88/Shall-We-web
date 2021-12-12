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
import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function ContestRegister() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
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

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const article_title = useRef();
  const contest_title = useRef();
  const contest_picture = useRef();
  const due_date = useRef();
  const num_of_people = useRef();
  const contest_content = useRef();
  const requirements = useRef();

  const registerNewContest = async (e) => {
    e.preventDefault();
    const newContest = {
      user_id: user._id,
      userId: user.userId,
      article_title: article_title.current.value,
      contest_title: contest_title.current.value,
      contest_picture: contest_picture.current.value,
      due_date: due_date.current.value,
      num_of_people: num_of_people.current.value,
      contest_content: contest_content.current.value,
      requirements: requirements.current.value,
    };

    let isSave = window.confirm("이대로 공모전을 등록할까요?");
    if (isSave) {
      try {
        await axios.post(`${SHALLWE_URL}/api/contest/register`, newContest);
        console.log("공모전 등록 성공");
        navigate("/contests");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const cancelNewContest = () => {
    let isCancel = window.confirm(
      "작성 중인 정보가 사라집니다. 공모전 등록을 취소하시겠습니까?"
    );
    if (isCancel) {
      navigate("/contests");
    }
  };

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={contests_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Form className="p-5" onSubmit={registerNewContest}>
              <Row>
                <Col className="d-flex justify-content-center">
                  <Image
                    className="mb-3"
                    alt="포스터 이미지"
                    style={{ width: "32rem" }}
                    src="https://www.kogl.or.kr/contents_images2//20200907/1599437999867.png"
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-between">
                  <FloatingLabel
                    controlId="contest_title"
                    label="글 제목"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Normal text"
                      ref={article_title}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="contest_title"
                    label="공모전 제목"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Normal text"
                      ref={contest_title}
                    />
                  </FloatingLabel>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>공모전 포스터</Form.Label>
                    <Form.Control type="file" ref={contest_picture} />
                  </Form.Group>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="contest_title"
                        label="종료 날짜"
                        className="mb-3"
                      >
                        <Form.Control
                          type="date"
                          placeholder="Normal text"
                          ref={due_date}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="contest_title"
                        label="필요 인원 수"
                        className="mb-3"
                      >
                        <Form.Control
                          type="number"
                          placeholder="Normal text"
                          ref={num_of_people}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="내용"
                    className="my-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      ref={contest_content}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="요구사항"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      ref={requirements}
                    />
                  </FloatingLabel>
                  <Row>
                    <Col className="d-flex justify-content-end">
                      <Button
                        type="submit"
                        className="mb-2"
                        onClick={cancelNewContest}
                      >
                        취소하기
                      </Button>
                      <span>&nbsp;</span>
                      <Button type="submit" className="mb-2">
                        등록하기
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default ContestRegister;
