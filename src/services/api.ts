import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-blog-vibragua.herokuapp.com",
});

export default instance;
