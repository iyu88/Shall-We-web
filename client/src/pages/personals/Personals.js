import { Container, Row, Col, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function Personals() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
  const personals_subMenu = [
    {
      title: "개인정보수정",
      link: "/personals",
    },
    {
      title: "???",
      link: "/personals/register",
    },
  ];

  const { user } = useContext(AuthContext);
  const [myInfo, setMyInfo] = useState({});
  const [myProfile, setMyProfile] = useState({});

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
        const res = await axios.get(`${SHALLWE_URL}/api/teammate/${user._id}`);
        setMyProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={personals_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Col>
                <div className="my-bg-primary p-4">
                  <Row>
                    <div className="my-bg-primary p-4">
                      <div>
                        <Row>
                          <h3>내 계정 정보</h3>
                        </Row>
                        <Row>
                          <Col>이름</Col>
                          <Col>{myInfo?.username}</Col>
                        </Row>
                        <Row>
                          <Col>아이디</Col>
                          <Col>{myInfo?.userId}</Col>
                        </Row>
                        <Row>
                          <Col>비밀번호</Col>
                          <Col>이름이에여</Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button type="submit" className="mb-2">
                              수정하기
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <h3>내 프로필 정보</h3>
                        </Row>
                        <Row>
                          <Col>닉네임</Col>
                          <Col>{myProfile?.nickname}</Col>
                        </Row>
                        <Row>
                          <Col>이메일</Col>
                          <Col>{myProfile?.email}</Col>
                        </Row>
                        <Row>
                          <Col>직업</Col>
                          <Col>{myProfile?.job}</Col>
                        </Row>
                        <Row>
                          <Col>포지션</Col>
                          <Col>{myProfile?.position}</Col>
                        </Row>
                        <Row>
                          <Col>대표 기술 역량</Col>
                          <Col>{myProfile?.technical}</Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button type="submit" className="mb-2">
                              수정하기
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row>
                          <h3>회원탈퇴</h3>
                        </Row>
                        <Row>
                          <Col>
                            회원을 탈퇴하시겠습니까? 회원 탈퇴를 원하시면 우측의
                            버튼을 눌러주세요.
                          </Col>
                          <Col>
                            <Button type="submit" className="mb-2 btn-danger">
                              탈퇴하기
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>
                  <Row></Row>
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

export default Personals;
