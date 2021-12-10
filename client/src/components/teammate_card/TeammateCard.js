import "./TeammateCard.css";

function TeammateCard() {
  return (
    <>
      <div className="teammate_card_wrapper">
        <div className="teammate_card_left">
          <img
            className="teammate_card_img"
            src="https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDhfMjM5/MDAxNTk5NTc0NTgzODIx._wtN9VGBsSnc7Z5CwFZCqJX51dFqNT1B74Kvzq-jqYMg.7irYFwtWol4Lk1IkffrJ-9VGTDP9P9uOno0SnrS2Hpgg.JPEG.dltpdud03/1599574582877.jpg?type=w800"
            alt="프로필 사진"
          />
        </div>
        <div className="teammate_card_right">
          <div className="teammate_card_title">이름 / 아이디</div>
          <div className="teammate_card_info1">직업</div>
          <div className="teammate_card_info2">포지션</div>
          <div className="teammate_card_info3">대표 기술 역량</div>
          <div className="teammate_card_info4">조회수</div>
        </div>
      </div>
    </>
  );
}

export default TeammateCard;
