import axios from "axios";

export const axiosCCQ = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});

export const getConfig = () => {
  const token = JSON.parse(localStorage.getItem("userInfo"))?.token;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
