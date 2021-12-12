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
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { ReactComponent as PicSignIn } from "../../imgs/pic_signIn.svg";

function SignIn() {
  // const SHALLWE_URL = "https://shall-we-web.herokuapp.com";
  // const SHALLWE_URL = "http//localhost:5055";
  const userId = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const submit_form = (e) => {
    // async
    e.preventDefault();
    const userInput = {
      userId: userId.current.value,
      password: password.current.value,
    };

    loginCall(userInput, dispatch);
    navigate("/");

    // try {
    //   const res = await axios.post(`${SHALLWE_URL}/api/auth/signIn`, user);
    //   navigate("/");
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
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
                <Row className="signin_wrapper p-4">
                  <Form onSubmit={submit_form}>
                    <div className="signin_title mb-3">로그인</div>
                    <FloatingLabel label="아이디" className="mb-4">
                      <Form.Control
                        type="text"
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
                      <Button type="submit" className="mb-4" size="lg">
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
              <Col className="d-flex justify-content-center align-items-center">
                <PicSignIn style={{ width: "100%", height: "100%" }} />
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
