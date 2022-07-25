import axios from "axios";

const URL = "https://nr-house-of-games-api.herokuapp.com/api";

export const getReviews = () => {
  return axios.get(`${URL}/reviews`).then((response) => response.data.reviews);
};
