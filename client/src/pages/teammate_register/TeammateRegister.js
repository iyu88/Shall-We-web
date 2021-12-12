import {
  Row,
  Col,
  Container,
  Image,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import MyNav from "../../components/nav/MyNav";
import SubNav from "../../components/subNav/SubNav";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useRef, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function TeammateRegister() {
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

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [position, setPosition] = useState("개발자");

  const nickname = useRef();
  const email = useRef();
  const profile_pic = useRef();
  const job = useRef();
  const technical = useRef();
  const introduce = useRef();

  const handleChangePosition = (e) => {
    setPosition(e.target.value);
  };

  const registerNewTeammate = async (e) => {
    e.preventDefault();
    const newTeammate = {
      user_id: user._id,
      nickname: nickname.current.value,
      email: email.current.value,
      profile_pic: profile_pic.current.value,
      job: job.current.value,
      position: position,
      technical: technical.current.value,
      introduce: introduce.current.value,
    };

    let isSave = window.confirm("이대로 프로필을 등록할까요?");
    if (isSave) {
      try {
        await axios.post(`${SHALLWE_URL}/api/teammate/register`, newTeammate);
        console.log("프로필 등록 성공");
        navigate("/teammates");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const cancelNewTeammate = () => {
    let isCancel = window.confirm(
      "작성 중인 정보가 사라집니다. 프로필 등록을 취소하시겠습니까?"
    );
    if (isCancel) {
      navigate("/teammates");
    }
  };

  return (
    <>
      <MyNav></MyNav>
      <SubNav subMenu={teammates_subMenu}></SubNav>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xl={8} className="my-bg-secondary">
            <Form className="p-5" onSubmit={registerNewTeammate}>
              <Row>
                <Col className="d-flex justify-content-center">
                  <Image
                    className="mb-3"
                    alt="프로필 이미지"
                    style={{ width: "28rem" }}
                    src="https://file.mk.co.kr/meet/neds/2020/10/image_readtop_2020_1031316_16021305794383917.jpg"
                  />
                </Col>
                <Col className="d-flex flex-column justify-content-between">
                  <FloatingLabel
                    controlId="contest_title"
                    label="닉네임"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Normal text"
                      ref={nickname}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="contest_title"
                    label="이메일"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Normal text"
                      ref={email}
                    />
                  </FloatingLabel>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>프로필 사진</Form.Label>
                    <Form.Control type="file" ref={profile_pic} />
                  </Form.Group>
                  <FloatingLabel
                    controlId="contest_title"
                    label="직업"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Normal text"
                      ref={job}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="포지션"
                    className="mb-3"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={handleChangePosition}
                    >
                      <option value="개발자">개발자</option>
                      <option value="디자이너">디자이너</option>
                      <option value="기획자">기획자</option>
                      <option value="작가">작가</option>
                      <option value="일러스트레이터">일러스트레이터</option>
                    </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="contest_title"
                    label="대표 기술 역량"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Normal text"
                      ref={technical}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="자기소개"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "120px" }}
                      ref={introduce}
                    />
                  </FloatingLabel>
                  <Row>
                    <Col className="d-flex justify-content-end">
                      <Button
                        type="submit"
                        className="mb-2"
                        onClick={cancelNewTeammate}
                      >
                        취소하기
                      </Button>
                      <span>&nbsp;</span>
                      <Button type="submit" className="mb-2">
                        등록하기
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default TeammateRegister;
