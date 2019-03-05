class RemoveColumnUserIdFromTeams < ActiveRecord::Migration[5.2]
  def change
    remove_column :teams, :user_id, :integer
  end
end
