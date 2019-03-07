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

  static renderMatchForm(user) {
    let matchForm = document.createElement('form')

    matchForm.innerHTML = `
    <div class="form-row">
      <div class="form-group col-md-3">
        <label>Hero</label>
        <select class="form-control" name="hero">
          <option selected>Hero...</option>
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
    document.querySelector('#button-place').append(addMatch)
  }

  static addNewMatch(user) {
    console.log(user)
  }
}

Match.all = []
