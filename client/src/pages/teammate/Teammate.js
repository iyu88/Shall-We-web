import { Row, Col, Container, Image, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
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

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={teammates_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Container className="p-5">
              <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                  <Image
                    className="mb-3"
                    alt="포스터 이미지"
                    style={{ width: "24rem" }}
                    src="https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1031316_16021305794383917.jpg"
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-around">
                  <Row className="mb-3">
                    <label className="mb-2">제목</label>
                    <div>{teammate?.nickname}</div>
                  </Row>
                  <Row className="mb-3">
                    <label className="mb-2">이메일</label>
                    <div>{teammate?.email}</div>
                  </Row>
                  <Row className="mb-3">
                    <label className="mb-2">직업</label>
                    <div>{teammate?.job}</div>
                  </Row>
                  <Row className="mb-3">
                    <label className="mb-2">포지션</label>
                    <div>{teammate?.position}</div>
                  </Row>
                  <Row className="mb-3">
                    <label className="mb-2">대표 기술 역량</label>
                    <div>{teammate?.technical}</div>
                  </Row>
                  <Row>
                    <label className="mb-2">자기소개</label>
                    <div>{teammate?.introduce}</div>
                  </Row>
                  <Row>
                    <Col>
                      <label className="mb-2">조회수</label>
                      <div>{teammate?.teammate_view?.length}</div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      {teammate?.user_id !== user?._id ? (
                        <>
                          <Button type="submit" className="mb-2">
                            팀 신청하기
                          </Button>
                          <span>&nbsp;</span>
                        </>
                      ) : (
                        <>
                          <Button type="submit" className="mb-2" variant="info">
                            수정하기
                          </Button>
                          <span>&nbsp;</span>
                          <Button type="submit" className="mb-2 btn-danger">
                            삭제하기
                          </Button>
                        </>
                      )}
                    </Col>
                  </Row>
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

export default Teammate;
