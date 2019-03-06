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
let matchBttn = document.querySelector('#side-button1-match').addEventListener('click', ()=>{currentUserFunc(user).renderMatches()})
let teamCreateBttn = document.querySelector('#side-button1-new-team').addEventListener('click', ()=>{teamFormCreate(currentUserFunc(user))})
}

function teamFormCreate(user) {
  let formHeader = document.createElement('h3')
  formHeader.innerText = 'Create a New Team:'
  let teamForm = document.createElement('div')
  teamForm.innerHTML += ` <div class="container">
  <br>
  <form id='teamName'>
  <input class="form-control form-control-sm" id="team-name" type="text" placeholder="Team Name">
  <br>
  <input class="btn btn-outline-dark btn-sm" id='team-create-button' type="submit">
  </form>
</div>`
  document.querySelector('.user_container').append(formHeader,teamForm)
  let createTeamBttn = document.querySelector('#teamName').addEventListener('submit', () => {
    event.preventDefault()
    let teamMateBttn = document.createElement('button')
    teamMateBttn.innerText = "Add TeamMates"
    teamMateBttn.id = 'button-mate'
    teamMateBttn.className = 'btn btn-outline-dark btn-sm'
    teamMateBttn.disable = false
    teamCard.appendChild(teamInstance.render())
    userContainer.append(teamCard, teamMateBttn)
    let teamName = document.querySelector('#team-name').value
    createTeam(teamName, user)
  })
}

function createTeam(name, user) {
fetch('http://localhost:3000/teams',{
      method:"POST",
    	headers: {"Content-Type": "application/json"},
    	body: JSON.stringify( {name: name,
      user_ids: [user.id]})
})
.then(resp => resp.json())
.then(teamData => {
  let teamInstance = new Team (teamData)
  document.querySelector('#button-mate').addEventListener('click', () =>{
    fetchUsers(teamData, currentUser, teamMateBttn)
  })
  formContainer.style.display = 'none'
})
}

//Fetch call to create find a user
function fetchUsers(teamData, currentUser, teamMateBttn) {
    teamMateBttn.disabled = true
  let teamMatesSelect = document.createElement('div')
  teamMatesSelect.innerHTML += `<div class="container">
  <br>
  <form id='teamMate'>
  <h5>Pick A Mate:</h5>
  <input class="form-control form-control-sm" id="myInput" type="text" placeholder="Search..">
  <br>
  <input class="btn btn-outline-dark btn-sm" type="submit">
  </form>
</div>`
document.querySelector('.user_container').append(teamMatesSelect)
document.querySelector('#teamMate').addEventListener('submit', () =>{
  event.preventDefault()
  let teamName = document.querySelector('#team-name').value
  let search = document.querySelector('#myInput').value
  fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(users => {
    const foundUser = users.find(user => user.name === search)
    if (!foundUser) {
        alert("User cannot be found!")
        return
    } else {
      // createTeam(foundUser, teamName)
    }
  })
})
}

function updateTeam(foundUser, teamData, currentUser) {
  debugger
  fetch(`http://localhost:3000/teams/${teamData.id}`,{
        method:"PATCH",
      	headers: {"Content-Type": "application/json"},
      	body: JSON.stringify( {name: teamData.name,
        user_ids: [foundUser.id, currentUser.id]})
  })
  .then(resp => resp.json())
  .then(updatedTeam => {
  })
}
