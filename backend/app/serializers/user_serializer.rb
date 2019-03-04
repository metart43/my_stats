class UserSerializer < ActiveModel::Serializer
  has_many :matches
  attributes :id
end
