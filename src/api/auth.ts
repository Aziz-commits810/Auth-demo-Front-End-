import api from "./axios";

export const register = async (
  email: string,
  name: string,
  password: string
) => {
  const response = await api.post("/auth/register", { email, name, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/users/me");
  return response.data;
};
