class User {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.matches = user.matches
    this.teams = user.teams
    this.heroes = []
    User.all.push(this)
    this.matches.forEach(match => new Match(match))
  }

  render() {
    let userName = document.createElement('h2')
    userName.innerText = this.name
    return userName
  }

  renderMatches(){
    let dispContainer = document.querySelector(".display-container")
    dispContainer.innerHTML = ''
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
    let tableBody = document.createElement('tbody')
    this.matches.forEach(userMatch => {
      let foundMatch = Match.all.find(match => match.id === userMatch.id)
      tableBody.prepend(foundMatch.render())
    })
    matchTable.appendChild(tableBody)
    dispContainer.appendChild(matchTable)
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
        </tr>
      </thead>
    `
    let tableBody = document.createElement('tbody')
    this.heroes.forEach(hero => {
      let heroRow = document.createElement('tr')
      heroRow.innerHTML = `
        <th scope="row">${hero.hero.name}</th>
        <td>${hero.kills}</td>
        <td>${hero.deaths}</td>
        <td>${hero.assists}</td>
        <td>${hero.result * 100}%</td>
      `
      tableBody.appendChild(heroRow)
    })
    heroTable.appendChild(tableBody)
    dispContainer.appendChild(heroTable)
  }
}

User.all = []
