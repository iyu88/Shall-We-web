import { Row, Col, Container } from "react-bootstrap";
import "./Teammates.css";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import Filter from "../../components/filter/Filter";
import TeammateCard from "../../components/teammate_card/TeammateCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Teammates() {
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

  const [allTeammate, setAllTeammate] = useState([]);

  useEffect(() => {
    const fetchTeammates = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/teammate/`);
        setAllTeammate(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeammates();
  }, []);

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={teammates_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Filter></Filter>
              <div className="p-2 teammates_card_wrapper">
                {allTeammate.map((t) => {
                  return (
                    <Link to={`/teammates/${t._id}`} key={`${t._id}`}>
                      <TeammateCard teammate={t}></TeammateCard>
                    </Link>
                  );
                })}
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Teammates;
