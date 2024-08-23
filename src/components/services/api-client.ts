import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c9df0a92db44755a1804d5cfc552205",
  },
});
