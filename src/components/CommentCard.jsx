function CommentCard({ comment }) {
  return (
    <div>
      <p>
        Posted {new Date(comment.created_at).toLocaleDateString("en-gb")} by{" "}
        {comment.author}
      </p>
      <p>{comment.body}</p>
      <hr />
    </div>
  );
}
export default CommentCard;
