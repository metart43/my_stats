class Team {
  constructor(team) {
    this.id = team.id
    this.name = team.name
    this.users = team.users
    Team.all.push(this)
  }

  render(){
    let teamName = document.createElement('h2')
    teamName.innerHTML = `<h2> You Have Successfully Created Team: ${this.name} </h2>`
    return teamName
  }
}
Team.all = []
