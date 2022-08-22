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

export const getCommentsByReviewId = (id) => {
  return axios
    .get(`${URL}/reviews/${id}/comments`)
    .then((response) => response.data.comments);
};
