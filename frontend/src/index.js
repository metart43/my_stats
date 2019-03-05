document.addEventListener('DOMContentLoaded',() =>{
  fetchUserInfo()
})

function currentUserFunc(userData) {
  return User.all.find(user => user.id === userData.id)
}

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
      navButtons(userData)
    })
}

function navButtons(user) {
  document.querySelector('#side-button1-match').addEventListener('click', ()=>{
    currentUserFunc(user).renderMatches()
  })

  document.querySelector('#side-button1-hero').addEventListener('click', ()=>{
    currentUserFunc(user).renderHeroes()
  })
}

