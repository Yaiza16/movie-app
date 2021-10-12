const getVideo = (data) => {
  if (data?.results?.lenght >= 0) {
    return data.results.filter((video) => video.type === 'Trailer');
  }
  return null;
};

export default getVideo;
