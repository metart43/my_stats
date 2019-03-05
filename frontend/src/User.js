class User {
  constructor(user) {
    debugger
    this.id = user.id
    this.name = user.name
    this.matches = user.matches
    this.teams = user.teams
<<<<<<< HEAD
  }

  render() {
    let userName = document.querySelector('#user-name')
    userName.innerText = this.name
  }
}
=======
    User.all.push(this)
  }

  render() {
    let userName = document.createElement('h2')
    userName.innerText = this.name
    return userName
  }
}

User.all = []
>>>>>>> teams
