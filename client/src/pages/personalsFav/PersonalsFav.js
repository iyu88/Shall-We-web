import "./PersonalsFav.css";
import { Container, Row, Col } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import ContestCard from "../../components/contest_card/ContestCard";
import TeammateCard from "../../components/teammate_card/TeammateCard";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

function PersonalsFav() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";

  const { user } = useContext(AuthContext);

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

  const [myContest, setMyContest] = useState([]);
  const [myTeammate, setMyTeammate] = useState([]);
  const params_id = useParams().id;

  useEffect(() => {
    const fetchMyContest = async () => {
      try {
        const res = await axios.get(
          `${SHALLWE_URL}/api/account/contest/${params_id}`
        );
        setMyContest(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMyContest();
  }, []);

  useEffect(() => {
    const fetchMyTeammate = async () => {
      try {
        const res = await axios.get(
          `${SHALLWE_URL}/api/account/teammate/${params_id}`
        );
        setMyTeammate(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMyTeammate();
  }, []);

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={personals_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Container className="p-5">
              <Row className="mb-3 p-4" id="personalFav_wrapper">
                <Col id="personalFav_inner">
                  <div className="p-5">
                    <Row>
                      <Row>
                        <div
                          className="fs-2 fw-bold mb-3"
                          style={{ color: "#eee8a9" }}
                        >
                          즐겨찾기한 공모전
                        </div>
                      </Row>
                      <hr />
                      <Row>
                        {myContest ? (
                          <>
                            {myContest.map((c) => {
                              return (
                                <Link
                                  to={`/contests/${c[0]._id}`}
                                  key={`${c[0]._id}`}
                                >
                                  <ContestCard contest={c[0]}></ContestCard>
                                </Link>
                              );
                            })}
                          </>
                        ) : (
                          <div> 아직 즐겨찾기가 없습니다.</div>
                        )}
                      </Row>
                      <hr />
                      <Row>
                        <div
                          className="fs-2 fw-bold mb-3"
                          style={{ color: "#eee8a9" }}
                        >
                          즐겨찾기한 팀원
                        </div>
                      </Row>
                      <hr />
                      <Row>
                        {myTeammate ? (
                          <>
                            {myTeammate.map((t) => {
                              return (
                                <Link
                                  to={`/teammates/${t[0]._id}`}
                                  key={`${t[0]._id}`}
                                >
                                  <TeammateCard teammate={t[0]}></TeammateCard>
                                </Link>
                              );
                            })}
                          </>
                        ) : (
                          <div> 아직 즐겨찾기가 없습니다.</div>
                        )}
                      </Row>
                      <hr />
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

export default PersonalsFav;
