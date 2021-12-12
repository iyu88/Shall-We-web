import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import "./SignIn.css";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function SignIn() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  const userId = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const submit_form = async (e) => {
    e.preventDefault();

    const user = {
      userId: userId.current.value,
      password: password.current.value,
    };

    try {
      const res = await axios.post(`${SHALLWE_URL}/api/auth/signIn`, user);
      navigate("/");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MyNav></MyNav>
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Col>
                <Row className="signin_wrapper p-4">
                  <Form>
                    <div className="signin_title mb-3">로그인</div>
                    <FloatingLabel label="아이디" className="mb-4">
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        ref={userId}
                      />
                    </FloatingLabel>
                    <FloatingLabel label="비밀번호" className="mb-4">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        ref={password}
                      />
                    </FloatingLabel>
                    <div className="d-grid">
                      <Button
                        type="submit"
                        className="mb-4"
                        size="lg"
                        onClick={submit_form}
                      >
                        로그인
                      </Button>
                    </div>
                  </Form>
                  <Row className="signin_additional mb-4">
                    <Col>
                      <div>아직 회원이 아니신가요?</div>
                    </Col>
                    <Col>
                      <Link to="/signUp">회원가입 바로가기</Link>
                    </Col>
                  </Row>
                </Row>
              </Col>
              <Col>여기 뭔가 그림</Col>
            </Row>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default SignIn;
