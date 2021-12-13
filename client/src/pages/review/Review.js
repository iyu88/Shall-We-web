import { Container, Row, Col, Badge, Image, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Review() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
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

  const { user } = useContext(AuthContext);
  const params_id = useParams().id;
  const [review, setReview] = useState({});
  const navigate = useNavigate();

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

  const handleModify = (e) => {
    e.preventDefault();
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
              <Col>
                <div className="my-bg-primary p-4">
                  <Row className="my-bg-secondary p-3">
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
                        <div className="fw-bold">{review?.review_title}</div>
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
                        <div>{review?.review_to_whom}</div>
                      </Badge>
                    </h1>
                  </Row>
                  <Row className="my-bg-secondary p-3">
                    <div>활동 내용</div>
                    <p>{review?.review_content}</p>
                  </Row>
                  <Row className="my-bg-secondary p-3">
                    <div>소감</div>
                    <p>{review?.impression}</p>
                  </Row>
                  <Row>
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
