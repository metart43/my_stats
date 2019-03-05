class User {
  constructor(user) {
    this.id = user.id
    this.name = user.name
    this.matches = user.matches
    this.teams = user.teams
    User.all.push(this)
  }

  render() {
    let userName = document.createElement('h2')
    userName.innerText = this.name
    return userName
  }

  renderMatches(){
    debugger
    this.matches.forEach(match => {
      let matchInstance = new Match(match)
      document.querySelector(".user_container").appendChild(matchInstance.render())
    })
  }
}

User.all = []
