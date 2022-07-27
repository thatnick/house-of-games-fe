import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const { categorySlug } = useParams();

  useEffect(() => {
    getReviews(categorySlug).then((reviews) => setReviews(reviews));
  }, [categorySlug]);

  return (
    <div>
      {reviews.map((review) => (
        <ReviewCard key={review.review_id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
