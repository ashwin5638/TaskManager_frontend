import axios from "axios";

const api = axios.create({
  baseURL: "https://taskmanager-backend1-46y3.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  
  console.log("🔍 DEBUG - Token from localStorage:", token);
  console.log("🔍 DEBUG - Request URL:", config.url);
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log("✅ Authorization header added:", config.headers.Authorization);
  } else {
    console.log("❌ NO TOKEN FOUND IN LOCALSTORAGE!");
  }

  return config;
});

export default api;