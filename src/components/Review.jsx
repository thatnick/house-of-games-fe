import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviewById } from "../api";
import useApi from "../hooks/useApi";
import CommentList from "./CommentList";

function Review() {
  const { reviewId } = useParams();
  const [isLoading, review] = useApi({
    apiCall: getReviewById,
    argument: reviewId,
  });

  return (
    <div>
      {isLoading ? (
        "Loading review..."
      ) : (
        <ReviewCard review={review} expanded={true} />
      )}
      <CommentList reviewId={reviewId} />
    </div>
  );
}

export default Review;
