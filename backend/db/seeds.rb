require 'database_cleaner'

DatabaseCleaner.strategy = :truncation
DatabaseCleaner.clean
# User.destroy_all
# Hero.destroy_all
# Match.destroy_all

# artem = User.create(name: "Artem")
# ross = User.create(name: 'Ross')
# ben = User.create(name: 'Ben')
# chine = User.create(name: 'Chine')
# matthew = User.create(name: 'Matthew')

users = [
  {name: "Artem"},
  {name: "Ross"},
  {name: "Chine"},
  {name: "Ben"},
  {name: "ben"},
  {name: "Matthew"},
  {name: "Anthony"},
  {name: "Andrea"},
  {name: "Kyle"},
  {name: "Phil"},
  {name: "Hai"},
  {name: "Heloise"},
  {name: "Shannon"},
  {name: "James"},
  {name: "Chris"},
  {name: "Serven"},
  {name: "Ryan"},
  {name: "Shinik"},
  {name: "Melanie"},
  {name: "Jake"},
  {name: "Paul"},
  {name: "Ann"}
]

allUsers = users.map {|user| User.create(user)}

heroes = [
  {name: 'Earthshaker', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/earthshaker_hphover.png?v=4983174'},
  {name: 'Sven', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png?v=4983174'},
  {name: 'Tiny', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/tiny_hphover.png?v=4983174'},
  {name: 'Kunkka', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png?v=4983174'},
  {name: 'Beastmaster', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/beastmaster_hphover.png?v=4983174'},
  {name: 'Dragon Knight', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/dragon_knight_hphover.png?v=4983174'},
  {name: 'Clockwerk', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/rattletrap_hphover.png?v=4983174'},
  {name: 'Omniknight', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_hphover.png?v=4983174'},
  {name: 'Huskar', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/huskar_hphover.png?v=4983174'},
  {name: 'Alchemist', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/alchemist_hphover.png?v=4983174'},
  {name: 'Brewmaster', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/brewmaster_hphover.png?v=4983174'},
  {name: 'Treant Protector', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/treant_hphover.png?v=4983174'},
  {name: 'IO', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/wisp_hphover.png?v=4983174'},
  {name: 'Centaur Warrunner', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/centaur_hphover.png?v=4983174'},
  {name: 'Timbersaw', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/shredder_hphover.png?v=4983174'},
  {name: 'Bristleback', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/bristleback_hphover.png?v=4983174'},
  {name: 'Tusk', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/tusk_hphover.png?v=4983174'},
  {name: 'Elder Titan', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/elder_titan_hphover.png?v=4983174'},
  {name: 'Legion Commander', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/legion_commander_hphover.png?v=4983174'},
  {name: 'Earth Spirit', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/earth_spirit_hphover.png?v=4983174'},
  {name: 'Phoenix', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/phoenix_hphover.png?v=4983174'},
  {name: 'Mars', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/mars_hphover.png?v=4983174'},
  {name: 'Axe', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/axe_hphover.png?v=4983174'},
  {name: 'Pudge', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/pudge_hphover.png?v=4983174'},
  {name: 'Sand King', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/sand_king_hphover.png?v=4983174'},
  {name: 'Slardar', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/slardar_hphover.png?v=4983174'},
  {name: 'Tidehunter', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/tidehunter_hphover.png?v=4983174'},
  {name: 'Wraith King', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/skeleton_king_hphover.png?v=4983174'},
  {name: 'Lifestealer', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/life_stealer_hphover.png?v=4983174'},
  {name: 'Night Stalker', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/night_stalker_hphover.png?v=4983174'},
  {name: 'Doom', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/doom_bringer_hphover.png?v=4983174'},
  {name: 'Spirit Breaker', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/spirit_breaker_hphover.png?v=4983174'},
  {name: 'Lycan', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/lycan_hphover.png?v=4983174'},
  {name: 'Chaos Knight', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/chaos_knight_hphover.png?v=4983174'},
  {name: 'Undying', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/undying_hphover.png?v=4983174'},
  {name: 'Magnus', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/magnataur_hphover.png?v=4983174'},
  {name: 'Abaddon', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/abaddon_hphover.png?v=4983174'},
  {name: 'Underlord', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/abyssal_underlord_hphover.png?v=4983174'},
  {name: 'Anti-Mage', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/antimage_hphover.png?v=4983174'},
  {name: 'Juggernaut', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_hphover.png?v=4983174'},
  {name: 'Mirana', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/mirana_hphover.png?v=4983174'},
  {name: 'Morphling', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/morphling_hphover.png?v=4983174'},
  {name: 'Phantom Lancer', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_lancer_hphover.png?v=4983174'},
  {name: 'Vengeful Spirit', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/vengefulspirit_hphover.png?v=4983174'},
  {name: 'Riki', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/riki_hphover.png?v=4983174'},
  {name: 'Sniper', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/sniper_hphover.png?v=4983174'},
  {name: 'Lone Druid', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/lone_druid_hphover.png?v=4983174'},
  {name: 'Luna', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/luna_hphover.png?v=4983174'},
  {name: 'Bounty Hunter', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/bounty_hunter_hphover.png?v=4983174'},
  {name: 'Ursa', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/ursa_hphover.png?v=4983174'},
  {name: 'Gyrocopter', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/gyrocopter_hphover.png?v=4983174'},
  {name: 'Naga Siren', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/naga_siren_hphover.png?v=4983174'},
  {name: 'Troll Warlord', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/troll_warlord_hphover.png?v=4983174'},
  {name: 'Ember Spirit', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/ember_spirit_hphover.png?v=4983174'},
  {name: 'Monkey King', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_hphover.png?v=4983174'},
  {name: 'Pangolier', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/pangolier_hphover.png?v=4983174'},
  {name: 'Bloodseeker', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/bloodseeker_hphover.png?v=4983174'},
  {name: 'Shadow Fiend', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/nevermore_hphover.png?v=4983174'},
  {name: 'Razor', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/razor_hphover.png?v=4983174'},
  {name: 'Venomancer', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/venomancer_hphover.png?v=4983174'},
  {name: 'Faceless Void', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_hphover.png?v=4983174'},
  {name: 'Phantom Assassin', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_assassin_hphover.png?v=4983174'},
  {name: 'Viper', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/viper_hphover.png?v=4983174'},
  {name: 'Clinkz', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/clinkz_hphover.png?v=4983174'},
  {name: 'Broodmother', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/broodmother_hphover.png?v=4983174'},
  {name: 'Weaver', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/weaver_hphover.png?v=4983174'},
  {name: 'Spectre', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/spectre_hphover.png?v=4983174'},
  {name: 'Meepo', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/meepo_hphover.png?v=4983174'},
  {name: 'Nyx Assassin', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/nyx_assassin_hphover.png?v=4983174'},
  {name: 'Slark', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/slark_hphover.png?v=4983174'},
  {name: 'Medusa', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/medusa_hphover.png?v=4983174'},
  {name: 'Terrorblade', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/terrorblade_hphover.png?v=4983174'},
  {name: 'Arc Warden', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/arc_warden_hphover.png?v=4983174'},
  {name: 'Crystal Maiden', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_hphover.png?v=4983174'},
  {name: 'Puck', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/puck_hphover.png?v=4983174'},
  {name: 'Storm Spirit', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/storm_spirit_hphover.png?v=4983174'},
  {name: 'Wind Ranger', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/windrunner_hphover.png?v=4983174'},
  {name: 'Zeus', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/zuus_hphover.png?v=4983174'},
  {name: 'Lina', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/lina_hphover.png?v=4983174'},
  {name: 'Shadow Shaman', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_shaman_hphover.png?v=4983174'},
  {name: 'Tinker', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/tinker_hphover.png?v=4983174'},
  {name: 'Natures Prophet', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/furion_hphover.png?v=4983174'},
  {name: 'Enchantress', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/enchantress_hphover.png?v=4983174'},
  {name: 'Jakiro', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/jakiro_hphover.png?v=4983174'},
  {name: 'Chen', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/chen_hphover.png?v=4983174'},
  {name: 'Silencer', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/silencer_hphover.png?v=4983174'},
  {name: 'Ogre Magi', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/ogre_magi_hphover.png?v=4983174'},
  {name: 'Rubick', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/rubick_hphover.png?v=4983174'},
  {name: 'Disruptor', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/disruptor_hphover.png?v=4983174'},
  {name: 'Keeper of the Light', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/keeper_of_the_light_hphover.png?v=4983174'},
  {name: 'Skywrath Mage', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/skywrath_mage_hphover.png?v=4983174'},
  {name: 'Oracle', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/oracle_hphover.png?v=4983174'},
  {name: 'Techies', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/techies_hphover.png?v=4983174'},
  {name: 'Dark Willow', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/dark_willow_hphover.png?v=4983174'},
  {name: 'Bane', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/bane_hphover.png'},
  {name: 'Lich', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/lich_hphover.png'},
  {name: 'Lion', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/lion_hphover.png'},
  {name: 'Witch Doctor', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/witch_doctor_hphover.png'},
  {name: 'Enigma', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/enigma_hphover.png'},
  {name: 'Necrophos', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/necrolyte_hphover.png'},
  {name: 'Warlock', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/warlock_hphover.png'},
  {name: 'Queen of Pain', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/queenofpain_hphover.png'},
  {name: 'Death Prophet', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/death_prophet_hphover.png'},
  {name: 'Pugna', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/pugna_hphover.png'},
  {name: 'Dazzle', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/dazzle_hphover.png'},
  {name: 'Leshrac', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/leshrac_hphover.png'},
  {name: 'Dark Seer', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/dark_seer_hphover.png'},
  {name: 'Bat Rider', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/batrider_hphover.png'},
  {name: 'Ancient Apparition', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/ancient_apparition_hphover.png'},
  {name: 'Invoker', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/invoker_hphover.png'},
  {name: 'Outworld Devourer', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/obsidian_destroyer_hphover.png'},
  {name: 'Shadow Demon', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_demon_hphover.png'},
  {name: 'Visage', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/visage_hphover.png'},
  {name: 'Winter Wyvern', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/winter_wyvern_hphover.png'},
  {name: 'Grimstroke', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/grimstroke_hphover.png'},
  {name: 'Drow Ranger', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/drow_ranger_hphover.png?v=4983174'},
  {name: 'Templar Assassin', image: 'http://cdn.dota2.com/apps/dota2/images/heroes/templar_assassin_hphover.png?v=4983174'}
]

heroes.each {|hero| Hero.create(hero)}

# Match.create([
#   {user: artem, hero_id: 1, kills: 10, deaths: 5, assists: 10, result: true},
#   {user: artem, hero_id: 1, kills: 5, deaths: 2, assists: 5, result: false},
#   {user: artem, hero_id: 3, kills: 3, deaths: 5, assists: 3, result: false},
#   {user: artem, hero_id: 4, kills: 1, deaths: 1, assists: 5, result: true},
#   {user: ross, hero_id: 3, kills: 5, deaths: 2, assists: 1, result: true},
#   {user: chine, hero_id: 4, kills: 1, deaths: 6, assists: 6, result: false},
#   {user: ben, hero_id: 4, kills: 8, deaths: 7, assists: 5, result: true}
# ])

resultRand = [true, false]

allUsers.each do |user|
  30.times do |i|
    match = Match.create({
    user: user,
    hero_id: Faker::Number.between(1, heroes.length),
    kills: Faker::Number.between(0, 20),
    deaths: Faker::Number.between(0, 20),
    assists: Faker::Number.between(0, 20),
    result: resultRand.sample
    })

    match.update!(
      created_at: Faker::Time.between(2.months.ago, Date.today, :all)
    )
  end
end

# navi = Team.create(name: "Na'Vi")
# liquid = Team.create(name: 'Liquid')

teams = 10.times do |i|
  teamInstance = Team.create(name: Faker::Games::Dota.team)

  while teamInstance.users.length < 5 do
    randUser = allUsers[Faker::Number.between(0, allUsers.length-1)]
    if !teamInstance.users.include? randUser
      teamInstance.users << randUser
    end
  end
end
# navi.users << [allUsers[0], allUsers[1], allUsers[2], allUsers[3], allUsers[5]]
# liquid.users << [allUsers[4], allUsers[2], allUsers[5], allUsers[1], allUsers[1]]
