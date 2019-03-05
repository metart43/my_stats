document.addEventListener('DOMContentLoaded',() =>{
  fetchUserInfo()
})

// Returns User URL
function getUserUrl() {
  return 'http://localhost:3000/users/1'
}

// Grab user from API
function fetchUserInfo() {
  fetch(getUserUrl())
    .then(resp => resp.json())
    .then(userData => {
      let userInstance = new User(userData)
      document.querySelector('#user-name').appendChild(userInstance.render())
      userData.matches.forEach(match => {
        let matchInstance = new Match(match)
        document.querySelector("#match-list").appendChild(matchInstance.render(userData))
      })
    })
}

function renderHero(match, heroList) {
  let listItem = document.createElement('li')
  listItem.innerHTML = `
    <div class="hero-card">
      <div class="hero-name">
        ${match.hero.name}
      </div>
      <div class="kda">
        K/D/A: ${match.kills}/${match.deaths}/${match.assists}
      </div>
    </div>
  `

  heroList.appendChild(listItem)
}
