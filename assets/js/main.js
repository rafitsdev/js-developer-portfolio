function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name


  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.innerText = profileData.phone
  phone.href = `tel:${profileData.phone}`
  
  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `email:${profileData.email}`
}

function updateIndividualSkills(profileData) {
  const individualSkills = document.getElementById('profile.skills.softSkills.individualSkills')

  individualSkills.innerHTML = profileData.skills.softSkills.individualSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateTeamworkSkills(profileData) {
  const teamworkSkills = document.getElementById('profile.skills.softSkills.teamworkSkills')

  teamworkSkills.innerHTML = profileData.skills.softSkills.teamworkSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById('profile.skills.hardSkills')

  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateHardSkills(profileData)
  updateIndividualSkills(profileData)
  updateTeamworkSkills(profileData)
})()