import { Link } from "react-router-dom";

function ReviewCard({ review, expanded = false }) {
  return (
    <div>
      <p>Votes: {review.votes}</p>
      <p>Category: {review.category}</p>
      <p>
        Posted {new Date(review.created_at).toLocaleDateString("en-gb")} by{" "}
        {review.owner}
      </p>
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
