import axios from "axios";

const api = axios.create({
  baseURL: "https://gymmern-backend-1.onrender.com", // your Render backend URL
});

export default api;
