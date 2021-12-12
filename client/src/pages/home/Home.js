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
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div>
                  <div className="fs-1">규모 있는 프로젝트</div>
                  <div className="fs-2">
                    완성도 높은 프로젝트를 만들고 싶지만 혼자서 감당하기엔
                    벅차고!
                  </div>
                  <div className="fs-2">
                    의미 있는 프로젝트를 진행하고 싶은 당신! 더 이상 고민하지
                    마시길
                  </div>
                </div>
                <PicThink style={{ width: "60%" }} />
              </Col>
            </Row>
            <Row>
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div>
                  <div className="fs-1">당신이 원하는 공모전</div>
                  <div className="fs-2">
                    출품하고 싶은 작품이 있나요? 참여하고 싶은 대회가 있나요?
                  </div>
                  <div className="fs-2">
                    혼자보다 여럿이 협업을 통해서 더욱 멋있는 경험을 해보세요!
                  </div>
                  <Button href="/contests" variant="info" className="fs-3">
                    공모전 정보 보러가기
                  </Button>
                </div>
                <PicContest style={{ width: "60%" }} />
              </Col>
            </Row>
            <Row>
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div>
                  <div className="fs-1">동료가 필요해</div>
                  <div className="fs-2">
                    디자이너가 필요하신 분! 개발자가 필요하신 분!
                  </div>
                  <div className="fs-2">
                    아니면 기획자는요? 혹시 당신이 필요한 동료가 여기에?
                  </div>
                  <Button href="teammates" variant="info" className="fs-3">
                    팀원 찾으러 가기
                  </Button>
                </div>
                <PicTeammate style={{ width: "60%" }} />
              </Col>
            </Row>
            <Row>
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div>
                  <div className="fs-1">정보를 주세요</div>
                  <div className="fs-2">부족한 정보에 좌절하지 마세요!</div>
                  <div className="fs-2">
                    공모전과 팀원에 대한 후기를 읽어보세요
                  </div>
                  <Button href="reviews" variant="info" className="fs-3">
                    후기 게시판 바로가기
                  </Button>
                </div>
                <PicReview style={{ width: "70%" }} />
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
