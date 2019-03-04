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
  let userDiv = document.createElement('div')
  userDiv.id = "user-info"

  let userName = document.createElement('h2')
  userName.id = "user-name"
  userName.innerText = userData.name

  console.log(userData, userDiv, userName)
}