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
          <div className="teammate_card_title">{teammate?.nickname}</div>
          <div className="teammate_card_info1">{teammate?.job}</div>
          <div className="teammate_card_info2">{teammate?.position}</div>
          <div className="teammate_card_info3">{teammate?.technical}</div>
          <div className="teammate_card_info4">
            {teammate?.teammate_view.length}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeammateCard;
