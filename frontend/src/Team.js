class Team {
  constructor(team) {
    this.name = team.name
    this.users = team.users
}
  render(){
    debugger
    let teamCard = document.createElement('div')
    let userContainer = document.querySelector('.display-container')
    let formContainer = document.querySelector('.container')
    let teamName = document.createElement('h4')
    teamName.innerText = `Team: ${this.name}`
    let teamMateList = document.createElement('ul')
    this.users.forEach(user => {
      let teamMateEl = document.createElement('li')
      teamMateEl.innerText = `${user.name}`
      teamMateList.append(teamMateEl)
    })
    let displayContainer = document.querySelector('.display-container')
    displayContainer.appendChild(teamMateList)
    return teamName
  }
}

Team.all = []
