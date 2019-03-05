class Match {
  constructor(match){
    this.id = match.id
    this.user = match.user
    this.hero = match.hero
    this.kills = match.kills
    this.deaths = match.deaths
    this.assists = match.assists
  }

  // Renders data from each match
  render() {
    let listItem = document.createElement('li')

    listItem.innerHTML = `
    <div class="match-card">
      <div class="hero-name">
        ${this.hero.name}
      </div>
      <div class="kda">
        K/D/A: ${this.kills}/${this.deaths}/${this.assists}
      </div>
      <div class="result">
        ${this.result? "Win" : "Loss"}
      </div>
    </div>
    `
    return listItem
  }

  renderUserHeroes(userData){
    if (userData.id === this.user.id) {
      // debugger
      console.log(this.hero)
    }
  }
}
