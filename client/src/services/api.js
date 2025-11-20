import axios from "axios";

const API = axios.create({
  baseURL: "https://retro-bros-backend.vercel.app/api", // backend en producción
});

export default API;
