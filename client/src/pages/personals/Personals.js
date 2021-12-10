import { Container, Row, Col, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";

function Personals() {
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

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={personals_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
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
                          <Col>이름이에여</Col>
                        </Row>
                        <Row>
                          <Col>아이디</Col>
                          <Col>이름이에여</Col>
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
                          <Col>이름이에여</Col>
                        </Row>
                        <Row>
                          <Col>이메일</Col>
                          <Col>이름이에여</Col>
                        </Row>
                        <Row>
                          <Col>직업</Col>
                          <Col>이름이에여</Col>
                        </Row>
                        <Row>
                          <Col>포지션</Col>
                          <Col>이름이에여</Col>
                        </Row>
                        <Row>
                          <Col>대표 기술 역량</Col>
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
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Personals;
