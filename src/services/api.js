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
  const promise = api.post(`/login`, { email, password });
  return promise;
}

export function validateAuth(data) {
  const promise = api.get("/validateAuth", config(data));
  return promise;
}

export function insertTest(data, token) {
  const promise = api.post("/tests", data, config(token));
  return promise;
}

export function getTerms(token) {
  const promise = api.get("/terms", config(token));
  return promise;
}

export function getTests(token) {
  const promise = api.get("/tests", config(token));
  return promise;
}

export function getTeachers(token) {
  const promise = api.get("/teachers", config(token));
  return promise;
}

export function GithubCallback(code, access_token) {
  const promise = api.get(
    `/github/callback?code=${code}&access_token=${access_token}`
  );
  return promise;
}

export function GithubCallbackSuccess(access_token) {
  const promise = api.get(`/success?access_token=${access_token}`);
  return promise;
}

export async function LoginWithGithub(email) {
  const promise = api.post("/login/github", { email });
  return promise;
}

export async function searchDisciplines(name, token) {
  const promise = api.get(`/disciplines/${name}`, config(token));
  return promise;
}

export async function searchTeachers(name, token) {
  const promise = api.get(`/teachers/${name}`, config(token));
  return promise;
}
