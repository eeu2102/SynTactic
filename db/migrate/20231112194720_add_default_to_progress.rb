class AddDefaultToProgress < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :progress, :integer, default: 0
  end
end