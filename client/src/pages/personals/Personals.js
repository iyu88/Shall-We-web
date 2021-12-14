import "./Personals.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Personals() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";

  const { user, dispatch } = useContext(AuthContext);

  const personals_subMenu = [
    {
      title: "개인정보수정",
      link: `/personals/${user._id}`,
    },
    {
      title: "내 즐겨찾기",
      link: `/personals/fav/${user._id}`,
    },
  ];

  const [myInfo, setMyInfo] = useState({});
  const [myProfile, setMyProfile] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const params_id = useParams().id;
  const navigate = useNavigate();

  const password = useRef();
  const passwordCheck = useRef();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/user/${user._id}`);
        setMyInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchInfo();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${SHALLWE_URL}/api/teammate/my/${user._id}`
        );
        setMyProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  const handlePW = async (e) => {
    e.preventDefault();
    setUpdateMode(true);
    if (updateMode) {
      let isModify = window.confirm("이대로 비밀번호를 변경할까요?");
      if (isModify) {
        if (password.current.value !== passwordCheck.current.value) {
          window.alert("비밀번호가 올바르지 않습니다. 다시 확인해주세요.");
        } else {
          const newUser = {
            userId: user._id,
            password: password.current.value,
          };

          try {
            await axios.put(`${SHALLWE_URL}/api/user/${params_id}`, newUser);
            setUpdateMode(false);
            window.location.reload();
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    let isDelete = window.confirm("정말로 회원을 탈퇴하시겠습니까?");
    if (isDelete) {
      try {
        await axios.delete(`${SHALLWE_URL}/api/user/${params_id}`, {
          data: { userId: user._id },
        });
        dispatch({ type: "LOGOUT" });
        window.alert("정상적으로 탈퇴했습니다.");
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={personals_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Container className="p-5">
              <Row className="mb-3 p-4" id="personal_wrapper">
                <Col id="personal_inner">
                  <div className="p-5">
                    <Row>
                      <Row>
                        <div
                          className="fs-2 fw-bold mb-3"
                          style={{ color: "#eee8a9" }}
                        >
                          내 계정 정보
                        </div>
                      </Row>
                      <Row>
                        <Col className="fs-3 fw-bold mb-2">이름</Col>
                        <Col className="fs-3 mb-2">{myInfo?.username}</Col>
                      </Row>
                      <Row>
                        <Col className="fs-3 fw-bold mb-2">아이디</Col>
                        <Col className="fs-3 mb-2">{myInfo?.userId}</Col>
                      </Row>
                      <Row>
                        <Col className="fs-3 fw-bold mb-2">비밀번호</Col>
                        {updateMode ? (
                          <>
                            <Col className="fs-3 mb-2">
                              <Form.Control
                                type="password"
                                placeholder="새 비밀번호"
                                ref={password}
                              />
                            </Col>
                          </>
                        ) : (
                          <>
                            <Col className="fs-3 mb-2">{myInfo?.password}</Col>
                          </>
                        )}
                      </Row>
                      {updateMode ? (
                        <>
                          <Row>
                            <Col className="fs-3 fw-bold mb-2">
                              비밀번호 확인
                            </Col>
                            <Col>
                              <Form.Control
                                type="password"
                                placeholder="새 비밀번호 확인"
                                ref={passwordCheck}
                              />
                            </Col>
                          </Row>
                        </>
                      ) : (
                        <></>
                      )}
                      <Row className="my-3">
                        <Col>
                          <Button
                            type="submit"
                            className="mb-2"
                            onClick={handlePW}
                          >
                            비밀번호 변경
                          </Button>
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <div
                          className="fs-2 fw-bold mb-3"
                          style={{ color: "#eee8a9" }}
                        >
                          내 프로필 정보
                        </div>
                      </Row>
                      <Row>
                        <Col className="fs-3 fw-bold mb-2">닉네임</Col>
                        <Col className="fs-3 mb-2">
                          {myProfile
                            ? myProfile.nickname
                            : "프로필이 존재하지 않습니다."}
                        </Col>
                      </Row>
                      <Row>
                        <Col className="fs-3 fw-bold mb-2">이메일</Col>
                        <Col className="fs-3 mb-2">
                          {myProfile ? myProfile.email : "-"}
                        </Col>
                      </Row>
                      <Row>
                        <Col className="fs-3 fw-bold mb-2">직업</Col>
                        <Col className="fs-3 mb-2">
                          {myProfile ? myProfile.job : "-"}
                        </Col>
                      </Row>
                      <Row>
                        <Col className="fs-3 fw-bold mb-2">포지션</Col>
                        <Col className="fs-3 mb-2">
                          {myProfile ? myProfile.position : "-"}
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col className="fs-3 fw-bold mb-2">대표 기술 역량</Col>
                        <Col className="fs-3 mb-2">
                          {myProfile ? myProfile.technical : "-"}
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <div
                          className="fs-2 fw-bold mb-3"
                          style={{ color: "#eee8a9" }}
                          s
                        >
                          회원탈퇴
                        </div>
                      </Row>
                      <Row>
                        <Col className="fs-4 fw-bold mb-2 text-danger">
                          회원을 탈퇴하시겠습니까? 회원 탈퇴를 원하시면 우측의
                          버튼을 눌러주세요.
                        </Col>
                        <Col>
                          <Button
                            type="submit"
                            className="mb-2 btn-danger"
                            onClick={handleDeleteUser}
                          >
                            탈퇴하기
                          </Button>
                        </Col>
                      </Row>
                    </Row>
                    <Row></Row>
                  </div>
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

export default Personals;
