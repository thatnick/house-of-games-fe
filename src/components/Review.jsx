import { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviewById } from "../api";
import useApi from "../hooks/useApi";

function Review() {
  const { reviewId } = useParams();
  const [review, setReview] = useState();
  const isLoading = useApi({
    apiCall: getReviewById,
    argument: reviewId,
    responseSetter: setReview,
  });

  return (
    <div>
      {isLoading ? (
        "Loading review..."
      ) : (
        <ReviewCard review={review} expanded={true} />
      )}
    </div>
  );
}

export default Review;
