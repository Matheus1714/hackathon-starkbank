import axios from "axios";

const api = axios.create({
  baseURL: "https://apistarkcoin.julio-jj3.repl.co",
  withCredentials: false,
});

export default api;
