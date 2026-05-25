import axios from "@/api/axiosInstance";

export const getFavorites = () =>
  axios.get("/favorites");

export const addToFavorites = (apartmentId: number) =>
  axios.post(`/favorites/${apartmentId}`);

export const removeFromFavorites = (apartmentId: number) =>
  axios.delete(`/favorites/${apartmentId}`);

export const compareFavorites = () =>
  axios.post("/favorites/compare");