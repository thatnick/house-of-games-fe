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

export const postVotesByReviewId = (username, review_id, inc_votes) => {
  return axios
    .post(`${URL}/reviews/${review_id}/votes`, {
      username,
      review_id,
      inc_votes,
    })
    .then((response) => response.data.review.vote_count);
};

export const getVotesByReviewId = (username, review_id) => {
  return axios
    .get(`${URL}/reviews/${review_id}/votes/${username}`)
    .then((response) => {
      return response.data;
    });
};
