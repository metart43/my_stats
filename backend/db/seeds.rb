require 'database_cleaner'

DatabaseCleaner.strategy = :truncation
DatabaseCleaner.clean
# User.destroy_all
# Hero.destroy_all
# Match.destroy_all

artem = User.create(name: "Artem")
ross = User.create(name: 'Ross')
ben = User.create(name: 'Ben')
chine = User.create(name: 'Chine')
matthew = User.create(name: 'Matthew')

Hero.create([
  {name: 'Earthshaker'},
  {name: 'Enchantress'},
  {name: 'Drow Ranger'},
  {name: 'Templar Assassin'}
  ])

Match.create([
  {user: artem, hero_id: 1, kills: 10, deaths: 5, assists: 10, result: true},
  {user: ross, hero_id: 3, kills: 5, deaths: 2, assists: 1, result: true},
  {user: chine, hero_id: 4, kills: 1, deaths: 6, assists: 6, result: false},
  {user: ben, hero_id: 4, kills: 8, deaths: 7, assists: 5, result: true}
])

navi = Team.create(name: "Na'Vi")
liquid = Team.create(name: 'Liquid')


navi.users << [artem, ross, chine]
liquid.users << [matthew, chine, ben]
