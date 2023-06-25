import axios from "axios";

export const publicApi = axios.create({
  baseURL: "https://urchin-app-l7pyx.ondigitalocean.app",
  headers: {
    "Content-type": "application/json",
  },
});

export const getRandomCharacter = async () => {
  return publicApi.get("/characters/random");
};

export const searchCharacters = async (search) => {
  return publicApi.get(`/characters?amount=600&search=${search}`);
};

export const getCharacter = async (id) => {
  return publicApi.get(`/characters/${id}`);
};

export const getCharacters = async (page) => {
  return publicApi.get(`/characters?amount=40&page=${page}`);
};
