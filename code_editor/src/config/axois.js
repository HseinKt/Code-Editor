import axios from "axios";

const BASE_URL = "";

const postApi = async (url, data) => {
  const result = await axios.post(BASE_URL + url, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Credentials": true,
      Authorization: "Bearer  " + localStorage.getItem("access_token"),
    },
  });
  return result;
};

const getApi = async (url) => {
  const result = await axios.get(BASE_URL + url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Credentials": true,
      Authorization: "Bearer  " + localStorage.getItem("access_token"),
    },
  });
  return result;
};

export const getUsers = async () => {
  return await getApi("/get_users");
};
