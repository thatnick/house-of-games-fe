import axios from "axios";

const URL = "https://nr-house-of-games-api.herokuapp.com/api";

export const getReviews = (category) => {
  return axios
    .get(`${URL}/reviews`, {
      params: {
        category,
      },
    })
    .then((response) => response.data.reviews);
};

export const getReviewById = (id) => {
  return axios
    .get(`${URL}/reviews/${id}`)
    .then((response) => response.data.review);
};

export const getCategories = () => {
  return axios
    .get(`${URL}/categories`)
    .then((response) => response.data.categories);
};

export const patchReviewVotesById = (review_id, newVotes) => {
  return axios
    .patch(`${URL}/reviews/${review_id}`, { inc_votes: newVotes })
    .then((response) => {
      return response.data.review.votes;
    });
};
