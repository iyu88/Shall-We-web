import { Row, Col, Container, Image, Button } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
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

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={contests_subMenu}></SubNav>
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
                    style={{ width: "32rem" }}
                    src="https://www.kogl.or.kr/contents_images2//20200907/1599437999867.png"
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-between">
                  <Row className="mb-3">
                    <label className="mb-2">제목</label>
                    <div>{contest?.article_title}</div>
                  </Row>
                  <Row className="mb-3">
                    <label className="mb-2">공모전 제목</label>
                    <div>{contest?.contest_title}</div>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <label className="mb-2">종료날짜</label>
                      <div>{contest?.due_date}</div>
                    </Col>
                    <Col>
                      <label className="mb-2">필요인원 수</label>
                      <div>{contest?.num_of_people}</div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <label className="mb-2">내용</label>
                    <div>{contest?.contest_content}</div>
                  </Row>
                  <Row className="mb-3">
                    <label className="mb-2">요구사항</label>
                    <div>{contest?.requirements}</div>
                  </Row>
                  <Row>
                    <Col className="d-flex justify-content-end">
                      {contest?.user_id !== user?._id ? (
                        <>
                          <Button type="submit" className="mb-2">
                            참여 요청하기
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
              <Row>
                <Col className="d-flex flex-row-reverse">
                  <Row>
                    <label className="mb-2">작성자</label>
                    <div>{contest?.userId}</div>
                  </Row>
                  <Row>
                    <label className="mb-2">조회수</label>
                    <div>{contest?.contest_view?.length}</div>
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

export default Contest;
