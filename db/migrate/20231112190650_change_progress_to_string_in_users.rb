class ChangeProgressToStringInUsers < ActiveRecord::Migration[7.0]
  def up
    change_column :users, :progress, :integer, using: 'progress::integer'
  end
  def down
    change_column :users, :progress, :string
  end
end

