import axios from 'axios';
import baseRequest from './axiosBase';

const API_KEY = process.env.REACT_APP_API_KEY;

const axiosVideo = async (id, type) => {
  const res = await axios.get(
    `${baseRequest}/${type}/${id}/videos?api_key=${API_KEY}`
  );

  const { data } = res;
  return data;
};

export default axiosVideo;
