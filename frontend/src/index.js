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
    .then(userData => renderUser(userData))
}

// Renders the user from the JSON
function renderUser(userData) {
  let userDiv = document.querySelector('#user-info')

  let userName = document.querySelector('#user-name')
  userName.innerText = userData.name

  let userMatches = document.querySelector('#user-matches')
  let matchList = document.createElement('ul')
  userData.matches.forEach(match => renderMatch(match, matchList))

  let userHeroes = document.querySelector('#user-heroes')
  let heroList = document.createElement('ul')
  userData.matches.forEach(match => renderHero(match, heroList))
  
  userMatches.appendChild(matchList)

  // debugger
}

// Renders data from each match
function renderMatch(match, matchList) {
  let listItem = document.createElement('li')

  listItem.innerHTML = `
    <div class="match-card">
      <div class="hero-name">
        ${match.hero.name}
      </div>
      <div class="kda">
        K/D/A: ${match.kills}/${match.deaths}/${match.assists}
      </div>
      <div class="result">
        ${match.result? "Win" : "Loss"}
      </div>
    </div>
  `

  matchList.appendChild(listItem)
}

function renderHero(match, heroList) {
  // let listItem = document.createElement('li')
  // listItem.innerHTML = `
  //   <div class="hero-card">
  //     <div class="hero-name">
  //       ${match.hero.name}
  //     </div>
  //     <div class="kda">
  //       K/D/A: ${match.kills}/${match.deaths}/${match.assists}
  //     </div>
  //   </div>
  // `

  // heroList.appendChild(listItem)
}