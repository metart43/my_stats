class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user, :hero, :kills, :deaths, :assists, :result
end
