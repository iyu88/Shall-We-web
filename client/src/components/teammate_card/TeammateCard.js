import "./TeammateCard.css";

function TeammateCard({ teammate }) {
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
