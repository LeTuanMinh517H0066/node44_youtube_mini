import axios from 'axios';

export const BASE_URL = 'http://localhost:8085';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    token: localStorage.getItem("LOGIN_USER")
  },
};



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export const getListVideo = async() => {
  const { data } = await axios.get(`${BASE_URL}/videos/get-videos`, options);

  return data;
}

export const getType = async () => {
  const { data } = await axios.get(`${BASE_URL}/videos/get-types`, options);

  return data;
}

export const getListVideoType = async (type_id) => {
  const {data} = await axios.get(`${BASE_URL}/videos/video-type/${type_id}`, options);

  return data;
}

export const registerApi = async (payload) => {
  const {data} = await axios.post(`${BASE_URL}/auth/register`, payload);

  return data;
}

export const loginApi = async (payload) => {
  const {data} = await axios.post(`${BASE_URL}/auth/login`, payload);
  return data;
}

export const loginFacebookApi = async(newUser) => {
  const {data} = await axios.post(`${BASE_URL}/auth/login-face`, newUser);
  return data;
}
