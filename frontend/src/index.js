document.addEventListener('DOMContentLoaded',() =>{
  document.querySelector('#show-user').addEventListener('click', () => {
    event.preventDefault()
    let searchUser = document.querySelector('#search-user')
    let userName = searchUser.value
    searchUser.value = ''
    fetchUserInfo(userName)
  })
})

// Returns if user is found in the User.js class
function currentUserFunc(userData) {
  return User.all.find(user => user.id === userData.id)
}

// Returns User URL
function getUserUrl() {
  return 'http://localhost:3000/users/'
}

// Grab user from API
function fetchUserInfo(userName) {
  fetch(getUserUrl() + userName)
    .then(resp => resp.json())
    .then(userData => {
      let isUser = currentUserFunc(userData)
      if (!isUser) {
        isUser = new User(userData)
      }
      isUser.render()
      navButtons(userData)
    })
    .catch(error => User.createUserForm(userName))
}

function navButtons(user) {
  document.querySelector('#side-button1-match').addEventListener('click', ()=>{
    currentUserFunc(user).renderMatches()
  })

  document.querySelector('#side-button1-hero').addEventListener('click', ()=>{
    currentUserFunc(user).renderHeroes()
  })
}

