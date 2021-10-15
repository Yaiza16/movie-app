const getPersonMainData = (data) => ({
  name: data.name,
  biography: data.biography,
  birthday: data.birthday,
  deathday: data.deathday,
  place_of_birth: data.place_of_birth,
  profile_path: data.profile_path,
});

export default getPersonMainData;
