import { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";
import useApi from "../hooks/useApi";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const { categorySlug } = useParams();

  const isLoading = useApi({
    apiCall: getReviews,
    argument: categorySlug,
    responseSetter: setReviews,
  });

  return (
    <div>
      {isLoading
        ? "Loading reviews..."
        : reviews.map((review) => (
            <ReviewCard key={review.review_id} review={review} />
          ))}
    </div>
  );
}

export default ReviewList;
