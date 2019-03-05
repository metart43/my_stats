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
  render(matchList) {
    let listItem = document.createElement('li')

    listItem.innerHTML = `
    <div class="match-card">
      <div class="hero-name">
        ${match.hero.name}
      </div>
      <div class="kda">
        K/D/A: ${match.kills}/${match.deaths}/${match.assists}
      </div>
      <div class="result">
        ${match.result? "Win" : "Loss"}
      </div>
    </div>
  `

    matchList.appendChild(listItem)
  }
}