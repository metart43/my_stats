class User {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.matches = user.matches
    this.teams = user.teams
    this.heroes = []
    User.all.push(this)
    this.matches.forEach(match => new Match(match))
    this.teams.forEach(team => new Team(team))
  }

  render() {
    document.querySelector('.display-container').innerHTML = ''
    document.querySelector('#user-name').innerText = this.name
  }

  renderMatches(){
    let dispContainer = document.querySelector(".display-container")
    dispContainer.innerHTML = ''

    let addMatchBtn = document.createElement('button')
    addMatchBtn.id = 'add-match-button'
    addMatchBtn.classList = 'btn btn-outline-dark my-2 my-sm-0'
    addMatchBtn.innerText = 'Add New Match'
    addMatchBtn.addEventListener('click', () => {
      addMatchBtn.remove()
      Match.renderMatchForm(this, addMatchBtn)
    })

    let matchTable = document.createElement('table')
    matchTable.classList = "table"
    matchTable.innerHTML = `
    <thead>
    <tr>
    <th scope="col">Match Played</th>
    <th scope="col">Hero</th>
    <th scope="col">Kills</th>
    <th scope="col">Deaths</th>
    <th scope="col">Assists</th>
    <th scope="col">Win/Loss</th>
    </tr>
    </thead>
    `

    let sorted = this.matches.sort(function (a, b) {
      return new Date(a.created_at) - new Date(b.created_at)
    })

    let tableBody = document.createElement('tbody')
    sorted.forEach(userMatch => {
      let foundMatch = Match.all.find(match => match.id === userMatch.id)
      tableBody.prepend(foundMatch.render())
    })
    matchTable.appendChild(tableBody)
    dispContainer.append(addMatchBtn, matchTable)
  }

  renderHeroes(){
    let dispContainer = document.querySelector(".display-container")
    dispContainer.innerHTML = ''
    let heroTable = document.createElement('table')
    heroTable.classList = "table"
    heroTable.innerHTML = `
    <thead>
    <tr>
    <th scope="col">Name</th>
    <th scope="col">Kills</th>
    <th scope="col">Deaths</th>
    <th scope="col">Assists</th>
    <th scope="col">Win %</th>
    <th scope="col">Played</th>
    </tr>
    </thead>
    `
    let sorted = this.heroes.sort(function (a, b) {
      var nameA = a.hero.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.hero.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    })
    
    let tableBody = document.createElement('tbody')
    sorted.forEach(hero => {
      let heroRow = document.createElement('tr')
      heroRow.innerHTML = `
      <th class="align-middle" scope="row"><img src="${hero.hero.image}" alt=""> ${hero.hero.name}</th>
      <td class="align-middle">${hero.kills.toFixed(2)}</td>
      <td class="align-middle">${hero.deaths.toFixed(2)}</td>
      <td class="align-middle">${hero.assists.toFixed(2)}</td>
      <td class="align-middle">${(hero.result * 100).toFixed(2)}%</td>
      <td class="align-middle">${hero.played}</td>
      `
      tableBody.appendChild(heroRow)
    })
    heroTable.appendChild(tableBody)
    dispContainer.appendChild(heroTable)
  }

  static createUserForm(userName) {
    let dispContainer = document.querySelector('.display-container')
    dispContainer.innerHTML = ''
    document.querySelector('#user-name').innerText = ''

    let noUser = document.createElement('h5')
    noUser.classList = 'no-user-alert'
    noUser.innerText = `There is no user with the display name ${userName}. Check capitilization, it counts!`

    let newUserDiv = document.createElement('div')

    let newUser = document.createElement('h3')
    newUser.innerText = 'Create new user?'

    let newBtn = document.createElement('button')
    newBtn.classList = 'btn btn-outline-dark my-2 my-sm-0'
    newBtn.id = 'new-user'
    newBtn.innerText = 'New User'
    newBtn.addEventListener('click', () => {
      newBtn.remove()
      newUserDiv.append(newUser)
      User.getUserNameForm(newUserDiv)
    })

    newUserDiv.append(newUser, newBtn)
    dispContainer.append(noUser, newUserDiv)
  }

  static getUserNameForm(newUserDiv) {
    let createBtn = document.createElement('button')
    createBtn.innerText = 'Create User'
    createBtn.classList = 'btn btn-outline-dark my-2 my-sm-0'
    createBtn.addEventListener('click', () => {
      User.addNewUser(document.querySelector('#new-user-name').value)
    })
    newUserDiv.append(User.showNewForm(), createBtn)
  }

  static showNewForm() {
    let newUserInput = document.createElement('form')
    newUserInput.innerHTML = `
    <div class="form-group">
      <input class="form-control" id="new-user-name" placeholder="Enter Username">
      <small class="form-text text-muted">Remember, capitilization matters when picking a username.</small>
    </div>`
    return newUserInput
  }

  static addNewUser(newUserName) {
    fetch(getUserUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({name: newUserName})
    })
    .then(res => res.json())
    .then(user => {
      let userInstance = new User(user)
      userInstance.render()
    })
  }

  renderTeams(){
    let dispContainer = document.querySelector(".display-container")
    dispContainer.innerHTML = ''
    let teamTable = document.createElement('table')
    teamTable.className = 'table'
    teamTable.innerHTML = `
    <thead>
    <tr>
    <th scope="col">Team Name</th>
    <th scope="col">Team Players</th>
    </tr>
    </thead>
    `
    let tableBody = document.createElement('tbody')
    this.teams.forEach(team => {
      let teamRow = document.createElement('tr')
      let teamNameHeader = document.createElement('th')
      teamNameHeader.innerText = `${team.name}`
      teamRow.append(teamNameHeader)
      team.users.forEach(user => {
        let teamPlayersRow = document.createElement('td')
        teamPlayersRow.innerText = `${user.name}`
        teamRow.append(teamPlayersRow)
      })
      tableBody.append(teamRow)
    })
    teamTable.append(tableBody)
    dispContainer.append(teamTable)
  }
}

User.all = []
