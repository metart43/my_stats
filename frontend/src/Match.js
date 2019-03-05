class Match {
  constructor(match){
    this.id = match.id
    this.user = match.user
    this.hero = match.hero
    this.kills = match.kills
    this.deaths = match.deaths
    this.assists = match.assists
    this.result = match.result
    this.time = this.formatDate(match.created_at)
    Match.all.push(this)
    this.addUserHero()
  }

  formatDate(date){
    let newD = new Date(date)
    return `${newD.toLocaleTimeString()} ${newD.toLocaleDateString()}`
  }

  // Renders data from each match
  render() {
    let matchRow = document.createElement('tr')

    matchRow.innerHTML = `
      <th>${this.time}</th>
      <td>${this.hero.name}</td>
      <td>${this.kills}</td>
      <td>${this.deaths}</td>
      <td>${this.assists}</td>
      <td>${this.result? "Win" : "Loss"}</td>
    `
    return matchRow
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
