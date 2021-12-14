import "./Review.css";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import Filter from "../../components/filter/Filter";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useContext, useState, useRef } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Review() {
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

  const reviews_filter = [
    {
      title: "전체 리뷰",
      link: "/reviews",
    },
    {
      title: "공모전 리뷰",
      link: "/reviews/contest",
    },
    {
      title: "팀원 리뷰",
      link: "/reviews/teammate",
    },
  ];

  const { user } = useContext(AuthContext);
  const params_id = useParams().id;
  const [review, setReview] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();

  const review_title = useRef();
  const review_content = useRef();
  const impression = useRef();

  useEffect(() => {
    const fetchView = async () => {
      try {
        await axios.put(`${SHALLWE_URL}/api/review/${params_id}/view`, {
          userId: user._id,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchView();
  }, []);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/review/${params_id}`);
        setReview(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReview();
  }, [params_id]);

  const handleModify = async (e) => {
    e.preventDefault();
    setUpdateMode(true);
    if (updateMode) {
      let isModify = window.confirm("이대로 수정을 진행할까요?");
      if (isModify) {
        const newReview = {
          user_id: user._id,
          review_title: review_title.current.value,
          review_content: review_content.current.value,
          impression: impression.current.value,
        };

        try {
          await axios.put(`${SHALLWE_URL}/api/review/${params_id}`, newReview);
          setUpdateMode(false);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  const handleRemove = async (e) => {
    e.preventDefault();
    let isRemove = window.confirm("이 후기를 정말로 삭제하시겠습니까?");
    if (isRemove) {
      try {
        await axios.delete(`${SHALLWE_URL}/api/review/${params_id}`, {
          data: { userId: user._id },
        });
        window.alert("삭제되었습니다.");
        navigate("/reviews");
      } catch (err) {
        console.log(err);
      }
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
            <Row>
              <Filter filter={reviews_filter}></Filter>
              <Col className="p-4">
                <div className="my-bg-primary p-5" id="review_wrapper">
                  <Row className=" p-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="my-auto">
                        {review?.review_type === "공모전" ? (
                          <Badge
                            variant="primary"
                            bg="secondary"
                            style={{ width: "5em" }}
                          >
                            공모전
                          </Badge>
                        ) : (
                          <Badge
                            variant="primary"
                            bg="info"
                            style={{ width: "5em" }}
                          >
                            팀원
                          </Badge>
                        )}
                      </h5>
                      <div className="ms-3 my-auto">
                        {updateMode ? (
                          <>
                            <FloatingLabel
                              controlId="contest_title"
                              label="리뷰 제목"
                              className="mb-3"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Normal text"
                                defaultValue={review?.review_title}
                                ref={review_title}
                              />
                            </FloatingLabel>
                          </>
                        ) : (
                          <div className="fw-bold">{review?.review_title}</div>
                        )}
                      </div>
                      <Badge
                        variant="primary"
                        pill
                        className="my-auto"
                        style={{ width: "5em" }}
                      >
                        {review?.review_view?.length}
                      </Badge>
                    </div>
                  </Row>
                  <Row className="my-bg-light px-4 py-2">
                    <div className="d-flex justify-content-between">
                      <div>{review?.userId}</div>
                      <div>
                        {new Date(review?.updatedAt).toLocaleDateString()}
                        {new Date(review?.updatedAt).toLocaleTimeString()}
                      </div>
                    </div>
                  </Row>
                  <hr />
                  <Row className="p-3">
                    <h2 className="my-auto">
                      <Badge
                        bg={
                          review?.review_type === "공모전"
                            ? "secondary"
                            : "info"
                        }
                        className="d-inline-flex align-items-center"
                      >
                        {/* <Image
                          alt="이미지"
                          style={{
                            width: "6rem",
                            height: "6rem",
                            objectFit: "cover",
                          }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsw_w-gtGKZC1K88cRRJ_vreVGB6EZsl79lCJEkjVUD4gHWBv77uySCZYJ5wZimTmYFCI&usqp=CAU"
                          roundedCircle
                        /> */}
                        <div>[{review?.review_to_whom}] 에 대한 글</div>
                      </Badge>
                    </h2>
                  </Row>
                  {updateMode ? (
                    <>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="활동 내용"
                        className="mb-3"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "120px" }}
                          defaultValue={review?.review_content}
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
                          defaultValue={review?.impression}
                          ref={impression}
                        />
                      </FloatingLabel>
                    </>
                  ) : (
                    <>
                      <hr />
                      <Row className="p-3">
                        <label className="mb-2 fs-2 fw-bold">활동 내용 :</label>
                        <textarea
                          className="fs-4"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                          }}
                          rows="4"
                          disabled={true}
                          value={review?.review_content}
                        >
                          {review?.review_content}
                        </textarea>
                      </Row>
                      <hr />
                      <Row className="p-3">
                        <label className="mb-2 fs-2 fw-bold">소감 :</label>
                        <textarea
                          className="fs-4"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                          }}
                          rows="4"
                          disabled={true}
                          value={review?.impression}
                        ></textarea>
                      </Row>
                      <hr />
                    </>
                  )}
                  <Row className="mt-4">
                    <Col className="d-flex justify-content-end">
                      {review?.user_id === user?._id ? (
                        <>
                          <Button
                            type="submit"
                            className="mb-2"
                            variant="info"
                            onClick={handleModify}
                          >
                            수정하기
                          </Button>
                          <span>&nbsp;</span>
                          <Button
                            type="submit"
                            className="mb-2 btn-danger"
                            onClick={handleRemove}
                          >
                            삭제하기
                          </Button>
                        </>
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Row>
                </div>
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

export default Review;
