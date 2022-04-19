import axios from "axios";

export const breakingbadApi = axios.create({
  baseURL: "https://www.breakingbadapi.com/api/",
  // timeout: 2500,
  headers: {
    // "X-Custom-Header": "foobar"
  },
});
