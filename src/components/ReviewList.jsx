import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => setReviews(reviews));
  }, []);
  console.log(reviews);
  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
