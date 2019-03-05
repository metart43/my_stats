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
     document.querySelector('#user-name').appendChild(userInstance.render())})
}

// Renders the user from the JSON




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

<<<<<<< HEAD
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

function functionName() {

}
=======
function heroKDA(user) {
  
}
>>>>>>> user-page
