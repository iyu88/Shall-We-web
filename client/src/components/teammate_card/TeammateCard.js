import "./TeammateCard.css";

function TeammateCard({ teammate }) {
  const IMGS = "https://shall-we-web.herokuapp.com/images/";
  // const IMGS = "http://localhost:5055/images/";
  return (
    <>
      <div className="teammate_card_wrapper">
        <div className="teammate_card_left">
          <img
            className="teammate_card_img"
            alt="프로필 사진"
            src={IMGS + teammate?.profile_pic}
          />
        </div>
        <div className="teammate_card_right">
          <div>
            <span className="fw-bold">닉네임 : </span>
            <span className="teammate_card_title">{teammate?.nickname}</span>
          </div>
          <div>
            <span className="fw-bold">포지션 : </span>
            <span className="teammate_card_info2">{teammate?.position}</span>
          </div>
          <div>
            <span className="fw-bold">기술 역량 : </span>
            <span className="teammate_card_info3">{teammate?.technical}</span>
          </div>
          <div>
            <span className="fw-bold">조회수 : </span>
            <span className="teammate_card_info4">
              {teammate?.teammate_view?.length}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeammateCard;
