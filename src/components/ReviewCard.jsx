import { Link } from "react-router-dom";
import VoteButtons from "./VoteButtons";

function ReviewCard({ review, expanded = false }) {
  return (
    <div>
      <div>
        <VoteButtons review_id={review.review_id} votes={review.votes} />
      </div>
      <p>Category: {review.category}</p>
      <p>Posted: {new Date(review.created_at).toLocaleDateString("en-gb")}</p>
      <h3>
        <Link
          to={`/${review.category}/${
            review.review_id
          }/${review.title.replaceAll(" ", "-")}`}
        >
          {review.title}
        </Link>
      </h3>
      <img
        src={review.review_img_url}
        alt={review.title}
        style={{ height: "100px" }} // TODO move to external stylesheet
      />
      {expanded ? <p>{review.review_body}</p> : null}
      <p>{review.comments}</p>
      <hr />
    </div>
  );
}

export default ReviewCard;
