import { Row, Col, Container, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import { ReactComponent as PicThink } from "../../imgs/pic_think.svg";
import { ReactComponent as PicContest } from "../../imgs/pic_contest.svg";
import { ReactComponent as PicTeammate } from "../../imgs/pic_teammate.svg";
import { ReactComponent as PicReview } from "../../imgs/pic_review.svg";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <MyNav></MyNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Col className="my-5 py-5 d-flex justify-content-center align-items-center">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <Row
                    className="mb-3"
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      color: "#eee8a9",
                    }}
                  >
                    규모 있는 프로젝트
                  </Row>
                  <span style={{ color: "#f0faff" }}>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      큰 프로젝트에 도전하고 싶지만
                    </Row>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      혼자서 감당하기엔 벅차고!
                    </Row>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      의미 있는 경험을 하고 싶은 당신
                    </Row>
                    <Row className="mb-3 px-3 fs-2 text-center">
                      더 이상 고민하지 마시길
                    </Row>
                  </span>
                </div>
                <PicThink style={{ width: "50%" }} />
              </Col>
            </Row>
            <Row>
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <Row
                    className="mb-3"
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      color: "#eee8a9",
                    }}
                  >
                    당신이 원한 공모전
                  </Row>
                  <span style={{ color: "#f0faff" }}>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      출품하고 싶은 작품이 있나요?
                    </Row>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      참여하고 싶은 대회가 있나요?
                    </Row>
                    <Row className="mb-3 px-3 fs-2 text-center">
                      협업으로 멋진 경험을 만드세요!
                    </Row>
                    <Button href="/contests" variant="info" className="fs-3">
                      공모전 정보 보러가기
                    </Button>
                  </span>
                </div>
                <PicContest style={{ width: "50%" }} />
              </Col>
            </Row>
            <Row>
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <Row
                    className="mb-3"
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      color: "#eee8a9",
                    }}
                  >
                    동료가 필요해
                  </Row>
                  <span style={{ color: "#f0faff" }}>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      디자이너가 필요하신 분!
                    </Row>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      개발자가 필요하신 분!
                    </Row>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      아니면 기획자는요?
                    </Row>
                    <Row className="mb-3 px-3 fs-2 text-center">
                      당신이 필요한 동료가 여기에
                    </Row>
                    <Button href="teammates" variant="info" className="fs-3">
                      팀원 찾으러 가기
                    </Button>
                  </span>
                </div>
                <PicTeammate style={{ width: "50%" }} />
              </Col>
            </Row>
            <Row>
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                  <Row
                    className="mb-3"
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      color: "#eee8a9",
                    }}
                  >
                    정보를 주세요
                  </Row>
                  <span style={{ color: "#f0faff" }}>
                    <Row className="mb-2 px-3 fs-2 text-center">
                      부족한 정보에 좌절하지 마세요!
                    </Row>
                    <Row className="mb-3 px-3 fs-2 text-center">
                      공유된 후기를 읽어보세요
                    </Row>
                    <Button href="reviews" variant="info" className="fs-3">
                      후기 게시판 바로가기
                    </Button>
                  </span>
                </div>
                <PicReview style={{ width: "50%" }} />
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

export default Home;
