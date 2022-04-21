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

export function validateAuth(data) {
  const { email, password } = data;

  const promise = api.get("/validateAuth", config(data));
  return promise;
}

export function insertTerms(termName, token) {
  const promise = api.post("/terms", { name: termName }, config(token));
  return promise;
}

export function getTerms(token) {
  const promise = api.get("/terms", config(token));
  return promise;
}
