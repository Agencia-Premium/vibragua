import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.com.br",
});

export default instance;
