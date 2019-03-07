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
//Creates Side Menude Buttons
function navButtons(user) {
let matchBttn = document.querySelector('#side-button1-match').addEventListener('click', ()=>{currentUserFunc(user).renderMatches()})
let teamCreateBttn = document.querySelector('#side-button1-new-team').addEventListener('click', ()=>{teamFormCreate(currentUserFunc(user))})
}

//creates a Team Form
function teamFormCreate(currentUser) {
  let teamForm = document.createElement('div')
  let displayContainer = document.querySelector('.display-container')
  displayContainer.innerHTML = ''
  teamForm.innerHTML += ` <div class="container">
  <h3>Create a New Team:</h3>
  <br>
  <form id='teamName'>
  <input class="form-control form-control-sm" id="team-name" type="text" placeholder="Team Name">
  <input class="button" id='team-create-button' type="submit">
  </form>
</div>`
  displayContainer.appendChild(teamForm)
  let createTeamBttn = document.querySelector('#teamName').addEventListener('submit', () => {
    event.preventDefault()
    let teamName = document.querySelector('#team-name').value
    createTeam(teamName, currentUser)
  })
}

//Fetch call to Rails API to create a team
function createTeam(name, currentUser) {
fetch('http://localhost:3000/teams',{
      method:"POST",
    	headers: {"Content-Type": "application/json"},
    	body: JSON.stringify( {name: name,
      user_ids: [currentUser.id]})
})
.then(resp => resp.json())
.then(teamData => {
  let teamInstance = new Team (teamData)
  let userContainer = document.querySelector('.display-container')
  let formContainer = document.querySelector('.container')
  let teamMateBttn = document.createElement('button')
  teamMateBttn.innerText = "Add TeamMates"
  teamMateBttn.id = 'button-mate'
  teamInstance.render()
  userContainer.append(teamMateBttn)
  debugger
  document.querySelector('#button-mate').addEventListener('click', () =>{
    fetchUsers(teamData, currentUser)
  })
  formContainer.style.display = 'none'
})
}

//Fetch call to create find a user
function fetchUsers(teamData, currentUser) {
  let teamMatesSelect = document.createElement('div')
  teamMatesSelect.innerHTML += `<div class="container">
  <br>
  <form id='teamMate'>
  <h3>Pick a Team Mate:</h3>
  <input class="form-control form-control-sm" id="myInput" type="text" placeholder="Search..">
  <input class="button" type="submit">
  </form>
</div>`
document.querySelector('.user_container').append(teamMatesSelect)
document.querySelector('#teamMate').addEventListener('submit', () =>{
  event.preventDefault()
  let search = document.querySelector('#myInput').value
  fetch('http://localhost:3000/users')
  .then(resp => resp.json())
  .then(users => {
    const foundUser = users.find(user => user.name === search)
    if (!foundUser) {
        alert("User cannot be found!")
        return
    } else {
       updateTeam(foundUser, teamData, currentUser)
    }
  })
})
}

function updateTeam(foundUser, teamData, currentUser) {
  fetch(`http://localhost:3000/teams/${teamData.id}`,{
        method:"PATCH",
      	headers: {"Content-Type": "application/json"},
      	body: JSON.stringify( {name: teamData.name,
        user_ids: [foundUser.id, currentUser.id]})
  })
  .then(resp => resp.json())
  .then(updatedTeamData => {
    let teamInstance = new Team (updatedTeamData)
    teamInstance.render()
  })
}
