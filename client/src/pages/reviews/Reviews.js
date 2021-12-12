import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./Reviews.css";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import "./Reviews.css";
import Filter from "../../components/filter/Filter";
import ReviewItem from "../../components/review_item/ReviewItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Reviews() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
  const reviews_subMenu = [
    {
      title: "후기 게시판",
      link: "/reviews",
    },
    {
      title: "후기 작성",
      link: "/reviews/register",
    },
  ];

  const [allReview, setAllReview] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/review/`);
        setAllReview(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={reviews_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Filter></Filter>
              <ListGroup as="ul" className="reviews_item_wrapper">
                {allReview.map((r) => {
                  return (
                    <Link to={`/reviews/${r._id}`} key={`${r._id}`}>
                      <ReviewItem review={r}></ReviewItem>
                    </Link>
                  );
                })}
              </ListGroup>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Reviews;
