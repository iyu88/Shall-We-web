import { Row, Col, Container } from "react-bootstrap";
import "./Teammates.css";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import Filter from "../../components/filter/Filter";
import TeammateCard from "../../components/teammate_card/TeammateCard";

function Teammates() {
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

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={teammates_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Filter></Filter>
              <div className="p-2 teammates_card_wrapper">
                <TeammateCard></TeammateCard>
                <TeammateCard></TeammateCard>
                <TeammateCard></TeammateCard>
                <TeammateCard></TeammateCard>
                <TeammateCard></TeammateCard>
              </div>
            </Row>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Teammates;
