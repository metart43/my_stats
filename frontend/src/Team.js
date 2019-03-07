class Team {
  constructor(team) {
    this.name = team.name
    this.users = team.users
}
  render(){
    let displayContainer = document.querySelector('.display-container')
    displayContainer.innerHTML = ''
    let teamCard = document.createElement('div')
    let teamName = document.createElement('h4')
    teamName.innerText = `Team: ${this.name}`
    let teamMateList = document.createElement('ul')
    teamMateList.innerText = 'Players:'
    this.users.forEach(user => {
      let teamMateEl = document.createElement('li')
      teamMateEl.innerText = `${user.name}`
      teamMateList.append(teamMateEl)
    })
    teamCard.append(teamName, teamMateList)
    let teamMateBttn = document.createElement('button')
    teamMateBttn.innerText = "Add TeamMates"
    teamMateBttn.id = 'button-mate'
    displayContainer.appendChild(teamCard)
    displayContainer.append(teamMateBttn)
  }
}

Team.all = []
