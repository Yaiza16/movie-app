const getVideo = (data) => {
  if (data?.results?.length >= 0) {
    return data.results.filter((video) => video.type === 'Trailer');
  }
  return null;
};

export default getVideo;
