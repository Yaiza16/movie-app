const getBirthday = (birthday) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const birthDay = birthDate.getDate();
  const birthMonth = birthDate.toLocaleString('en-US', { month: 'short' });
  const birthYear = birthDate.getFullYear();
  return `${birthDay} ${birthMonth} ${birthYear} (${age} aged)`;
};

const getPersonMainData = (data) => ({
  name: data.name,
  biography: data.biography,
  birthday: getBirthday(data.birthday),
  deathday: data.deathday,
  place_of_birth: data.place_of_birth,
  profile_path: data.profile_path,
});

export default getPersonMainData;
