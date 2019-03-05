class MatchSerializer < ActiveModel::Serializer
  attributes :id, :user, :hero, :kills, :deaths, :assists, :result, :created_at
end
