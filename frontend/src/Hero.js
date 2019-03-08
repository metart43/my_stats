class Hero {
  constructor(hero) {
    this.id = hero.id
    this.name = hero.name
    this.image = hero.image
    Hero.all.push(this)
  }

  static getHeroUrl() {
    return 'http://localhost:3000/heros'
  }

  static fetchHero() {
    fetch(Hero.getHeroUrl())
      .then(res => res.json())
      .then(heroes => heroes.forEach(hero => {
        new Hero(hero)
      }))
  }
}

Hero.all = []