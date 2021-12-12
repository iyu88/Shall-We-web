import "./ContestCard.css";

function ContestCard({ contest }) {
  return (
    <>
      <div className="contest_card_wrapper">
        <div className="contest_card_left">
          <img
            className="contest_card_img"
            alt="포스터 사진"
            src="https://www.kogl.or.kr/contents_images2//20200907/1599437999867.png"
          />
        </div>
        <div className="contest_card_right">
          <div className="contest_card_title">{contest?.article_title}</div>
          <div className="contest_card_info1">{contest?.due_date}</div>
          <div className="contest_card_info2">{contest?.num_of_people}</div>
          <div className="contest_card_info3">
            {contest?.contest_view.length}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContestCard;
