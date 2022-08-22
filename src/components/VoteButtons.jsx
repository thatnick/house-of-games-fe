import { useContext, useState } from "react";
import { getVotesByReviewId, postVotesByReviewId } from "../api";
import { ErrorContext } from "../contexts/ErrorContext";
import useApi from "../hooks/useApi";

function VoteButtons({ review_id, username, votes }) {
  const [localVotes, setLocalVotes] = useState(votes);
  const []
  const { setError } = useContext(ErrorContext);

  const [votedIsLoading, voted] = useApi({
    apiCall: getVotesByReviewId,
    args: [username, review_id, localVotes],
  });

  const incrementVotes = (newVotes) => {
    setLocalVotes((currentVotes) => +currentVotes + +newVotes);
    postVotesByReviewId(username, review_id, newVotes).catch(() => {
      setLocalVotes((currentVotes) => currentVotes - newVotes);
      setError("Your vote couldn't be saved. Please try again later.");
    });
  };

  return (
    <div>
      <p>{localVotes} votes</p>
      {votedIsLoading ? (
        "Loading..."
      ) : (
        <button onClick={() => incrementVotes(voted ? -1 : 1)}>👍</button>
      )}
    </div>
  );
}

export default VoteButtons;
