import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export function register(data) {
  const { email, password } = data;

  const promise = api.post("/register", { email, password });
  return promise;
}

export function login(data) {
  const { email, password } = data;

  const promise = api.post("/login", { email, password });
  return promise;
}
