import "./Reviews.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import SubNav from "../../components/subNav/SubNav";
import Filter from "../../components/filter/Filter";
import ReviewItem from "../../components/review_item/ReviewItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function Reviews() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
  const reviews_subMenu = [
    {
      title: "후기 목록",
      link: "/reviews",
    },
    {
      title: "후기 작성",
      link: "/reviews/register",
    },
  ];

  const reviews_filter = [
    {
      title: "전체 리뷰",
      link: "/reviews",
    },
    {
      title: "공모전 리뷰",
      link: "/reviews?cat=contest",
    },
    {
      title: "팀원 리뷰",
      link: "/reviews?cat=teammate",
    },
  ];

  const [allReview, setAllReview] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${SHALLWE_URL}/api/review/${search}`);
        setAllReview(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviews();
  }, [search]);

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={reviews_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Filter filter={reviews_filter}></Filter>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex" style={{ marginLeft: "1.6em" }}>
                  <div className="my-auto fw-bold">종류</div>
                  <div className="ms-3 my-auto">
                    <div className="fw-bold" style={{ marginLeft: "24em" }}>
                      제목
                    </div>
                  </div>
                </div>
                <div className="d-flex fw-bold">
                  <div style={{ width: "8em", marginRight: "2em" }}>작성자</div>
                  <div style={{ marginRight: "1.3em" }} className="fw-bold">
                    조회수
                  </div>
                </div>
              </ListGroup.Item>
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
