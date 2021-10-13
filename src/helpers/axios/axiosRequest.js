import TmdbApi from './axiosBase';

const axiosRequest = async (id, type, variable = null) => {
  const res = await TmdbApi.get(
    variable ? `/${type}/${id}/${variable}` : `/${type}/${id}`
  );
  const { data } = res;
  return data;
};

export default axiosRequest;
