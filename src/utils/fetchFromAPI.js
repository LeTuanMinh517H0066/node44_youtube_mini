import axios from 'axios';

export const BASE_URL = 'http://localhost:8085';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    // 'token': localStorage.getItem("LOGIN_USER")
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

