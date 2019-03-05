class User < ApplicationRecord
  has_many :matches
  has_many :user_teams
  has_many :teams, through: :user_teams
  has_many :heros, through: :matches
end
