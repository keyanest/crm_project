class CreateLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :logs do |t|
      t.string :title, null: false
      t.date :date, null: false
      t.text :notes, null: false
      t.belongs_to :contact, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
