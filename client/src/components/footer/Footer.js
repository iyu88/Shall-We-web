import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-3" id="footer_wrapper">
          <div className="col-2"></div>
          <div className="col footer_link p-2">
            <div className="footer_title fs-4">공모전</div>
            <Link to="/contests">공모전 목록</Link>
            <Link to="/contests/register">공모전 등록</Link>
          </div>
          <div className="col footer_link p-2">
            <div className="footer_title fs-4">팀원 찾기</div>
            <Link to="/teammates">팀원 목록</Link>
            <Link to="/teammates/register">내 정보 등록</Link>
          </div>
          <div className="col footer_link p-2">
            <div className="footer_title fs-4">후기 게시판</div>
            <Link to="/reviews">후기 목록</Link>
            <Link to="/reviews/register">후기 작성</Link>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row my-bg-point">
          <div className="col-2"></div>
          <div className="col-8 p-3">
            <div className="row fs-5 mb-1">제작자 : 이현빈</div>
            <div className="row fs-5 mb-1">
              광운대학교 정보융합학부 2017204075 학부생
            </div>
            <div className="row fs-5 mb-1">이메일 : iyu88@naver.com</div>
            <div className="row">
              <div className="col text-end my-bg-point fs-5">2021 KW-IC</div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
