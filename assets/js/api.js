async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/rafitsdev/js-developer-portfolio/dinamic-data/assets/data/profile.json';
  const fetching = await fetch(url);
  return await fetching.json()  
}