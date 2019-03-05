class User {
  constructor(user) {
    debugger
    this.id = user.id
    this.name = user.name
    this.matches = user.matches
    this.teams = user.teams
  }

  render() {
    let userName = document.querySelector('#user-name')
    userName.innerText = this.name
  }
}
