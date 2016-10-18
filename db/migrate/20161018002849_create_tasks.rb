class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.date :assign_date, null: false
      t.date :due_date, null: false
      t.belongs_to :contact, null: false
      t.belongs_to :user, null: false
      t.belongs_to :log, null: false

      t.timestamps null: false
    end
  end
end
