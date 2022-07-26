function ReviewCard({ review }) {
  return (
    <div>
      <p>Votes: {review.votes}</p>
      <p>Category: {review.category}</p>
      <p>Posted: {new Date(review.created_at).toLocaleDateString("en-gb")}</p>
      <h2>{review.title}</h2>
      <img
        src={review.review_img_url}
        alt={review.title}
        style={{ height: "100px" }} // TODO move to external stylesheet
      />
      <p>{review.comments}</p>
      <hr />
    </div>
  );
}

export default ReviewCard;
