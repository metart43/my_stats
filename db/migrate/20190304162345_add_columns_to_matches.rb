class AddColumnsToMatches < ActiveRecord::Migration[5.2]
  def change
    # add_column :posts, :published_status, :string
    add_column :matches, :kills, :integer
    add_column :matches, :deaths, :integer
    add_column :matches, :assists, :integer
    add_column :matches, :result, :boolean
  end
end
