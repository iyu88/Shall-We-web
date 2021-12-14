import "./Contest.css";
import {
  Row,
  Col,
  Container,
  Image,
  Button,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useContext, useState, useRef } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contest() {
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
  const { user } = useContext(AuthContext);
  const params_id = useParams().id;
  const [contest, setContest] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();

  const article_title = useRef();
  const contest_title = useRef();
  const due_date = useRef();
  const num_of_people = useRef();
  const contest_content = useRef();
  const requirements = useRef();

  useEffect(() => {
    const fetchView = async () => {
      try {
        await axios.put(`${SHALLWE_URL}/api/contest/${params_id}/view`, {
          userId: user._id,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchView();
  }, []);

  useEffect(() => {
    const fetchContest = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/contest/${params_id}`);
        setContest(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContest();
  }, [params_id]);

  const handleJoin = async (e) => {
    e.preventDefault();
    if (!user) {
      let isLogin = window.confirm(
        "로그인이 필요한 서비스입니다. 로그인하시겠습니까?"
      );
      if (isLogin) {
        navigate("/signIn");
      }
    } else {
      try {
        const res = await axios.put(
          `${SHALLWE_URL}/api/contest/${params_id}/fav`,
          {
            userId: user._id,
          }
        );
        window.alert(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleModify = async (e) => {
    e.preventDefault();
    setUpdateMode(true);
    if (updateMode) {
      let isModify = window.confirm("이대로 수정을 진행할까요?");
      if (isModify) {
        const newContest = {
          user_id: user._id,
          article_title: article_title.current.value,
          contest_title: contest_title.current.value,
          due_date: due_date.current.value,
          num_of_people: num_of_people.current.value,
          contest_content: contest_content.current.value,
          requirements: requirements.current.value,
        };

        try {
          await axios.put(
            `${SHALLWE_URL}/api/contest/${params_id}`,
            newContest
          );
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
    let isRemove = window.confirm("이 게시물을 정말로 삭제하시겠습니까?");
    if (isRemove) {
      try {
        await axios.delete(`${SHALLWE_URL}/api/contest/${params_id}`, {
          data: { userId: user._id },
        });
        window.alert("삭제되었습니다.");
        navigate("/contests");
      } catch (err) {
        console.log(err);
      }
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
            <Container className="p-5">
              <Row className="mb-3 p-4" id="contest_wrapper">
                <Col className="d-flex justify-content-center">
                  <Image
                    id="contest_img"
                    className="mb-3"
                    alt="포스터 이미지"
                    src={`${SHALLWE_URL}/images/${contest?.contest_picture}`}
                  />
                </Col>
                <Col
                  className="d-flex flex-column justify-content-between p-5"
                  id="contest_right"
                >
                  {updateMode ? (
                    <>
                      <FloatingLabel
                        controlId="contest_title"
                        label="글 제목"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Normal text"
                          defaultValue={contest?.article_title}
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
                          defaultValue={contest?.contest_title}
                          ref={contest_title}
                        />
                      </FloatingLabel>
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
                              defaultValue={contest?.due_date}
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
                              defaultValue={contest?.num_of_people}
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
                          defaultValue={contest?.contest_content}
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
                          defaultValue={contest?.requirements}
                          ref={requirements}
                        />
                      </FloatingLabel>
                    </>
                  ) : (
                    <>
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">제목 :</label>
                        <div className="fs-4">{contest?.article_title}</div>
                      </Row>
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">
                          공모전 제목 :
                        </label>
                        <div className="fs-4">{contest?.contest_title}</div>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <label className="mb-2 fs-2 fw-bold">
                            종료날짜 :
                          </label>
                          <div className="fs-4">{contest?.due_date}</div>
                        </Col>
                        <Col>
                          <label className="mb-2 fs-2 fw-bold">
                            필요인원 수 :
                          </label>
                          <div className="fs-4">{contest?.num_of_people}</div>
                        </Col>
                      </Row>
                      <hr />
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">내용 :</label>
                        <textarea
                          className="fs-4"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                          }}
                          rows="4"
                          disabled={true}
                          value={contest?.contest_content}
                        ></textarea>
                      </Row>
                      <hr />
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">요구사항 :</label>
                        <textarea
                          className="fs-4"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                          }}
                          rows="4"
                          disabled={true}
                          value={contest?.requirements}
                        ></textarea>
                      </Row>
                      <hr />
                    </>
                  )}
                  <Row>
                    <Col>
                      <label className="mb-2 fs-2 fw-bold">작성자</label>
                      <div className="fs-4">{contest?.userId}</div>
                    </Col>
                    <Col>
                      <label className="mb-2 fs-2 fw-bold">조회수</label>
                      <div className="fs-4">
                        {contest?.contest_view?.length}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Row className="mt-4">
                  <Col className="d-flex justify-content-end">
                    {contest?.user_id !== user?._id ? (
                      <>
                        <Button
                          type="submit"
                          className="mb-2"
                          onClick={handleJoin}
                        >
                          참여 요청하기
                        </Button>
                        <span>&nbsp;</span>
                      </>
                    ) : (
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
                    )}
                  </Col>
                </Row>
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

export default Contest;
