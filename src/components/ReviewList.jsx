import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../api";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const { categorySlug } = useParams();

  useEffect(() => {
    getReviews().then((reviews) => setReviews(reviews));
  }, []);

  return (
    <div>
      {reviews.reduce((filteredReviews, review) => {
        if (!categorySlug || categorySlug === review.category) {
          filteredReviews.push(
            <ReviewCard key={review.review_id} review={review} />
          );
        }
        return filteredReviews;
      }, [])}
    </div>
  );
}

export default ReviewList;
