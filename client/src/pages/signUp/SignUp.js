import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";
import "./SignUp.css";
import MyNav from "../../components/nav/MyNav";
import Footer from "../../components/footer/Footer";
import { useRef } from "react";
// import { useHistory } from "react-router";
import axios from "axios";
import { ReactComponent as PicSignUp } from "../../imgs/pic_signUp.svg";

function SignUp() {
  const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http://localhost:5055";
  const username = useRef();
  const userId = useRef();
  const password = useRef();
  const passwordCheck = useRef();

  const submit_form = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordCheck.current.value) {
      passwordCheck.current.setCustomValidity(
        "비밀번호가 올바르지 않습니다. 다시 확인해주세요."
      );
    } else {
      const user = {
        username: username.current.value,
        userId: userId.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`${SHALLWE_URL}/api/auth/signUp`, user);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <MyNav></MyNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Row>
              <Col>
                <Row className="signup_wrapper p-4">
                  <Form>
                    <div className="signup_title mb-3">회원가입</div>
                    <FloatingLabel label="이름" className="mb-4">
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        ref={username}
                      />
                    </FloatingLabel>
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
                    <FloatingLabel label="비밀번호 확인" className="mb-4">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        ref={passwordCheck}
                      />
                    </FloatingLabel>
                    <div className="d-grid">
                      <Button
                        type="submit"
                        className="mb-4"
                        size="lg"
                        onClick={submit_form}
                      >
                        회원가입
                      </Button>
                    </div>
                  </Form>
                </Row>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <PicSignUp style={{ width: "100%", height: "100%" }} />
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

export default SignUp;
