class CreateStats < ActiveRecord::Migration[5.0]
  def change
    create_table :stats do |t|
      t.date :date, null: false
      t.integer :calls_made, null: false
      t.integer :contacts_made, null: false
      t.integer :meetings_set, null: false
      t.integer :deals_won, null: false
      t.integer :deals_lost, null: false
      t.belongs_to :user, null: false
    end
  end
end
