class AddOpportunitiesColumnToStats < ActiveRecord::Migration[5.0]
  def change
    add_column :stats, :opportunities, :integer, null: false
  end
end
