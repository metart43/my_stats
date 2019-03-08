class AddImageToHeros < ActiveRecord::Migration[5.2]
  def change
    add_column :heros, :image, :string
  end
end
