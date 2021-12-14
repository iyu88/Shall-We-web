import "./ReviewRegister.css";
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
import { useNavigate } from "react-router-dom";
import { useRef, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function ReviewRegister() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
  const reviews_subMenu = [
    {
      title: "후기 목록",
      link: "/reviews",
    },
    {
      title: "후기 작성",
      link: "/reviews/register",
    },
  ];

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [reviewType, setReviewType] = useState("공모전");

  const review_to_whom = useRef();
  const review_title = useRef();
  const review_content = useRef();
  const impression = useRef();

  const handleReviewType = (e) => {
    e.preventDefault();
    setReviewType(e.target.value);
  };

  const registerNewReview = async (e) => {
    e.preventDefault();
    const newReview = {
      user_id: user._id,
      userId: user.userId,
      review_type: reviewType,
      review_to_whom: review_to_whom.current.value,
      review_title: review_title.current.value,
      review_content: review_content.current.value,
      impression: impression.current.value,
    };

    let isSave = window.confirm("이대로 리뷰를 등록할까요?");
    if (isSave) {
      try {
        await axios.post(`${SHALLWE_URL}/api/review/register`, newReview);
        navigate("/reviews");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const cancelNewReview = () => {
    let isCancel = window.confirm(
      "작성 중인 정보가 사라집니다. 리뷰 등록을 취소하시겠습니까?"
    );
    if (isCancel) {
      navigate("/reviews");
    }
  };

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={reviews_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Container className="p-5">
              <Row className="mb-3 p-4" id="review_wrapper">
                <Col id="review_inner">
                  <Form className="p-5" onSubmit={registerNewReview}>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label
                        as="legend"
                        column
                        sm={2}
                        className="fs-3 fw-bold"
                      >
                        분류
                      </Form.Label>
                      <Col sm={10} className="my-auto">
                        <Form.Check
                          inline
                          label="공모전 후기"
                          value="공모전"
                          name="group1"
                          type="radio"
                          id={`inline-radio-1`}
                          checked={true}
                          onChange={handleReviewType}
                        />
                        <Form.Check
                          inline
                          label="팀원 후기"
                          value="팀원"
                          name="group1"
                          type="radio"
                          id={`inline-radio-2`}
                          onChange={handleReviewType}
                        />
                      </Col>
                    </Form.Group>
                    <FloatingLabel
                      controlId="contest_title"
                      label="리뷰 대상"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Normal text"
                        ref={review_to_whom}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="contest_title"
                      label="리뷰 제목"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Normal text"
                        ref={review_title}
                      />
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
                        ref={review_content}
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
                        ref={impression}
                      />
                    </FloatingLabel>
                    <hr />
                    <div className="d-flex justify-content-end">
                      <Button
                        type="submit"
                        className="mb-2"
                        onClick={cancelNewReview}
                      >
                        취소하기
                      </Button>
                      <span>&nbsp;</span>
                      <Button type="submit" className="mb-2">
                        등록하기
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default ReviewRegister;
