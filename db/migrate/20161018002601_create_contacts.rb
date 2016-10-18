class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_number, null: false
      t.string :email, null: false
      t.string :company, null: false
      t.string :position
      t.string :department
      t.date :last_contact
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
