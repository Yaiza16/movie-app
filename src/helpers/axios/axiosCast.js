import axios from 'axios';
import baseRequest from './axiosBase';

const API_KEY = process.env.REACT_APP_API_KEY;

const axiosCast = async (id, type) => {
  const res = await axios.get(
    `${baseRequest.baseApiCall}/${type}/${id}/credits?api_key=${API_KEY}`
  );

  const { data } = res;
  return data;
};

export default axiosCast;
