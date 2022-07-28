import { useContext, useState } from "react";
import { patchReviewVotesById } from "../api";
import { ErrorContext } from "../contexts/ErrorContext";

function VoteButtons({ review_id, votes }) {
  const [localVotes, setLocalVotes] = useState(votes);
  const { setError } = useContext(ErrorContext);

  const incrementVotes = (newVotes) => {
    setLocalVotes((currentVotes) => currentVotes + newVotes);
    patchReviewVotesById(review_id, newVotes).catch(() => {
      setLocalVotes((currentVotes) => currentVotes - newVotes);
      setError("Your vote couldn't be saved. Please try again later.");
    });
  };

  return (
    <div>
      <p>{localVotes} votes</p>
      <button onClick={() => incrementVotes(1)}>👍</button>
      <button onClick={() => incrementVotes(-1)}>👎</button>
    </div>
  );
}

export default VoteButtons;
