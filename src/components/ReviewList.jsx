import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";
import useApi from "../hooks/useApi";

function ReviewList() {
  const { categorySlug } = useParams();

  const [isLoading, reviews] = useApi({
    apiCall: getReviews,
    argument: categorySlug,
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
