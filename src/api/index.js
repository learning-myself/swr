import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://5cc2bf77968a0b001496d996.mockapi.io/api/",
});

export default mainApi;
