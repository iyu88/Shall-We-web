import { ListGroup, Badge } from "react-bootstrap";

function ReviewItem({ review }) {
  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex">
          <h5 className="my-auto">
            {review?.review_type === "공모전" ? (
              <Badge variant="primary" bg="secondary" style={{ width: "5em" }}>
                공모전
              </Badge>
            ) : (
              <Badge variant="primary" bg="info" style={{ width: "5em" }}>
                팀원
              </Badge>
            )}
          </h5>
          <div className="ms-3 my-auto">
            <div className="fw-bold">{review?.review_title}</div>
          </div>
        </div>
        <div className="d-flex">
          <div style={{ width: "8em", marginRight: "2em" }}>
            {review?.userId}
          </div>
          <Badge
            variant="primary"
            pill
            className="my-auto"
            style={{ width: "5em" }}
          >
            {review?.review_view?.length}
          </Badge>
        </div>
      </ListGroup.Item>
    </>
  );
}

export default ReviewItem;
