import { getCommentsByReviewId } from "../api";
import useApi from "../hooks/useApi";
import CommentCard from "./CommentCard";

function CommentList({ reviewId }) {
  const [isLoading, comments] = useApi({
    apiCall: getCommentsByReviewId,
    argument: reviewId,
  });
  return (
    <div>
      <h4>Comments</h4>
      {isLoading
        ? "Loading comments..."
        : comments.map((comment) => (
            <CommentCard key={comment.comment_id} comment={comment} />
          ))}
    </div>
  );
}
export default CommentList;
