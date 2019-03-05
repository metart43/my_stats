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
    document.querySelector('.display-container').innerHTML = ''
    this.matches.forEach(userMatch => {
      let foundMatch = Match.all.find(match => match.id === userMatch.id)
      document.querySelector(".display-container").appendChild(foundMatch.render())
    })
  }

  renderHeroes(){
    document.querySelector(".display-container").innerHTML = ''
    this.heroes.forEach(hero => {
      let heroListItem = document.createElement('li')
      heroListItem.innerHTML = `
        <div class="match-card">
          <div class="hero-name">
            ${hero.hero.name} 
          </div>
          <div class="kda">
            K/D/A: ${hero.kills}/${hero.deaths}/${hero.assists}</div>
          <div class="result">
            ${hero.result * 100}%
          </div>
        </div>
      `
      document.querySelector(".display-container").appendChild(heroListItem)
    })
  }
}

User.all = []
