class UserSerializer < ActiveModel::Serializer
  has_many :matches
  has_many :teams
  attributes :id, :name
end
