export const API_BASE_URL = 
  process.env.NODE_ENV === "production" 
    ? "https://unisale-backend.vercel.app" 
    : "http://127.0.0.1:5000";
