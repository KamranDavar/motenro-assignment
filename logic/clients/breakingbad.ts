import axios from "axios";

export const breakingbadApi = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
  timeout: 1500,
  headers: {
    // "X-Custom-Header": "foobar"
  },
});
