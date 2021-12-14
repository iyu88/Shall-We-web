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
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        const res = await axios.post(`${SHALLWE_URL}/api/auth/signUp`, user);
        window.alert(res.data);
        navigate("/signIn");
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
            <Row className="p-5">
              <Col className="my-5 d-flex justify-content-center align-items-center">
                <div className="mx-2 p-3 d-flex flex-column justify-content-center align-items-center">
                  <Row className="signup_wrapper p-4">
                    <Form className="p-5" onSubmit={submit_form}>
                      <div
                        className="signup_title mb-3"
                        style={{ color: "#eee8a9" }}
                      >
                        회원가입
                      </div>
                      <FloatingLabel label="이름" className="mb-4">
                        <Form.Control type="text" ref={username} />
                      </FloatingLabel>
                      <FloatingLabel label="아이디" className="mb-4">
                        <Form.Control type="text" ref={userId} />
                      </FloatingLabel>
                      <FloatingLabel label="비밀번호" className="mb-4">
                        <Form.Control type="password" ref={password} />
                      </FloatingLabel>
                      <FloatingLabel label="비밀번호 확인" className="mb-4">
                        <Form.Control type="password" ref={passwordCheck} />
                      </FloatingLabel>
                      <div className="d-grid">
                        <Button type="submit" className="mb-4" size="lg">
                          회원가입
                        </Button>
                      </div>
                    </Form>
                  </Row>
                </div>
                <PicSignUp style={{ width: "60%" }} />
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
