class Match {
  constructor(match){
    this.id = match.id
    this.user = match.user
    this.hero = match.hero
    this.kills = match.kills
    this.deaths = match.deaths
    this.assists = match.assists
    this.result = match.result
    Match.all.push(this)
    this.addUserHero()
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

  addUserHero(){
    let foundUser = User.all.find(user => user.id === this.user.id)
    let foundHero = foundUser.heroes.find(hero => hero.hero.id === this.hero.id)
    if (foundUser && !foundHero) {
      foundUser.heroes.push({hero: this.hero, 
                            kills: this.kills, 
                            deaths: this.deaths, 
                            assists: this.assists, 
                            result: this.result? 1 : 0, 
                            played: 1})
    } else {
      foundHero.kills = (foundHero.kills + this.kills) / ++foundHero.played
      foundHero.deaths = (foundHero.deaths + this.deaths) / foundHero.played
      foundHero.assists = (foundHero.assists + this.assists) / foundHero.played
      foundHero.result = (foundHero.result + this.result? 1 : 0) / foundHero.played
    }
  }
}

Match.all = []
