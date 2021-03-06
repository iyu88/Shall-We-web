import { Row, Col, Container } from "react-bootstrap";
import "./Contests.css";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";
import Filter from "../../components/filter/Filter";
import ContestCard from "../../components/contest_card/ContestCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Contests() {
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

  const [allContest, setAllContest] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/contest/`);
        setAllContest(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContests();
  }, []);

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={contests_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Filter></Filter>
              <Row className="p-4">
                <div className="p-2 contests_card_wrapper">
                  {allContest.map((c) => {
                    return (
                      <Link to={`/contests/${c._id}`} key={`${c._id}`}>
                        <ContestCard contest={c}></ContestCard>
                      </Link>
                    );
                  })}
                </div>
              </Row>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Contests;
