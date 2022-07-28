import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviewById } from "../api";
import useApi from "../hooks/useApi";

function Review() {
  const { reviewId } = useParams();
  const [isLoading, review] = useApi({
    apiCall: getReviewById,
    args: [reviewId],
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
