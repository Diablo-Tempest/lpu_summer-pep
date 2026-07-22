import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({ baseURL: API_BASE_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("geoexplorer_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Unwrap the friendly `message` field from failed responses
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (axios.isCancel(err)) return Promise.reject(err); // let callers detect aborts
    const message = err.response?.data?.message || "Something went wrong. Please try again.";
    return Promise.reject(new Error(message));
  }
);

export const authApi = {
  signup: (payload) => api.post("/auth/signup", payload).then((r) => r.data),
  login: (payload) => api.post("/auth/login", payload).then((r) => r.data),
  me: () => api.get("/auth/me").then((r) => r.data),
};

export const placesApi = {
  nearby: ({ lat, lon, category, radius, signal }) =>
    api.get("/places/nearby", { params: { lat, lon, category, radius }, signal }).then((r) => r.data),
  reverseGeocode: (lat, lon) =>
    api.get("/places/reverse-geocode", { params: { lat, lon } }).then((r) => r.data),
  search: (q) => api.get("/places/search", { params: { q } }).then((r) => r.data),
};

export const favoritesApi = {
  list: () => api.get("/favorites").then((r) => r.data),
  add: (place) => api.post("/favorites", place).then((r) => r.data),
  remove: (placeId) => api.delete(`/favorites/${encodeURIComponent(placeId)}`).then((r) => r.data),
};

export const historyApi = {
  list: () => api.get("/history").then((r) => r.data),
  clear: () => api.delete("/history").then((r) => r.data),
  removeOne: (id) => api.delete(`/history/${id}`).then((r) => r.data),
};

export default api;
