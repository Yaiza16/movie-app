import axios from 'axios';
import baseRequest from './axiosBase';

const API_KEY = process.env.REACT_APP_API_KEY;

const axiosMainData = async (id, type) => {
  const res = await axios.get(
    `${baseRequest}/${type}/${id}?api_key=${API_KEY}&language=en-US`
  );

  const { data } = res;
  return data;
};

export default axiosMainData;
