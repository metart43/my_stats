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

  // Formats the date
  formatDate(date){
    let newD = new Date(date)
    return `${newD.toLocaleTimeString()} ${newD.toLocaleDateString()}`
  }

  // Renders data from each match
  render(counter) {
    let matchRow = document.createElement('tr')
    matchRow.innerHTML = `
      <th class="align-middle">${this.time}</th>
      <td class="align-middle"><img src="${this.hero.image}" alt=""> ${this.hero.name}</td>
      <td class="align-middle">${this.kills}</td>
      <td class="align-middle">${this.deaths}</td>
      <td class="align-middle">${this.assists}</td>
      <td class="align-middle">${this.result? "Win" : "Loss"}</td>
      <td class="align-left text-md-left"><canvas id="myChart-${counter}"></canvas></td>
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

  static renderMatchForm(user) {
    let matchForm = document.createElement('form')
    matchForm.innerHTML = `
    <div class="form-row">
      <div class="form-group col-md-3">
        <label>Hero</label>
        <select class="form-control" name="hero" id="hero-select">
        </select>
      </div>
      <div class="form-group col-md-2">
      <label>Kills</label>
      <input type="number" min="0" class="form-control" name="kills" placeholder="Kills">
      </div>
      <div class="form-group col-md-2">
        <label>Deaths</label>
        <input type="number" min="0" class="form-control" name="deaths" placeholder="Deaths">
      </div>
      <div class="form-group col-md-2">
        <label>Assists</label>
        <input type="number" min="0" class="form-control" name="assists" placeholder="Assists">
      </div>
      <div class="form-group col-md-2">
          <label>Result</label>
          <select class="form-control" name="result">
            <option>W</option>
            <option>L</option>
          </select>
      </div>
      <div class="col-md-1" id="button-place">
      </div>
    </div>`
    
    let addMatch = document.createElement('button')
    addMatch.id="add-match"
    addMatch.classList = 'btn btn-outline-dark my-2 my-sm-0'
    addMatch.innerText = 'Add'
    addMatch.addEventListener('click', () => {
      Match.addNewMatch(user)
    })
    document.querySelector('.display-container').prepend(matchForm)

    Hero.all.forEach(hero => {
      document.querySelector('#hero-select').innerHTML += `<option>${hero.name}</option>`
    })
    document.querySelector('#button-place').append(addMatch)
  }

  static addNewMatch(user) {
    event.preventDefault()
    let heroName = document.querySelector('.form-row').children[0].children[1].value
    let kills = document.querySelector('.form-row').children[1].children[1].value
    let deaths = document.querySelector('.form-row').children[2].children[1].value
    let assists = document.querySelector('.form-row').children[3].children[1].value
    let result = document.querySelector('.form-row').children[4].children[1].value

    let data = {
      user_id: currentUserFunc(user).id,
      hero_id: Hero.all.find(h => h.name === heroName).id,
      kills: parseInt(kills),
      deaths: parseInt(deaths),
      assists: parseInt(assists),
      result: result === "W" ? true : false
    }

    fetch(Match.getMatchUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(match => {
      let matchInstance = new Match(match)
      user.matches.push(matchInstance)
      user.renderMatches()
      console.log(matchInstance)
    })
  }

  static getMatchUrl() {
    return 'http://localhost:3000/matches/'
  }
}

Match.all = []
