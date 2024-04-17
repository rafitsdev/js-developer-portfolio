async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/rafitsdev/js-developer-portfolio/main/assets/data/profile.json';
  const fetching = await fetch(url);
  return await fetching.json()
}