require 'database_cleaner'

DatabaseCleaner.strategy = :truncation
DatabaseCleaner.clean
# User.destroy_all
# Hero.destroy_all
# Match.destroy_all

User.create([
  {name: 'Artem'},
  {name: 'Ross'},
  {name: 'Matthew'},
  {name: 'Chine'}
  ])

Hero.create([
  {name: 'Earthshaker'},
  {name: 'Enchantress'},
  {name: 'Drow Ranger'},
  {name: 'Templar Assassin'}
  ])

Match.create([
  {user_id: 1, hero_id: 1, kills: 10, deaths: 5, assists: 10, result: true},
  {user_id: 1, hero_id: 3, kills: 5, deaths: 2, assists: 1, result: true},
  {user_id: 1, hero_id: 4, kills: 1, deaths: 6, assists: 6, result: false},
  {user_id: 1, hero_id: 4, kills: 8, deaths: 7, assists: 5, result: true}
])
