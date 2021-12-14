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
import { useRef, useContext, useEffect } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { ReactComponent as PicSignIn } from "../../imgs/pic_signIn.svg";

function SignIn() {
  const userId = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const isUser = () => {
      user ? navigate("/") : navigate("/signIn");
    };
    isUser();
  }, [user]);

  const submit_form = (e) => {
    e.preventDefault();
    const userInput = {
      userId: userId.current.value,
      password: password.current.value,
    };
    loginCall(userInput, dispatch);
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
                  <Row className="signin_wrapper p-4">
                    <Form className="p-5" onSubmit={submit_form}>
                      <div
                        className="signin_title mb-5"
                        style={{ color: "#eee8a9" }}
                      >
                        로그인
                      </div>
                      <FloatingLabel label="아이디" className="mb-5">
                        <Form.Control
                          type="text"
                          placeholder="name@example.com"
                          ref={userId}
                        />
                      </FloatingLabel>
                      <FloatingLabel label="비밀번호" className="mb-5">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          ref={password}
                        />
                      </FloatingLabel>
                      <div className="d-grid mb-5">
                        <Button
                          id="signin_button"
                          type="submit"
                          className="mb-2"
                          size="lg"
                          disabled={isFetching}
                        >
                          로그인
                        </Button>
                      </div>
                      <Row className="signin_additional">
                        <Col>
                          <div>아직 회원이 아니신가요?</div>
                        </Col>
                        <Col>
                          <Link to="/signUp">회원가입 바로가기</Link>
                        </Col>
                      </Row>
                    </Form>
                  </Row>
                </div>
                <PicSignIn style={{ width: "60%" }} />
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

export default SignIn;
