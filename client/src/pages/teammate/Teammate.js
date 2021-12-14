import "./Teammate.css";
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

function Teammate() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
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
  const { user } = useContext(AuthContext);
  const params_id = useParams().id;
  const [teammate, setTeammate] = useState({});
  const [position, setPosition] = useState("개발자");
  const [updateMode, setUpdateMode] = useState(false);
  const navigate = useNavigate();

  const nickname = useRef();
  const email = useRef();
  const job = useRef();
  const technical = useRef();
  const introduce = useRef();

  useEffect(() => {
    const fetchView = async () => {
      try {
        await axios.put(`${SHALLWE_URL}/api/teammate/${params_id}/view`, {
          userId: user._id,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchView();
  }, []);

  useEffect(() => {
    const fetchTeammate = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/teammate/${params_id}`);
        setTeammate(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeammate();
  }, [params_id]);

  const handleChangePosition = (e) => {
    setPosition(e.target.value);
  };

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
          `${SHALLWE_URL}/api/teammate/${params_id}/fav`,
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
        const newTeammate = {
          user_id: user._id,
          nickname: nickname.current.value,
          email: email.current.value,
          job: job.current.value,
          position: position,
          technical: technical.current.value,
          introduce: introduce.current.value,
        };

        try {
          await axios.put(
            `${SHALLWE_URL}/api/teammate/${params_id}`,
            newTeammate
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
    let isRemove = window.confirm("이 프로필을 정말로 삭제하시겠습니까?");
    if (isRemove) {
      try {
        await axios.delete(`${SHALLWE_URL}/api/teammate/${params_id}`, {
          data: { userId: user._id },
        });
        window.alert("삭제되었습니다.");
        navigate("/teammates");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={teammates_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Container className="p-5">
              <Row className="mb-3 p-4" id="teammate_wrapper">
                <Col className="d-flex justify-content-center">
                  <Image
                    id="teammate_img"
                    className="mb-3"
                    alt="프로필 이미지"
                    src={`${SHALLWE_URL}/images/${teammate?.profile_pic}`}
                  />
                </Col>
                <Col
                  className="d-flex flex-column justify-content-between p-5"
                  id="teammate_right"
                >
                  {updateMode ? (
                    <>
                      <FloatingLabel
                        controlId="contest_title"
                        label="닉네임"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Normal text"
                          defaultValue={teammate?.nickname}
                          ref={nickname}
                        />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="contest_title"
                        label="이메일"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Normal text"
                          defaultValue={teammate?.email}
                          ref={email}
                        />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="contest_title"
                        label="직업"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Normal text"
                          defaultValue={teammate?.job}
                          ref={job}
                        />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="포지션"
                        className="mb-3"
                      >
                        <Form.Select
                          aria-label="Floating label select example"
                          defaultValue={teammate?.position}
                          onChange={handleChangePosition}
                        >
                          <option value="개발자">개발자</option>
                          <option value="디자이너">디자이너</option>
                          <option value="기획자">기획자</option>
                          <option value="작가">작가</option>
                          <option value="일러스트레이터">일러스트레이터</option>
                        </Form.Select>
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="contest_title"
                        label="대표 기술 역량"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Normal text"
                          defaultValue={teammate?.technical}
                          ref={technical}
                        />
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
                          defaultValue={teammate?.introduce}
                          ref={introduce}
                        />
                      </FloatingLabel>
                    </>
                  ) : (
                    <>
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">닉네임 :</label>
                        <div className="fs-4">{teammate?.nickname}</div>
                      </Row>
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">이메일 :</label>
                        <div className="fs-4">{teammate?.email}</div>
                      </Row>
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">직업 :</label>
                        <div className="fs-4">{teammate?.job}</div>
                      </Row>
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">포지션 :</label>
                        <div className="fs-4">{teammate?.position}</div>
                      </Row>
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">
                          대표 기술 역량 :
                        </label>
                        <div className="fs-4">{teammate?.technical}</div>
                      </Row>
                      <hr />
                      <Row className="mb-3">
                        <label className="mb-2 fs-2 fw-bold">자기소개 :</label>
                        <textarea
                          className="fs-4"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                          }}
                          rows="4"
                          disabled={true}
                          value={teammate?.introduce}
                        ></textarea>
                      </Row>
                      <hr />
                    </>
                  )}
                  <Row>
                    <Col>
                      <label className="mb-2 fs-2 fw-bold">조회수</label>
                      <div className="fs-4">
                        {teammate?.teammate_view?.length}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Row className="mt-4">
                  <Col className="d-flex justify-content-end">
                    {teammate?.user_id !== user?._id ? (
                      <>
                        <Button
                          type="submit"
                          className="mb-2"
                          onClick={handleJoin}
                        >
                          팀 신청하기
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

export default Teammate;
