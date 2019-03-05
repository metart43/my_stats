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
